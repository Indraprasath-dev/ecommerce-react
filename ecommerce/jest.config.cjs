module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
      "^.+\\.jsx?$": "babel-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.cjs',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.cjs',
    },
  };
