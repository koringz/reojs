module.exports = function(grunt) {

  //concat合并js文件
  var defineConcat = {
      basic_and_extras : {
        files : {
            "dest/<%= pkg.pattern.test %>/<%= pkg.pattern.test %>.grunt.js" : "dist/test.grunt.js",
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
          // 'dest/all.js' : ['lib/**.js'],
        }
    }
  };
  
  // babel编译es6的代码风格转换为es5的代码风格, because of the browser supports es5 compiler.
  var defineBable = {
      options: {
          sourceMap: true,
          presets: ['babel-preset-es2015']
      },
      files: {
          expand : true,
          src: "./dist/!(index).js",
          dest: "./dest/"
      }
  };

  // webpack提供require模块和common模块的js管理调用风格
  var defineWebpack = {
      /*components: {
        entry: './components/handlereomethods/validMethod.js',  // This is js components path.
        output: {
          filename: './dest/handlereomethods/validMethod.js'  // Save to lib handle path.
        }
      },*/
      test : {
        entry : './dest/dist/test.results.js',
        output : {
          filename : './dest/dist/runtime/test.results.js'
        }
      },
      reo : {
        entry : './dest/dist/reo.js',
        output : {
          filename : './dest/dist/runtime/reo.js'
        }
      },
      hook : {
        entry: './dist/hookmodel/readerstatic.js',  // This is js components path.
        output : {
          filename : './dest/hook.js'
        }
      },
      reojs :{
        entry: './dist/templatemodel/template.js',  // This is js components path.
        output : {
          filename : './dest/template.js'
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
        files: ['lib/*.js','components/**/**.js','dist/**/**.js'],
        tasks: ['jshint','babel','webpack'],
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

  grunt.registerTask('start', ['concat','babel','uglify','jshint','wiredep','webpack','watch','connect']);
};


// http://blog.csdn.net/ch717828/article/details/50339087