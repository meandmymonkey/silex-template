var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    ngmin = require('gulp-ngmin'),
    browserify = require('gulp-browserify'),
    jshint = require('gulp-jshint'),
    util = require('gulp-util');

var shimConfig = {
    angular: {
        path: './vendor/js/angular/angular.js',
        exports: 'angular'
    },
    'angular-animate': {
        path: './vendor/js/angular-animate/angular-animate.js',
        exports: 'ngAnimate',
        depends: {
            angular: 'angular',
            jQuery: 'jQuery'
        }
    },
    'angular-resource': {
        path: './vendor/js/angular-resource/angular-resource.js',
        exports: 'ngResource',
        depends: {
            angular: 'angular'
        }
    },
    'angular-route': {
        path: './vendor/js/angular-route/angular-route.js',
        exports: 'ngRoute',
        depends: {
            angular: 'angular'
        }
    },
    'bootstrap': {
        path: './vendor/js/bootstrap/dist/js/bootstrap.js',
        exports: 'bootstrap',
        depends: {
            jQuery: 'jQuery'
        }
    },
    'jQuery': {
        path: './vendor/js/jquery/dist/jquery.js',
        exports: '$'
    }
};

var libConfig = [
    'angular',
    'angular-animate',
    'angular-resource',
    'angular-route',
    'bootstrap',
    'jQuery'
];


gulp.task('less', function ()
{
    gulp.src('./web/css', {read: false})
        .pipe(clean());

    return gulp.src([
            './resources/less/main.less'
        ])
        .pipe(
            less({ compress: true })
            .on('error', util.log)
            .on('error', util.beep)
        )
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./web/css'));
});


gulp.task('lint', function ()
{
    gulp.src(['./resources/js/*.js'])
        .pipe(
            jshint({
                globalstrict: true,
                globals: {
                    require: false,
                    document: false,
                    module: false
                }
            })
        )
        .pipe(jshint.reporter('default'));
});


gulp.task('js-dev-lib', function ()
{
    gulp.src('./web/js/lib.js', {read: false})
        .pipe(clean());

    gulp.src(['./resources/js/lib.js'])
        .pipe(
            browserify({shim: shimConfig})
            .on('error', util.log)
            .on('error', util.beep)
        )
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./web/js'));
});


gulp.task('js-dev-app', ['lint'], function ()
{
    gulp.src('./web/js/main.js', {read: false})
        .pipe(clean());

    gulp.src(['./resources/js/main.js'])
        .pipe(
            browserify({external: libConfig})
            .on('error', util.log)
            .on('error', util.beep)
        )
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./web/js'));
});


gulp.task('js-prod', function ()
{
    gulp.src('./web/js/app.min.js', {read: false})
        .pipe(clean());

    gulp.src(['./resources/js/main.js'])
        .pipe(
            browserify({shim: shimConfig})
            .on('error', util.log)
            .on('error', util.beep)
        )
        .pipe(concat('app.min.js'))
        .pipe(ngmin())
        .pipe(uglify())
        .pipe(gulp.dest('./web/js'));
});


gulp.task('prod', ['less', 'js-prod']);


gulp.task('dev', ['less', 'js-dev-lib', 'js-dev-app']);


gulp.task('default', ['dev'], function ()
{
    gulp.watch('resources/less/*.less', ['less']);
    gulp.watch('resources/js/*.js', ['js-dev-app']);
});



