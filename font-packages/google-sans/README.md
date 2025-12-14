# @expo-google-fonts/google-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/google-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/google-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/google-sans)

This package lets you use the [**Google Sans**](https://fonts.google.com/specimen/Google+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Google Sans

![Google Sans](./font-family.png)

This font family contains [8 styles](#-gallery).

- `GoogleSans_400Regular`
- `GoogleSans_500Medium`
- `GoogleSans_600SemiBold`
- `GoogleSans_700Bold`
- `GoogleSans_400Regular_Italic`
- `GoogleSans_500Medium_Italic`
- `GoogleSans_600SemiBold_Italic`
- `GoogleSans_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/google-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/google-sans/useFonts';
import { GoogleSans_400Regular } from '@expo-google-fonts/google-sans/400Regular';
import { GoogleSans_500Medium } from '@expo-google-fonts/google-sans/500Medium';
import { GoogleSans_600SemiBold } from '@expo-google-fonts/google-sans/600SemiBold';
import { GoogleSans_700Bold } from '@expo-google-fonts/google-sans/700Bold';
import { GoogleSans_400Regular_Italic } from '@expo-google-fonts/google-sans/400Regular_Italic';
import { GoogleSans_500Medium_Italic } from '@expo-google-fonts/google-sans/500Medium_Italic';
import { GoogleSans_600SemiBold_Italic } from '@expo-google-fonts/google-sans/600SemiBold_Italic';
import { GoogleSans_700Bold_Italic } from '@expo-google-fonts/google-sans/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    GoogleSans_400Regular, 
    GoogleSans_500Medium, 
    GoogleSans_600SemiBold, 
    GoogleSans_700Bold, 
    GoogleSans_400Regular_Italic, 
    GoogleSans_500Medium_Italic, 
    GoogleSans_600SemiBold_Italic, 
    GoogleSans_700Bold_Italic
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
          fontFamily: "GoogleSans_400Regular"
        }}>
          Google Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSans_500Medium"
        }}>
          Google Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSans_600SemiBold"
        }}>
          Google Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSans_700Bold"
        }}>
          Google Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSans_400Regular_Italic"
        }}>
          Google Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSans_500Medium_Italic"
        }}>
          Google Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSans_600SemiBold_Italic"
        }}>
          Google Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSans_700Bold_Italic"
        }}>
          Google Sans Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![GoogleSans_400Regular](./400Regular/GoogleSans_400Regular.ttf.png)|![GoogleSans_500Medium](./500Medium/GoogleSans_500Medium.ttf.png)|![GoogleSans_600SemiBold](./600SemiBold/GoogleSans_600SemiBold.ttf.png)||
|![GoogleSans_700Bold](./700Bold/GoogleSans_700Bold.ttf.png)|![GoogleSans_400Regular_Italic](./400Regular_Italic/GoogleSans_400Regular_Italic.ttf.png)|![GoogleSans_500Medium_Italic](./500Medium_Italic/GoogleSans_500Medium_Italic.ttf.png)||
|![GoogleSans_600SemiBold_Italic](./600SemiBold_Italic/GoogleSans_600SemiBold_Italic.ttf.png)|![GoogleSans_700Bold_Italic](./700Bold_Italic/GoogleSans_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/google-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Google Sans page on Google Fonts](https://fonts.google.com/specimen/Google+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Google Sans on Google Fonts](https://fonts.google.com/specimen/Google+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/google-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/google-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
