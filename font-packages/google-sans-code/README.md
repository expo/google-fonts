# @expo-google-fonts/google-sans-code

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/google-sans-code)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/google-sans-code)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/google-sans-code)

This package lets you use the [**Google Sans Code**](https://fonts.google.com/specimen/Google+Sans+Code) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Google Sans Code

![Google Sans Code](./font-family.png)

This font family contains [12 styles](#-gallery).

- `GoogleSansCode_300Light`
- `GoogleSansCode_400Regular`
- `GoogleSansCode_500Medium`
- `GoogleSansCode_600SemiBold`
- `GoogleSansCode_700Bold`
- `GoogleSansCode_800ExtraBold`
- `GoogleSansCode_300Light_Italic`
- `GoogleSansCode_400Regular_Italic`
- `GoogleSansCode_500Medium_Italic`
- `GoogleSansCode_600SemiBold_Italic`
- `GoogleSansCode_700Bold_Italic`
- `GoogleSansCode_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/google-sans-code expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/google-sans-code/useFonts';
import { GoogleSansCode_300Light } from '@expo-google-fonts/google-sans-code/300Light';
import { GoogleSansCode_400Regular } from '@expo-google-fonts/google-sans-code/400Regular';
import { GoogleSansCode_500Medium } from '@expo-google-fonts/google-sans-code/500Medium';
import { GoogleSansCode_600SemiBold } from '@expo-google-fonts/google-sans-code/600SemiBold';
import { GoogleSansCode_700Bold } from '@expo-google-fonts/google-sans-code/700Bold';
import { GoogleSansCode_800ExtraBold } from '@expo-google-fonts/google-sans-code/800ExtraBold';
import { GoogleSansCode_300Light_Italic } from '@expo-google-fonts/google-sans-code/300Light_Italic';
import { GoogleSansCode_400Regular_Italic } from '@expo-google-fonts/google-sans-code/400Regular_Italic';
import { GoogleSansCode_500Medium_Italic } from '@expo-google-fonts/google-sans-code/500Medium_Italic';
import { GoogleSansCode_600SemiBold_Italic } from '@expo-google-fonts/google-sans-code/600SemiBold_Italic';
import { GoogleSansCode_700Bold_Italic } from '@expo-google-fonts/google-sans-code/700Bold_Italic';
import { GoogleSansCode_800ExtraBold_Italic } from '@expo-google-fonts/google-sans-code/800ExtraBold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    GoogleSansCode_300Light, 
    GoogleSansCode_400Regular, 
    GoogleSansCode_500Medium, 
    GoogleSansCode_600SemiBold, 
    GoogleSansCode_700Bold, 
    GoogleSansCode_800ExtraBold, 
    GoogleSansCode_300Light_Italic, 
    GoogleSansCode_400Regular_Italic, 
    GoogleSansCode_500Medium_Italic, 
    GoogleSansCode_600SemiBold_Italic, 
    GoogleSansCode_700Bold_Italic, 
    GoogleSansCode_800ExtraBold_Italic
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
          fontFamily: "GoogleSansCode_300Light"
        }}>
          Google Sans Code Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansCode_400Regular"
        }}>
          Google Sans Code Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansCode_500Medium"
        }}>
          Google Sans Code Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansCode_600SemiBold"
        }}>
          Google Sans Code Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansCode_700Bold"
        }}>
          Google Sans Code Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansCode_800ExtraBold"
        }}>
          Google Sans Code Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansCode_300Light_Italic"
        }}>
          Google Sans Code Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansCode_400Regular_Italic"
        }}>
          Google Sans Code Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansCode_500Medium_Italic"
        }}>
          Google Sans Code Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansCode_600SemiBold_Italic"
        }}>
          Google Sans Code Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansCode_700Bold_Italic"
        }}>
          Google Sans Code Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GoogleSansCode_800ExtraBold_Italic"
        }}>
          Google Sans Code Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![GoogleSansCode_300Light](./300Light/GoogleSansCode_300Light.ttf.png)|![GoogleSansCode_400Regular](./400Regular/GoogleSansCode_400Regular.ttf.png)|![GoogleSansCode_500Medium](./500Medium/GoogleSansCode_500Medium.ttf.png)||
|![GoogleSansCode_600SemiBold](./600SemiBold/GoogleSansCode_600SemiBold.ttf.png)|![GoogleSansCode_700Bold](./700Bold/GoogleSansCode_700Bold.ttf.png)|![GoogleSansCode_800ExtraBold](./800ExtraBold/GoogleSansCode_800ExtraBold.ttf.png)||
|![GoogleSansCode_300Light_Italic](./300Light_Italic/GoogleSansCode_300Light_Italic.ttf.png)|![GoogleSansCode_400Regular_Italic](./400Regular_Italic/GoogleSansCode_400Regular_Italic.ttf.png)|![GoogleSansCode_500Medium_Italic](./500Medium_Italic/GoogleSansCode_500Medium_Italic.ttf.png)||
|![GoogleSansCode_600SemiBold_Italic](./600SemiBold_Italic/GoogleSansCode_600SemiBold_Italic.ttf.png)|![GoogleSansCode_700Bold_Italic](./700Bold_Italic/GoogleSansCode_700Bold_Italic.ttf.png)|![GoogleSansCode_800ExtraBold_Italic](./800ExtraBold_Italic/GoogleSansCode_800ExtraBold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/google-sans-code` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Google Sans Code page on Google Fonts](https://fonts.google.com/specimen/Google+Sans+Code) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Google Sans Code on Google Fonts](https://fonts.google.com/specimen/Google+Sans+Code)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/google-sans-code)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/google-sans-code)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
