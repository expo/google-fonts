# @expo-google-fonts/cascadia-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cascadia-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cascadia-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cascadia-mono)

This package lets you use the [**Cascadia Mono**](https://fonts.google.com/specimen/Cascadia+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Cascadia Mono

![Cascadia Mono](./font-family.png)

This font family contains [12 styles](#-gallery).

- `CascadiaMono_200ExtraLight`
- `CascadiaMono_300Light`
- `CascadiaMono_400Regular`
- `CascadiaMono_500Medium`
- `CascadiaMono_600SemiBold`
- `CascadiaMono_700Bold`
- `CascadiaMono_200ExtraLight_Italic`
- `CascadiaMono_300Light_Italic`
- `CascadiaMono_400Regular_Italic`
- `CascadiaMono_500Medium_Italic`
- `CascadiaMono_600SemiBold_Italic`
- `CascadiaMono_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/cascadia-mono expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/cascadia-mono/useFonts';
import { CascadiaMono_200ExtraLight } from '@expo-google-fonts/cascadia-mono/200ExtraLight';
import { CascadiaMono_300Light } from '@expo-google-fonts/cascadia-mono/300Light';
import { CascadiaMono_400Regular } from '@expo-google-fonts/cascadia-mono/400Regular';
import { CascadiaMono_500Medium } from '@expo-google-fonts/cascadia-mono/500Medium';
import { CascadiaMono_600SemiBold } from '@expo-google-fonts/cascadia-mono/600SemiBold';
import { CascadiaMono_700Bold } from '@expo-google-fonts/cascadia-mono/700Bold';
import { CascadiaMono_200ExtraLight_Italic } from '@expo-google-fonts/cascadia-mono/200ExtraLight_Italic';
import { CascadiaMono_300Light_Italic } from '@expo-google-fonts/cascadia-mono/300Light_Italic';
import { CascadiaMono_400Regular_Italic } from '@expo-google-fonts/cascadia-mono/400Regular_Italic';
import { CascadiaMono_500Medium_Italic } from '@expo-google-fonts/cascadia-mono/500Medium_Italic';
import { CascadiaMono_600SemiBold_Italic } from '@expo-google-fonts/cascadia-mono/600SemiBold_Italic';
import { CascadiaMono_700Bold_Italic } from '@expo-google-fonts/cascadia-mono/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    CascadiaMono_200ExtraLight, 
    CascadiaMono_300Light, 
    CascadiaMono_400Regular, 
    CascadiaMono_500Medium, 
    CascadiaMono_600SemiBold, 
    CascadiaMono_700Bold, 
    CascadiaMono_200ExtraLight_Italic, 
    CascadiaMono_300Light_Italic, 
    CascadiaMono_400Regular_Italic, 
    CascadiaMono_500Medium_Italic, 
    CascadiaMono_600SemiBold_Italic, 
    CascadiaMono_700Bold_Italic
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
          fontFamily: "CascadiaMono_200ExtraLight"
        }}>
          Cascadia Mono Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaMono_300Light"
        }}>
          Cascadia Mono Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaMono_400Regular"
        }}>
          Cascadia Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaMono_500Medium"
        }}>
          Cascadia Mono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaMono_600SemiBold"
        }}>
          Cascadia Mono Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaMono_700Bold"
        }}>
          Cascadia Mono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaMono_200ExtraLight_Italic"
        }}>
          Cascadia Mono Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaMono_300Light_Italic"
        }}>
          Cascadia Mono Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaMono_400Regular_Italic"
        }}>
          Cascadia Mono Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaMono_500Medium_Italic"
        }}>
          Cascadia Mono Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaMono_600SemiBold_Italic"
        }}>
          Cascadia Mono Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "CascadiaMono_700Bold_Italic"
        }}>
          Cascadia Mono Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![CascadiaMono_200ExtraLight](./200ExtraLight/CascadiaMono_200ExtraLight.ttf.png)|![CascadiaMono_300Light](./300Light/CascadiaMono_300Light.ttf.png)|![CascadiaMono_400Regular](./400Regular/CascadiaMono_400Regular.ttf.png)||
|![CascadiaMono_500Medium](./500Medium/CascadiaMono_500Medium.ttf.png)|![CascadiaMono_600SemiBold](./600SemiBold/CascadiaMono_600SemiBold.ttf.png)|![CascadiaMono_700Bold](./700Bold/CascadiaMono_700Bold.ttf.png)||
|![CascadiaMono_200ExtraLight_Italic](./200ExtraLight_Italic/CascadiaMono_200ExtraLight_Italic.ttf.png)|![CascadiaMono_300Light_Italic](./300Light_Italic/CascadiaMono_300Light_Italic.ttf.png)|![CascadiaMono_400Regular_Italic](./400Regular_Italic/CascadiaMono_400Regular_Italic.ttf.png)||
|![CascadiaMono_500Medium_Italic](./500Medium_Italic/CascadiaMono_500Medium_Italic.ttf.png)|![CascadiaMono_600SemiBold_Italic](./600SemiBold_Italic/CascadiaMono_600SemiBold_Italic.ttf.png)|![CascadiaMono_700Bold_Italic](./700Bold_Italic/CascadiaMono_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/cascadia-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cascadia Mono page on Google Fonts](https://fonts.google.com/specimen/Cascadia+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cascadia Mono on Google Fonts](https://fonts.google.com/specimen/Cascadia+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cascadia-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cascadia-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
