# @expo-google-fonts/cascadia-code

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cascadia-code)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cascadia-code)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cascadia-code)

This package lets you use the [**Cascadia Code**](https://fonts.google.com/specimen/Cascadia+Code) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Cascadia Code

![Cascadia Code](./font-family.png)

This font family contains [12 styles](#-gallery).

- `CascadiaCode_200ExtraLight`
- `CascadiaCode_300Light`
- `CascadiaCode_400Regular`
- `CascadiaCode_500Medium`
- `CascadiaCode_600SemiBold`
- `CascadiaCode_700Bold`
- `CascadiaCode_200ExtraLight_Italic`
- `CascadiaCode_300Light_Italic`
- `CascadiaCode_400Regular_Italic`
- `CascadiaCode_500Medium_Italic`
- `CascadiaCode_600SemiBold_Italic`
- `CascadiaCode_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/cascadia-code expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/cascadia-code/useFonts';
import { CascadiaCode_200ExtraLight } from '@expo-google-fonts/cascadia-code/200ExtraLight';
import { CascadiaCode_300Light } from '@expo-google-fonts/cascadia-code/300Light';
import { CascadiaCode_400Regular } from '@expo-google-fonts/cascadia-code/400Regular';
import { CascadiaCode_500Medium } from '@expo-google-fonts/cascadia-code/500Medium';
import { CascadiaCode_600SemiBold } from '@expo-google-fonts/cascadia-code/600SemiBold';
import { CascadiaCode_700Bold } from '@expo-google-fonts/cascadia-code/700Bold';
import { CascadiaCode_200ExtraLight_Italic } from '@expo-google-fonts/cascadia-code/200ExtraLight_Italic';
import { CascadiaCode_300Light_Italic } from '@expo-google-fonts/cascadia-code/300Light_Italic';
import { CascadiaCode_400Regular_Italic } from '@expo-google-fonts/cascadia-code/400Regular_Italic';
import { CascadiaCode_500Medium_Italic } from '@expo-google-fonts/cascadia-code/500Medium_Italic';
import { CascadiaCode_600SemiBold_Italic } from '@expo-google-fonts/cascadia-code/600SemiBold_Italic';
import { CascadiaCode_700Bold_Italic } from '@expo-google-fonts/cascadia-code/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    CascadiaCode_200ExtraLight, 
    CascadiaCode_300Light, 
    CascadiaCode_400Regular, 
    CascadiaCode_500Medium, 
    CascadiaCode_600SemiBold, 
    CascadiaCode_700Bold, 
    CascadiaCode_200ExtraLight_Italic, 
    CascadiaCode_300Light_Italic, 
    CascadiaCode_400Regular_Italic, 
    CascadiaCode_500Medium_Italic, 
    CascadiaCode_600SemiBold_Italic, 
    CascadiaCode_700Bold_Italic
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
          fontFamily: "CascadiaCode_200ExtraLight"
        }}>
          Cascadia Code Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaCode_300Light"
        }}>
          Cascadia Code Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaCode_400Regular"
        }}>
          Cascadia Code Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaCode_500Medium"
        }}>
          Cascadia Code Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaCode_600SemiBold"
        }}>
          Cascadia Code Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaCode_700Bold"
        }}>
          Cascadia Code Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaCode_200ExtraLight_Italic"
        }}>
          Cascadia Code Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaCode_300Light_Italic"
        }}>
          Cascadia Code Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaCode_400Regular_Italic"
        }}>
          Cascadia Code Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaCode_500Medium_Italic"
        }}>
          Cascadia Code Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaCode_600SemiBold_Italic"
        }}>
          Cascadia Code Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaCode_700Bold_Italic"
        }}>
          Cascadia Code Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![CascadiaCode_200ExtraLight](./200ExtraLight/CascadiaCode_200ExtraLight.ttf.png)|![CascadiaCode_300Light](./300Light/CascadiaCode_300Light.ttf.png)|![CascadiaCode_400Regular](./400Regular/CascadiaCode_400Regular.ttf.png)||
|![CascadiaCode_500Medium](./500Medium/CascadiaCode_500Medium.ttf.png)|![CascadiaCode_600SemiBold](./600SemiBold/CascadiaCode_600SemiBold.ttf.png)|![CascadiaCode_700Bold](./700Bold/CascadiaCode_700Bold.ttf.png)||
|![CascadiaCode_200ExtraLight_Italic](./200ExtraLight_Italic/CascadiaCode_200ExtraLight_Italic.ttf.png)|![CascadiaCode_300Light_Italic](./300Light_Italic/CascadiaCode_300Light_Italic.ttf.png)|![CascadiaCode_400Regular_Italic](./400Regular_Italic/CascadiaCode_400Regular_Italic.ttf.png)||
|![CascadiaCode_500Medium_Italic](./500Medium_Italic/CascadiaCode_500Medium_Italic.ttf.png)|![CascadiaCode_600SemiBold_Italic](./600SemiBold_Italic/CascadiaCode_600SemiBold_Italic.ttf.png)|![CascadiaCode_700Bold_Italic](./700Bold_Italic/CascadiaCode_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/cascadia-code` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cascadia Code page on Google Fonts](https://fonts.google.com/specimen/Cascadia+Code) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cascadia Code on Google Fonts](https://fonts.google.com/specimen/Cascadia+Code)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cascadia-code)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cascadia-code)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
