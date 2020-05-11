# @expo-google-fonts/be-vietnam

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/be-vietnam)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/be-vietnam)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/be-vietnam)

This package lets you use the [**Be Vietnam**](https://fonts.google.com/specimen/Be+Vietnam) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Be Vietnam

![Be Vietnam](./font-family.png)

This font family contains [14 styles](#-gallery).

- `BeVietnam_Thin100`
- `BeVietnam_Thin100_Italic`
- `BeVietnam_Light300`
- `BeVietnam_Light300_Italic`
- `BeVietnam_Regular400`
- `BeVietnam_Regular400_Italic`
- `BeVietnam_Medium500`
- `BeVietnam_Medium500_Italic`
- `BeVietnam_SemiBold600`
- `BeVietnam_SemiBold600_Italic`
- `BeVietnam_Bold700`
- `BeVietnam_Bold700_Italic`
- `BeVietnam_ExtraBold800`
- `BeVietnam_ExtraBold800_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/be-vietnam expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  BeVietnam_Thin100,
  BeVietnam_Thin100_Italic,
  BeVietnam_Light300,
  BeVietnam_Light300_Italic,
  BeVietnam_Regular400,
  BeVietnam_Regular400_Italic,
  BeVietnam_Medium500,
  BeVietnam_Medium500_Italic,
  BeVietnam_SemiBold600,
  BeVietnam_SemiBold600_Italic,
  BeVietnam_Bold700,
  BeVietnam_Bold700_Italic,
  BeVietnam_ExtraBold800,
  BeVietnam_ExtraBold800_Italic,
  useFonts,
} from '@expo-google-fonts/be-vietnam';

export default () => {
  let [fontsLoaded] = useFonts({
    BeVietnam_Thin100,
    BeVietnam_Thin100_Italic,
    BeVietnam_Light300,
    BeVietnam_Light300_Italic,
    BeVietnam_Regular400,
    BeVietnam_Regular400_Italic,
    BeVietnam_Medium500,
    BeVietnam_Medium500_Italic,
    BeVietnam_SemiBold600,
    BeVietnam_SemiBold600_Italic,
    BeVietnam_Bold700,
    BeVietnam_Bold700_Italic,
    BeVietnam_ExtraBold800,
    BeVietnam_ExtraBold800_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_Thin100' }}>
          BeVietnam_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_Thin100_Italic' }}>
          BeVietnam_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_Light300' }}>
          BeVietnam_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_Light300_Italic' }}>
          BeVietnam_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_Regular400' }}>
          BeVietnam_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_Regular400_Italic' }}>
          BeVietnam_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_Medium500' }}>
          BeVietnam_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_Medium500_Italic' }}>
          BeVietnam_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_SemiBold600' }}>
          BeVietnam_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_SemiBold600_Italic' }}>
          BeVietnam_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_Bold700' }}>
          BeVietnam_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_Bold700_Italic' }}>
          BeVietnam_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_ExtraBold800' }}>
          BeVietnam_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_ExtraBold800_Italic' }}>
          BeVietnam_ExtraBold800_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### BeVietnam_Thin100
![BeVietnam_Thin100](./0cc0f5cd392e42154ccdcf1ffc6987159ee0807caf89c6ac0796a273c9c80cd4.ttf.png)

##### BeVietnam_Thin100_Italic
![BeVietnam_Thin100_Italic](./11b1d7f41abb8a24b4ba203416df07809dbaf7de51619a1d167ab9af0361b6b7.ttf.png)

##### BeVietnam_Light300
![BeVietnam_Light300](./03d32b9f1d2ddaa56a41075b22ab477cbc078409bda7fe7f7e030491bf70988a.ttf.png)

##### BeVietnam_Light300_Italic
![BeVietnam_Light300_Italic](./a46d7c089e1fe8c124bc2de7b2cdf8a7f23fc0e9724766f3029c5c528b88b2cf.ttf.png)

##### BeVietnam_Regular400
![BeVietnam_Regular400](./79220c67d8f8488a5dc457833419e884bef66e01eae43ec9c9b7e2944c5d88f0.ttf.png)

##### BeVietnam_Regular400_Italic
![BeVietnam_Regular400_Italic](./e2928c1924824c824cac4ddaa74885a1fb9f3723429fa145c579cde5e79eeba5.ttf.png)

##### BeVietnam_Medium500
![BeVietnam_Medium500](./8d504a978c86a628884d737bacc817b24a74963f8e36e6cab5e9b81b9977b1f4.ttf.png)

##### BeVietnam_Medium500_Italic
![BeVietnam_Medium500_Italic](./a2af11a383bfb3ee1ef8731946b78f349dce66a9151e6724f9428a29af43faac.ttf.png)

##### BeVietnam_SemiBold600
![BeVietnam_SemiBold600](./94efd29230ff40c08cd89d8ae44d0e847ad17d53088280868a4bfbe29bc9afe0.ttf.png)

##### BeVietnam_SemiBold600_Italic
![BeVietnam_SemiBold600_Italic](./2e18bd0f37b3e15856f513a8bd6b5d019948460f502359bf06716759b5b07664.ttf.png)

##### BeVietnam_Bold700
![BeVietnam_Bold700](./6f6fdb78c7c80b7871c787918369b6f9908cb55d29a6f68602b90d557a0ef839.ttf.png)

##### BeVietnam_Bold700_Italic
![BeVietnam_Bold700_Italic](./c54104de856f3762629b69585ceb0eed536f7f7a19d2a2e1cdb44c1b1398e6b8.ttf.png)

##### BeVietnam_ExtraBold800
![BeVietnam_ExtraBold800](./920f1f8cbfb2d9b94b66296e1f4ddf430a02ce638be482c79c598832645fda13.ttf.png)

##### BeVietnam_ExtraBold800_Italic
![BeVietnam_ExtraBold800_Italic](./2140e6025b6df417db0a543e64c090a9a5aa119d7523fd43a5f806a1550bdb37.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/be-vietnam` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Be Vietnam page on Google Fonts](https://fonts.google.com/specimen/Be+Vietnam) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Be Vietnam on Google Fonts](https://fonts.google.com/specimen/Be+Vietnam)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/be-vietnam)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/be-vietnam)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
