# @expo-google-fonts/edu-nsw-act-cursive

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/edu-nsw-act-cursive)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/edu-nsw-act-cursive)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/edu-nsw-act-cursive)

This package lets you use the [**Edu NSW ACT Cursive**](https://fonts.google.com/specimen/Edu+NSW+ACT+Cursive) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Edu NSW ACT Cursive

![Edu NSW ACT Cursive](./font-family.png)

This font family contains [4 styles](#-gallery).

- `EduNSWACTCursive_400Regular`
- `EduNSWACTCursive_500Medium`
- `EduNSWACTCursive_600SemiBold`
- `EduNSWACTCursive_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/edu-nsw-act-cursive expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/edu-nsw-act-cursive/useFonts';
import { EduNSWACTCursive_400Regular } from '@expo-google-fonts/edu-nsw-act-cursive/400Regular';
import { EduNSWACTCursive_500Medium } from '@expo-google-fonts/edu-nsw-act-cursive/500Medium';
import { EduNSWACTCursive_600SemiBold } from '@expo-google-fonts/edu-nsw-act-cursive/600SemiBold';
import { EduNSWACTCursive_700Bold } from '@expo-google-fonts/edu-nsw-act-cursive/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    EduNSWACTCursive_400Regular, 
    EduNSWACTCursive_500Medium, 
    EduNSWACTCursive_600SemiBold, 
    EduNSWACTCursive_700Bold
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
          fontFamily: "EduNSWACTCursive_400Regular"
        }}>
          Edu NSW ACT Cursive Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EduNSWACTCursive_500Medium"
        }}>
          Edu NSW ACT Cursive Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EduNSWACTCursive_600SemiBold"
        }}>
          Edu NSW ACT Cursive Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EduNSWACTCursive_700Bold"
        }}>
          Edu NSW ACT Cursive Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![EduNSWACTCursive_400Regular](./400Regular/EduNSWACTCursive_400Regular.ttf.png)|![EduNSWACTCursive_500Medium](./500Medium/EduNSWACTCursive_500Medium.ttf.png)|![EduNSWACTCursive_600SemiBold](./600SemiBold/EduNSWACTCursive_600SemiBold.ttf.png)||
|![EduNSWACTCursive_700Bold](./700Bold/EduNSWACTCursive_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/edu-nsw-act-cursive` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Edu NSW ACT Cursive page on Google Fonts](https://fonts.google.com/specimen/Edu+NSW+ACT+Cursive) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Edu NSW ACT Cursive on Google Fonts](https://fonts.google.com/specimen/Edu+NSW+ACT+Cursive)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/edu-nsw-act-cursive)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/edu-nsw-act-cursive)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
