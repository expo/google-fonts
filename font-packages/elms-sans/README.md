# @expo-google-fonts/elms-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/elms-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/elms-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/elms-sans)

This package lets you use the [**Elms Sans**](https://fonts.google.com/specimen/Elms+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Elms Sans

![Elms Sans](./font-family.png)

This font family contains [18 styles](#-gallery).

- `ElmsSans_100Thin`
- `ElmsSans_200ExtraLight`
- `ElmsSans_300Light`
- `ElmsSans_400Regular`
- `ElmsSans_500Medium`
- `ElmsSans_600SemiBold`
- `ElmsSans_700Bold`
- `ElmsSans_800ExtraBold`
- `ElmsSans_900Black`
- `ElmsSans_100Thin_Italic`
- `ElmsSans_200ExtraLight_Italic`
- `ElmsSans_300Light_Italic`
- `ElmsSans_400Regular_Italic`
- `ElmsSans_500Medium_Italic`
- `ElmsSans_600SemiBold_Italic`
- `ElmsSans_700Bold_Italic`
- `ElmsSans_800ExtraBold_Italic`
- `ElmsSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/elms-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/elms-sans/useFonts';
import { ElmsSans_100Thin } from '@expo-google-fonts/elms-sans/100Thin';
import { ElmsSans_200ExtraLight } from '@expo-google-fonts/elms-sans/200ExtraLight';
import { ElmsSans_300Light } from '@expo-google-fonts/elms-sans/300Light';
import { ElmsSans_400Regular } from '@expo-google-fonts/elms-sans/400Regular';
import { ElmsSans_500Medium } from '@expo-google-fonts/elms-sans/500Medium';
import { ElmsSans_600SemiBold } from '@expo-google-fonts/elms-sans/600SemiBold';
import { ElmsSans_700Bold } from '@expo-google-fonts/elms-sans/700Bold';
import { ElmsSans_800ExtraBold } from '@expo-google-fonts/elms-sans/800ExtraBold';
import { ElmsSans_900Black } from '@expo-google-fonts/elms-sans/900Black';
import { ElmsSans_100Thin_Italic } from '@expo-google-fonts/elms-sans/100Thin_Italic';
import { ElmsSans_200ExtraLight_Italic } from '@expo-google-fonts/elms-sans/200ExtraLight_Italic';
import { ElmsSans_300Light_Italic } from '@expo-google-fonts/elms-sans/300Light_Italic';
import { ElmsSans_400Regular_Italic } from '@expo-google-fonts/elms-sans/400Regular_Italic';
import { ElmsSans_500Medium_Italic } from '@expo-google-fonts/elms-sans/500Medium_Italic';
import { ElmsSans_600SemiBold_Italic } from '@expo-google-fonts/elms-sans/600SemiBold_Italic';
import { ElmsSans_700Bold_Italic } from '@expo-google-fonts/elms-sans/700Bold_Italic';
import { ElmsSans_800ExtraBold_Italic } from '@expo-google-fonts/elms-sans/800ExtraBold_Italic';
import { ElmsSans_900Black_Italic } from '@expo-google-fonts/elms-sans/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    ElmsSans_100Thin, 
    ElmsSans_200ExtraLight, 
    ElmsSans_300Light, 
    ElmsSans_400Regular, 
    ElmsSans_500Medium, 
    ElmsSans_600SemiBold, 
    ElmsSans_700Bold, 
    ElmsSans_800ExtraBold, 
    ElmsSans_900Black, 
    ElmsSans_100Thin_Italic, 
    ElmsSans_200ExtraLight_Italic, 
    ElmsSans_300Light_Italic, 
    ElmsSans_400Regular_Italic, 
    ElmsSans_500Medium_Italic, 
    ElmsSans_600SemiBold_Italic, 
    ElmsSans_700Bold_Italic, 
    ElmsSans_800ExtraBold_Italic, 
    ElmsSans_900Black_Italic
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
          fontFamily: "ElmsSans_100Thin"
        }}>
          Elms Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_200ExtraLight"
        }}>
          Elms Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_300Light"
        }}>
          Elms Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_400Regular"
        }}>
          Elms Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_500Medium"
        }}>
          Elms Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_600SemiBold"
        }}>
          Elms Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_700Bold"
        }}>
          Elms Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_800ExtraBold"
        }}>
          Elms Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_900Black"
        }}>
          Elms Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_100Thin_Italic"
        }}>
          Elms Sans Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_200ExtraLight_Italic"
        }}>
          Elms Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_300Light_Italic"
        }}>
          Elms Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_400Regular_Italic"
        }}>
          Elms Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_500Medium_Italic"
        }}>
          Elms Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_600SemiBold_Italic"
        }}>
          Elms Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_700Bold_Italic"
        }}>
          Elms Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_800ExtraBold_Italic"
        }}>
          Elms Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ElmsSans_900Black_Italic"
        }}>
          Elms Sans Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ElmsSans_100Thin](./100Thin/ElmsSans_100Thin.ttf.png)|![ElmsSans_200ExtraLight](./200ExtraLight/ElmsSans_200ExtraLight.ttf.png)|![ElmsSans_300Light](./300Light/ElmsSans_300Light.ttf.png)||
|![ElmsSans_400Regular](./400Regular/ElmsSans_400Regular.ttf.png)|![ElmsSans_500Medium](./500Medium/ElmsSans_500Medium.ttf.png)|![ElmsSans_600SemiBold](./600SemiBold/ElmsSans_600SemiBold.ttf.png)||
|![ElmsSans_700Bold](./700Bold/ElmsSans_700Bold.ttf.png)|![ElmsSans_800ExtraBold](./800ExtraBold/ElmsSans_800ExtraBold.ttf.png)|![ElmsSans_900Black](./900Black/ElmsSans_900Black.ttf.png)||
|![ElmsSans_100Thin_Italic](./100Thin_Italic/ElmsSans_100Thin_Italic.ttf.png)|![ElmsSans_200ExtraLight_Italic](./200ExtraLight_Italic/ElmsSans_200ExtraLight_Italic.ttf.png)|![ElmsSans_300Light_Italic](./300Light_Italic/ElmsSans_300Light_Italic.ttf.png)||
|![ElmsSans_400Regular_Italic](./400Regular_Italic/ElmsSans_400Regular_Italic.ttf.png)|![ElmsSans_500Medium_Italic](./500Medium_Italic/ElmsSans_500Medium_Italic.ttf.png)|![ElmsSans_600SemiBold_Italic](./600SemiBold_Italic/ElmsSans_600SemiBold_Italic.ttf.png)||
|![ElmsSans_700Bold_Italic](./700Bold_Italic/ElmsSans_700Bold_Italic.ttf.png)|![ElmsSans_800ExtraBold_Italic](./800ExtraBold_Italic/ElmsSans_800ExtraBold_Italic.ttf.png)|![ElmsSans_900Black_Italic](./900Black_Italic/ElmsSans_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/elms-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Elms Sans page on Google Fonts](https://fonts.google.com/specimen/Elms+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Elms Sans on Google Fonts](https://fonts.google.com/specimen/Elms+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/elms-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/elms-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
