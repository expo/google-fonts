# @expo-google-fonts/sen

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sen)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sen)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sen)

This package lets you use the [**Sen**](https://fonts.google.com/specimen/Sen) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Sen

![Sen](./font-family.png)

This font family contains [3 styles](#gallery).

- `Sen_Regular400`
- `Sen_Bold700`
- `Sen_ExtraBold800`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sen expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Sen_Regular400, Sen_Bold700, Sen_ExtraBold800 } from '@expo-google-fonts/sen';

export default () => {
  let [fontsLoaded] = useFonts({
    Sen_Regular400,
    Sen_Bold700,
    Sen_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sen_Regular400' }}>
          Sen_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sen_Bold700' }}>Sen_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sen_ExtraBold800' }}>
          Sen_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Sen_Regular400
![Sen_Regular400](./74c43e6590cf290828c5cfbeac6dfeecfe47f48d77d71385189eedc28c93bd7d.ttf.png)

##### Sen_Bold700
![Sen_Bold700](./384267b011f455064f728397ef7bf6303e94e62dd85613372ca7dcc2add6eb0a.ttf.png)

##### Sen_ExtraBold800
![Sen_ExtraBold800](./709f63ed575896ba15fe606abd291ee16ebdba1d773b8df284f0c0ec5e6985e5.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/sen` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sen page on Google Fonts](https://fonts.google.com/specimen/Sen) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sen on Google Fonts](https://fonts.google.com/specimen/Sen)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sen)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sen)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
