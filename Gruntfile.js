module.exports = function(grunt) {

  //package.json文件  
  var definePKg = grunt.file.readJSON('package.json'); 

  //concat合并js文件  
  var defineConcat = {
      options : {
        separetor :';'
      },
      dist : {
        src : ['app/src/**.js'],
        dest : 'app/build/<%= pkg.name %>.js'
      },
  };

  // 压缩文件，左边为输出压缩文件，右边为需要压缩的文件
  var defineUglify = {
    
    my_target : {
        options : {
          mangle : {
            execpt : ['']
          }
        },
        files : {
          'dest/**.js' : ['dist/**.js'],
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
        files: ['lib/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
          livereload: 0123
        },
      },
      css : {
        files : ['assets/**.css'],
        tasks : ['css'],
        options:{
          livereload : 1234
        }
      },
      html : {
        files :['src/**.html'],
        options:{
          livereload : 2345
        }
      },
      jshint : {
        files : ['assets/**.js']
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

    pkg: definePKg,

    concat: defineConcat,

    uglify: defineUglify,

    jshint : defineJshint,

    wiredep: defineWiredep, 
       
    connect: defineConnect,

    watch : defineWatch

  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('start', ['concat','uglify','jshint','wiredep','watch','connect']);
  grunt.registerTask('default', ['start']);
};


// http://blog.csdn.net/ch717828/article/details/50339087