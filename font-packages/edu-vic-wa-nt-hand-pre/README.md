# @expo-google-fonts/edu-vic-wa-nt-hand-pre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/edu-vic-wa-nt-hand-pre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/edu-vic-wa-nt-hand-pre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/edu-vic-wa-nt-hand-pre)

This package lets you use the [**Edu VIC WA NT Hand Pre**](https://fonts.google.com/specimen/Edu+VIC+WA+NT+Hand+Pre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Edu VIC WA NT Hand Pre

![Edu VIC WA NT Hand Pre](./font-family.png)

This font family contains [4 styles](#-gallery).

- `EduVICWANTHandPre_400Regular`
- `EduVICWANTHandPre_500Medium`
- `EduVICWANTHandPre_600SemiBold`
- `EduVICWANTHandPre_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/edu-vic-wa-nt-hand-pre expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/edu-vic-wa-nt-hand-pre/useFonts';
import { EduVICWANTHandPre_400Regular } from '@expo-google-fonts/edu-vic-wa-nt-hand-pre/400Regular';
import { EduVICWANTHandPre_500Medium } from '@expo-google-fonts/edu-vic-wa-nt-hand-pre/500Medium';
import { EduVICWANTHandPre_600SemiBold } from '@expo-google-fonts/edu-vic-wa-nt-hand-pre/600SemiBold';
import { EduVICWANTHandPre_700Bold } from '@expo-google-fonts/edu-vic-wa-nt-hand-pre/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    EduVICWANTHandPre_400Regular, 
    EduVICWANTHandPre_500Medium, 
    EduVICWANTHandPre_600SemiBold, 
    EduVICWANTHandPre_700Bold
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EduVICWANTHandPre_400Regular"
        }}>
          Edu VIC WA NT Hand Pre Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EduVICWANTHandPre_500Medium"
        }}>
          Edu VIC WA NT Hand Pre Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EduVICWANTHandPre_600SemiBold"
        }}>
          Edu VIC WA NT Hand Pre Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EduVICWANTHandPre_700Bold"
        }}>
          Edu VIC WA NT Hand Pre Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![EduVICWANTHandPre_400Regular](./400Regular/EduVICWANTHandPre_400Regular.ttf.png)|![EduVICWANTHandPre_500Medium](./500Medium/EduVICWANTHandPre_500Medium.ttf.png)|![EduVICWANTHandPre_600SemiBold](./600SemiBold/EduVICWANTHandPre_600SemiBold.ttf.png)||
|![EduVICWANTHandPre_700Bold](./700Bold/EduVICWANTHandPre_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/edu-vic-wa-nt-hand-pre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Edu VIC WA NT Hand Pre page on Google Fonts](https://fonts.google.com/specimen/Edu+VIC+WA+NT+Hand+Pre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Edu VIC WA NT Hand Pre on Google Fonts](https://fonts.google.com/specimen/Edu+VIC+WA+NT+Hand+Pre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/edu-vic-wa-nt-hand-pre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/edu-vic-wa-nt-hand-pre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
