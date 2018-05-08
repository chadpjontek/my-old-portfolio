module.exports = function (grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: "gm",
          sizes: [
            { name: "400", quality: 60, width: 400 },
            { name: "620", quality: 60, width: 620 },
            { name: "800", quality: 60, width: 800 },
          ]
        },
        files: [
          {
            expand: true,
            src: ["**/*.{jpg,png}"],
            cwd: "src/images/",
            dest: "images/"
          }
        ]
      }
    },
    responsive_images_extender: {
      target: {
        options: {
          srcAttribute: 'smallest',
          sizes: [{
            selector: 'img',
            sizeList: [{
              cond: 'max-width: 768px',
              size: '85vw'
            },{
              cond: 'default',
              size: '37vw'
            }]
          }]
        },
        files: [{
          expand: true,
          src: ['index.html'],
          cwd: '',
          dest: ''
        }]
      }
    }
  });
  grunt.loadNpmTasks("grunt-responsive-images");
  grunt.loadNpmTasks('grunt-responsive-images-extender');
  grunt.registerTask("default", ["responsive_images_extender", "responsive_images"]);
};