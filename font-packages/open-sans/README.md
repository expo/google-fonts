# @expo-google-fonts/open-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/open-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/open-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/open-sans)

This package lets you use the [**Open Sans**](https://fonts.google.com/specimen/Open+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Open Sans

![Open Sans](./font-family.png)

This font family contains [10 styles](#-gallery).

- `OpenSans_Light300`
- `OpenSans_Light300_Italic`
- `OpenSans_Regular400`
- `OpenSans_Regular400_Italic`
- `OpenSans_SemiBold600`
- `OpenSans_SemiBold600_Italic`
- `OpenSans_Bold700`
- `OpenSans_Bold700_Italic`
- `OpenSans_ExtraBold800`
- `OpenSans_ExtraBold800_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/open-sans expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  OpenSans_Light300,
  OpenSans_Light300_Italic,
  OpenSans_Regular400,
  OpenSans_Regular400_Italic,
  OpenSans_SemiBold600,
  OpenSans_SemiBold600_Italic,
  OpenSans_Bold700,
  OpenSans_Bold700_Italic,
  OpenSans_ExtraBold800,
  OpenSans_ExtraBold800_Italic,
  useFonts,
} from '@expo-google-fonts/open-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    OpenSans_Light300,
    OpenSans_Light300_Italic,
    OpenSans_Regular400,
    OpenSans_Regular400_Italic,
    OpenSans_SemiBold600,
    OpenSans_SemiBold600_Italic,
    OpenSans_Bold700,
    OpenSans_Bold700_Italic,
    OpenSans_ExtraBold800,
    OpenSans_ExtraBold800_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'OpenSans_Light300' }}>
          OpenSans_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OpenSans_Light300_Italic' }}>
          OpenSans_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OpenSans_Regular400' }}>
          OpenSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OpenSans_Regular400_Italic' }}>
          OpenSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OpenSans_SemiBold600' }}>
          OpenSans_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OpenSans_SemiBold600_Italic' }}>
          OpenSans_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OpenSans_Bold700' }}>
          OpenSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OpenSans_Bold700_Italic' }}>
          OpenSans_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OpenSans_ExtraBold800' }}>
          OpenSans_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OpenSans_ExtraBold800_Italic' }}>
          OpenSans_ExtraBold800_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### OpenSans_Light300
![OpenSans_Light300](./eacd6dddc04472f7143fcfe208f2e1bcd372f6baa8574529deaa2d5961e4d990.ttf.png)

##### OpenSans_Light300_Italic
![OpenSans_Light300_Italic](./49c8ebe40f102f7ad2dd433e64a028047fc85d52d305404b99d691e7c6de6c84.ttf.png)

##### OpenSans_Regular400
![OpenSans_Regular400](./7b37b8abba9dcb01b9474da19527db14307fd9211e34e4d8a3d77dc9a19f2753.ttf.png)

##### OpenSans_Regular400_Italic
![OpenSans_Regular400_Italic](./4d84c30311be3a86ed8993c8180488f191020fae18ee4ccbd0208384a37e5fcc.ttf.png)

##### OpenSans_SemiBold600
![OpenSans_SemiBold600](./bfdb79179948b408b6573789e358547c8b4b589b73a7eaf8781b17c452785032.ttf.png)

##### OpenSans_SemiBold600_Italic
![OpenSans_SemiBold600_Italic](./ee3556d7dd065b889a31834e7e604d8501cc86bf4d360e5e2d0291abb30c8a86.ttf.png)

##### OpenSans_Bold700
![OpenSans_Bold700](./39b0f5fd8bd8495e7ba04ea5bd88e0fa7ed612a5c54b6f83bc77a7715c517d88.ttf.png)

##### OpenSans_Bold700_Italic
![OpenSans_Bold700_Italic](./6ec2660f3bd03b0f3f097fbc1c23f351f7582dc5c8859eaf84be1fd2a074089a.ttf.png)

##### OpenSans_ExtraBold800
![OpenSans_ExtraBold800](./6b5975e42b3d385f32384d58429336513a51ab0845da7723ee788a0046c844a9.ttf.png)

##### OpenSans_ExtraBold800_Italic
![OpenSans_ExtraBold800_Italic](./22818920197a7a95e75e2f91378fcc7e5f802f6067e933050b85732b71e3755e.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/open-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Open Sans page on Google Fonts](https://fonts.google.com/specimen/Open+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Open Sans on Google Fonts](https://fonts.google.com/specimen/Open+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/open-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/open-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
