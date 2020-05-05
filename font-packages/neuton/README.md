# @expo-google-fonts/neuton

This package lets you use the [**Neuton**](https://fonts.google.com/specimen/Neuton) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.2

## Neuton

![Neuton](./font-family.png)

This font family contains [6 styles](#gallery).

- `Neuton_ExtraLight200`
- `Neuton_Light300`
- `Neuton_Regular400`
- `Neuton_Regular400_Italic`
- `Neuton_Bold700`
- `Neuton_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
yarn add @expo-google-fonts/neuton expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Neuton_ExtraLight200,
  Neuton_Light300,
  Neuton_Regular400,
  Neuton_Regular400_Italic,
  Neuton_Bold700,
  Neuton_ExtraBold800,
} from '@expo-google-fonts/neuton';

export default () => {
  let [fontsLoaded] = useFonts({
    Neuton_ExtraLight200,
    Neuton_Light300,
    Neuton_Regular400,
    Neuton_Regular400_Italic,
    Neuton_Bold700,
    Neuton_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Neuton_ExtraLight200' }}>
          Neuton_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Neuton_Light300' }}>
          Neuton_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Neuton_Regular400' }}>
          Neuton_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Neuton_Regular400_Italic' }}>
          Neuton_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Neuton_Bold700' }}>
          Neuton_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Neuton_ExtraBold800' }}>
          Neuton_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## Gallery

##### Neuton_ExtraLight200
![Neuton_ExtraLight200](./52a1f786965c5e1a5ddb72c3453133e67248c6daa74320a01e034161e4476a0f.ttf.png)

##### Neuton_Light300
![Neuton_Light300](./ff0297b52f6d34d72fb14e197dd0504d57fdb2769b98619facc41590e900c8e9.ttf.png)

##### Neuton_Regular400
![Neuton_Regular400](./2147893351f8ace96b011dcc7c1c826ba84daac170ed6538e0456e5ed8ffe947.ttf.png)

##### Neuton_Regular400_Italic
![Neuton_Regular400_Italic](./8be52f34f889303ed24d24ec94bc56c8fb7130049db10eb3983aab619a05bcb5.ttf.png)

##### Neuton_Bold700
![Neuton_Bold700](./1c83bf4d18e666ffe37bb75b7005b9ad99f4166347cbce93e1f798c45954f87e.ttf.png)

##### Neuton_ExtraBold800
![Neuton_ExtraBold800](./2ccde11ee55979183e280ea4860ec28e4fd88da81c66a8eee82963c4fe2befca.ttf.png)


## Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://www.npmjs.com/package/@expo-google-fonts/dev).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it will be 
less performant, and is not a good choice for most production deployments. But, it is extremely convenient
for playing around with any style that you want.

## Links

- [Neuton on Google Fonts](https://fonts.google.com/specimen/Neuton)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/neuton)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/neuton)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
