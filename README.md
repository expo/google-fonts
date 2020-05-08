# expo-google-fonts
  
![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/dev)
![license](https://flat.badgen.net/github/license/expo/google-fonts)

The `@expo-google-fonts` packages for Expo allow you to easily use 
any of 964 fonts (and their variants) from 
[fonts.google.com](https://fonts.google.com) in your Expo app.

v0.0.3

## Usage

Here is an example of using the [Nunito font family](https://fonts.google.com/specimen/Nunito) in a very simple project.

#### Install the package for the font you want

```sh
expo install @expo-google-fonts/nunito expo-font @use-expo/font
```

#### In your app

```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Nunito_Regular400,
  Nunito_SemiBold600_Italic,
} from '@expo-google-fonts/nunito';

export default () => {
  let [fontsLoaded] = useFonts({
    Nunito_Regular400,
    Nunito_SemiBold600_Italic,
  });

  let fontSize = 24;
  let paddingVrtical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_Regular400' }}>
          Nunito_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nunito_SemiBold600_Italic' }}>
          Nunito_SemiBold600_Italic
        </Text>

      </View>
    );
  }
};

```


### Example Project

Here is a [minimal but complete example](https://github.com/expo/google-fonts/tree/master/example)

Each individual font family package README includes a complete example of using that font family.

## 🔡 Available Fonts

You can browse all available Google Fonts on [fonts.google.com](https://fonts.google.com).

Here are a few examples of the 964 font families available:


||||
|-|-|-|
|[**Manrope**![Manrope](./font-packages/manrope/1f742b6ef495bb5b9f5b968a27c50281ca1f9822bb53ec99bb3757ff2f3febfd.ttf.png)](https://github.com/expo/google-fonts/tree/master/font-packages/manrope#readme)|[**Inter**![Inter](./font-packages/inter/74b0b48ce5240039e1a17c62f24f5abc322d3d77d4bf96efcdad6d637123cc9d.ttf.png)](https://github.com/expo/google-fonts/tree/master/font-packages/inter#readme)|[**Allan**![Allan](./font-packages/allan/83a268d06857cada4246725e7cc04eb4d7b87d19e6d4f44e745d33be739852fb.ttf.png)](https://github.com/expo/google-fonts/tree/master/font-packages/allan#readme)|
|[**Roboto**![Roboto](./font-packages/roboto/030868028bda24a27a45e0be44c8ae15544762b94f80da746c8b8a1c05f8e952.ttf.png)](https://github.com/expo/google-fonts/tree/master/font-packages/roboto#readme)|[**Lusitana**![Lusitana](./font-packages/lusitana/c6df963163bf20f6d3c7e20307b4e363715e13d9047b5707caa9407e11af4ebb.ttf.png)](https://github.com/expo/google-fonts/tree/master/font-packages/lusitana#readme)|[**Open Sans**![OpenSans](./font-packages/open-sans/7b37b8abba9dcb01b9474da19527db14307fd9211e34e4d8a3d77dc9a19f2753.ttf.png)](https://github.com/expo/google-fonts/tree/master/font-packages/open-sans#readme)|
|[**Bangers**![Bangers](./font-packages/bangers/42a6646ed15dc91b9430f7e69e6259203235b48fa12c9cc10b6b72afab348de0.ttf.png)](https://github.com/expo/google-fonts/tree/master/font-packages/bangers#readme)|[**Source Sans Pro**![SourceSansPro](./font-packages/source-sans-pro/6ed615e8d0355256e2d6d907b3addb929879c90c8383dd566b2208c79ffd16f7.ttf.png)](https://github.com/expo/google-fonts/tree/master/font-packages/source-sans-pro#readme)|[**Oswald**![Oswald](./font-packages/oswald/9dc4929f8d8935621ca4717817eb3167fc881d03d496c6dca51ff292f730c873.ttf.png)](https://github.com/expo/google-fonts/tree/master/font-packages/oswald#readme)|






You can check out [the gallery for this project](./GALLERY.md) to see all of them.

## 👩‍💻 @expo-google-fonts/dev


If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.



## 📖 Licensing

The Expo Google Fonts project and its code are licensed under the MIT License.

All the fonts in the Google Fonts catalog are free and open source.

Individual fonts have their own licenses. Many are licensed using the
[Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL). 
For example, [Nunito](https://fonts.google.com/specimen/Nunito) uses the OFL. 
Check the Google Fonts pages of the font families you are using and add those licenses to
your project's licenses list when you publish.

#### Q: Can I use these fonts commercially: to make a logo, in my app, on my website, etc.?

A: You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🤝 Contributing

Contributions are very welcome! Note that everything under `font-packages` and also this README are generated.
So, please make any changes you want to make to the [generator](https://github.com/expo/google-fonts/tree/master/packages/generator#readme) instead of the packages themselves.

### Authors 

- Charlie Cheever <ccheever@expo.io>

## 🔗 Links

- [Google Fonts](https://fonts.google.com)
- [Using Custom Fonts Guide in the Expo docs](https://docs.expo.io/guides/using-custom-fonts/)
- [`google_fonts` Flutter Package](https://pub.dev/packages/google_fonts)
- [Gallery of all available styles in Expo Google Fonts](./GALLERY.md)
- [Generation of these packages and this readme](https://github.com/expo/google-fonts/tree/master/packages/generator#readme)

