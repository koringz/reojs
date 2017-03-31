module.exports = function(grunt) {

  // var custom_directive = {
  //     src : 'dist/',
  //     dest : 'dest/<% pkg.pattern.test %>'
  // };

  //concat合并js文件
  var defineConcat = {
      basic_and_extras : {
        files : {
            "dest/<%= pkg.pattern.test %>/<%= pkg.pattern.test %>.js" : "dist/**.js",
        }
      }
  };

  // 压缩文件，左边为输出压缩文件，右边为需要压缩的文件
  var defineUglify = {
    
    my_target : {
        options : {
          mangle : {
            execpt : ['jquery']
          }
        },
        files : {
          'dest/all.js' : ['lib/**.js'],
        }
    }

  };

  // js规范验证
  var defineJshint = {
     options : {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
     },
     files : ['Gruntfile.js', '/src/**/*.js'],
  };

  // 监听文件变化
  var defineWatch = {
      scripts :{
        files: ['lib/*.js','src/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
          livereload: 0123
        },
      },
      html : {
        files :['src/**.html'],
        options:{
        }
      },
      jshint : {
        files : ['Gruntfile.js']
      }
  };

  // 服务器连接服务,依赖注入进html,如:jq sea angular
  var defineWiredep = {
      target: {
        src: 'src/**.html' // point to your HTML file.
      }
  };

  // 端口服务
  var defineConnect = {
      server : {
        options : {
            part : 9000,
            keepalive:true,
            open: true,
            hostname : 'localhost',
            base : '',
        }
      }
  };


  // babel编译js文件
  var defineBable = {
      options: {
          sourceMap: true,
          presets: ['babel-preset-es2015']
      },
      dist: {
          files: {
              'dest/babeles/es.common.js': 'components/es.common.js'
          }
      }
     
  };


  // webpack
  var defineWebpack = {
      components: {
        entry: './components/handlereomethods/validMethod.js',  // This is js components path.
        output: {
          filename: './lib/handlereomethods/validMethod.js'  // Save to lib handle path.
        }
      },
      runtime: {
        entry: './components/handlereomethods/validMethod.js',  // This is js components path.
        output: {
          filename: './lib/handlereomethods/validMethod.runtime.js'  // Save a time to lib handle path.
        }
      }
  };

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: defineConcat,

    babel : defineBable,

    uglify: defineUglify,

    jshint : defineJshint,

    wiredep: defineWiredep, 
       
    connect: defineConnect,

    webpack: defineWebpack,

    watch : defineWatch

  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('start', ['concat','babel','uglify','jshint','wiredep','watch','connect']);
};


// http://blog.csdn.net/ch717828/article/details/50339087