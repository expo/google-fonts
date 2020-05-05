# @expo-google-fonts/philosopher

This package lets you use the [**Philosopher**](https://fonts.google.com/specimen/Philosopher) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Philosopher

![Philosopher](./font-family.png)

This font family contains [4 styles](#gallery).

- `Philosopher_Regular400`
- `Philosopher_Regular400_Italic`
- `Philosopher_Bold700`
- `Philosopher_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/philosopher expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Philosopher_Regular400,
  Philosopher_Regular400_Italic,
  Philosopher_Bold700,
  Philosopher_Bold700_Italic,
} from '@expo-google-fonts/philosopher';

export default () => {
  let [fontsLoaded] = useFonts({
    Philosopher_Regular400,
    Philosopher_Regular400_Italic,
    Philosopher_Bold700,
    Philosopher_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Philosopher_Regular400' }}>
          Philosopher_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Philosopher_Regular400_Italic' }}>
          Philosopher_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Philosopher_Bold700' }}>
          Philosopher_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Philosopher_Bold700_Italic' }}>
          Philosopher_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Philosopher_Regular400
![Philosopher_Regular400](./51b0e57bc81490c490b7400858499b5823a13926de953476e8d40730ab9fc02f.ttf.png)

##### Philosopher_Regular400_Italic
![Philosopher_Regular400_Italic](./32aafaf60ca199b7f91291e6aa9e68b91df4b48f53246f454e7eddf8e25ff50c.ttf.png)

##### Philosopher_Bold700
![Philosopher_Bold700](./174ba5b59df6e5bdec8e23657ecdf679226b3b6f23f5625fa814540e88b30628.ttf.png)

##### Philosopher_Bold700_Italic
![Philosopher_Bold700_Italic](./aed7000bdaef8a04be340ee51e9ff7157c538442a3fda8daeee40a849eaf33cb.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Philosopher on Google Fonts](https://fonts.google.com/specimen/Philosopher)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/philosopher)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/philosopher)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
