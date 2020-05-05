# @expo-google-fonts/farro

This package lets you use the [**Farro**](https://fonts.google.com/specimen/Farro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Farro

![Farro](./font-family.png)

This font family contains [4 styles](#gallery).

- `Farro_Light300`
- `Farro_Regular400`
- `Farro_Medium500`
- `Farro_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/farro expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Farro_Light300,
  Farro_Regular400,
  Farro_Medium500,
  Farro_Bold700,
} from '@expo-google-fonts/farro';

export default () => {
  let [fontsLoaded] = useFonts({
    Farro_Light300,
    Farro_Regular400,
    Farro_Medium500,
    Farro_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Farro_Light300' }}>
          Farro_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Farro_Regular400' }}>
          Farro_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Farro_Medium500' }}>
          Farro_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Farro_Bold700' }}>
          Farro_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Farro_Light300
![Farro_Light300](./ca8a2c854888fbeb59e572d229d903a5793ba08741fb5effc6484dad0baca84b.ttf.png)

##### Farro_Regular400
![Farro_Regular400](./04c2276c71a6e273507190f49761498509d6b0b4dda77befd400b8b093ca1ad8.ttf.png)

##### Farro_Medium500
![Farro_Medium500](./43a287bb29da4b09c5492c818eeb5cab21180fcead8c66a9340ba185728d5ab5.ttf.png)

##### Farro_Bold700
![Farro_Bold700](./f000197888095e4fccd58e6e7af75f410a611fe4292e359d52d9110505fb0373.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Farro on Google Fonts](https://fonts.google.com/specimen/Farro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/farro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/farro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
