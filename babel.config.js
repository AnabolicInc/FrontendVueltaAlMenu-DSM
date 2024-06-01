module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],

    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env'
        },
      ],
    ]
    

  };
};