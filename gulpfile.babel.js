'use strict';
import	gulp 			from   'gulp';
import  webpack 		from   'webpack';
import  gutil 			from   'gulp-util';
import 	webpackServer 	from   'webpack-dev-server';
import 	runSequence 	from   'run-sequence';
import 	plumber 		from   'gulp-plumber';
import 	revReplace 		from   'gulp-rev-replace';
import 	del 			from   'del';
import 	merge 			from   'merge';
import 	fs 				from   'fs';
import 	path 			from   'path';
import 	yargs 			from   'yargs';

import 	packageJson 	from   './package.json';
import 	baseConfig 		from   './webpackConfig/webpack.base.js';
import 	devConfig 		from   './webpackConfig/webpack.dev.js';
import 	productConfig 	from   './webpackConfig/webpack.product.js';

const routes = {
	htmlFolder		 : './src/views/',
	staticProduct 	 : './build/',
	templatesProduct : './',
};
const files = {
	htmls     		 : ['./src/views/index/index.html'], 		// 原始 html 文件，下面 get-internal-file 任务中做处理
	manifest  		 : ['./webpack-assets.json'],
	statics 		 : ['./assets/**/*.*'],
	proTemplates 	 : ['./index.html'],
	proAssets	 	 : ['./build/**/*.*'],
};

const devCompiler = webpack(merge(baseConfig,devConfig));

function errHandler(src,err){
	gutil.beep();
	if(src){
		throw new gutil.PluginError(src,err);
	}else{
		gutil.log(src,err);
	}
};

gulp.task('cleanDev',done=>{
	return del(files.statics.concat(files.manifest)
		.concat(files.proTemplates)
		.concat(files.proAssets),
		{force:true},
		done
		);
});
gulp.task('cleanProduct',done=>{
	return del(files.statics.concat(files.manifest)
		.concat(files.proTemplates)
		.concat(files.proAssets),
		{force:true},
		done
		);
});

// 本地开发
gulp.task('dev',()=>{
	runSequence('cleanDev','webpack-watch','webpack-run-dev','start-server');
});

gulp.task('webpack-watch',done=>{
	devCompiler.watch({
		aggregateTimeout:500,
	},(err,stats)=>{
		if(err){
			errHandler('webpack-watch',err);
		};
		gutil.log('webpack-watch',stats.toString({
			colors:true,
			chunks:false,
		}));
		done();
	})
});

gulp.task('webpack-run-dev',done=>{
	devCompiler.run((err,stats)=>{
		if(err){
			errHandler('webpack-run-dev',err);
		};
		done();
	});
});

gulp.task('start-server',done=>{
	let host = packageJson.host;
	let port = packageJson.port;
	new webpackServer(devCompiler,{
		publicPath:devConfig.output.publicPath,
		stats:{
			colors:true,
		},
		hot:true,
		inline:true,
		disableHostCheck:true,
	}).listen(port,host,err=>{
		if(err){
			errHandler('webpack-start-dev-server',err);
		};
		gutil.log('webpack-dev-server:',`http://${host}:${port}`);
		done();
	})
});

// 编译发布
gulp.task('release',done=>{
	runSequence(
		'cleanProduct',
		'webpack-run-product',
		// ['release-templates','release-assets'],
		['release-templates'],
		done
		);
});

gulp.task('webpack-run-product',done=>{

	function getfileExtension(filename){
		let arr = filename.split('\.');
		return arr[arr.length-1];
	};

	let proCompiler = webpack(merge(baseConfig,productConfig));
	let assetsPath = productConfig.output.publicPath;

	proCompiler.run((err,stats)=>{
		if(err){
			errHandler('webpack-run-product',err);
		};
		let manifest = {};
		let assets = stats.toJson().assetsByChunkName;
		for(let key in assets){
			let value = assets[key];
			if(value instanceof Array){
				for(let i in value){
					let item = value[i];
					manifest[assetsPath + key + '.' + getfileExtension(item)] = `assets/${item}`;
				}
			}else{
				manifest[assetsPath + key + '.' + getfileExtension(value)] = `assets/${value}`;
			};
		};
		fs.writeFileSync(
			path.join(__dirname,`webpack-assets.json`),
			JSON.stringify(manifest)
		);
		done();
	});
});

// gulp.task('release-assets',done=>{
// 	return  gulp.src(files.statics)
// 				.pipe(gulp.dest(routes.staticProduct));
// });

gulp.task('release-templates',done=>{
	return  gulp.src(files.htmls)
			    .pipe(revReplace({
					manifest:gulp.src(files.manifest),
					replaceInExtensions:['.js','.css','.html']
				}))
				.pipe(gulp.dest(routes.templatesProduct));
});
