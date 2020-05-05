# @expo-google-fonts/oxygen

This package lets you use the [**Oxygen**](https://fonts.google.com/specimen/Oxygen) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Oxygen

![Oxygen](./font-family.png)

This font family contains [3 styles](#gallery).

- `Oxygen_Light300`
- `Oxygen_Regular400`
- `Oxygen_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/oxygen expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Oxygen_Light300, Oxygen_Regular400, Oxygen_Bold700 } from '@expo-google-fonts/oxygen';

export default () => {
  let [fontsLoaded] = useFonts({
    Oxygen_Light300,
    Oxygen_Regular400,
    Oxygen_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oxygen_Light300' }}>
          Oxygen_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oxygen_Regular400' }}>
          Oxygen_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Oxygen_Bold700' }}>
          Oxygen_Bold700
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Oxygen_Light300
![Oxygen_Light300](./a7e1244b4a11ee9f21f86e2f25d7dd963f8e8f93d7b8e411620c959f4cf66fa2.ttf.png)

##### Oxygen_Regular400
![Oxygen_Regular400](./f6497c6c0bb7a884669e84095f3e56550bd7c0ccba79656b0af00d8b3200d790.ttf.png)

##### Oxygen_Bold700
![Oxygen_Bold700](./4bccf594c248e25c3da7e37b9dc5e9cddfcf3bc405504b7d15f4523358d81f76.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Oxygen on Google Fonts](https://fonts.google.com/specimen/Oxygen)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/oxygen)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/oxygen)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
