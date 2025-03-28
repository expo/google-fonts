# @expo-google-fonts/roboto-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/roboto-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/roboto-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/roboto-mono)

This package lets you use the [**Roboto Mono**](https://fonts.google.com/specimen/Roboto+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Roboto Mono

![Roboto Mono](./font-family.png)

This font family contains [14 styles](#-gallery).

- `RobotoMono_100Thin`
- `RobotoMono_200ExtraLight`
- `RobotoMono_300Light`
- `RobotoMono_400Regular`
- `RobotoMono_500Medium`
- `RobotoMono_600SemiBold`
- `RobotoMono_700Bold`
- `RobotoMono_100Thin_Italic`
- `RobotoMono_200ExtraLight_Italic`
- `RobotoMono_300Light_Italic`
- `RobotoMono_400Regular_Italic`
- `RobotoMono_500Medium_Italic`
- `RobotoMono_600SemiBold_Italic`
- `RobotoMono_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/roboto-mono expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/roboto-mono/useFonts';
import { RobotoMono_100Thin } from '@expo-google-fonts/roboto-mono/100Thin';
import { RobotoMono_200ExtraLight } from '@expo-google-fonts/roboto-mono/200ExtraLight';
import { RobotoMono_300Light } from '@expo-google-fonts/roboto-mono/300Light';
import { RobotoMono_400Regular } from '@expo-google-fonts/roboto-mono/400Regular';
import { RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono/500Medium';
import { RobotoMono_600SemiBold } from '@expo-google-fonts/roboto-mono/600SemiBold';
import { RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono/700Bold';
import { RobotoMono_100Thin_Italic } from '@expo-google-fonts/roboto-mono/100Thin_Italic';
import { RobotoMono_200ExtraLight_Italic } from '@expo-google-fonts/roboto-mono/200ExtraLight_Italic';
import { RobotoMono_300Light_Italic } from '@expo-google-fonts/roboto-mono/300Light_Italic';
import { RobotoMono_400Regular_Italic } from '@expo-google-fonts/roboto-mono/400Regular_Italic';
import { RobotoMono_500Medium_Italic } from '@expo-google-fonts/roboto-mono/500Medium_Italic';
import { RobotoMono_600SemiBold_Italic } from '@expo-google-fonts/roboto-mono/600SemiBold_Italic';
import { RobotoMono_700Bold_Italic } from '@expo-google-fonts/roboto-mono/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    RobotoMono_100Thin, 
    RobotoMono_200ExtraLight, 
    RobotoMono_300Light, 
    RobotoMono_400Regular, 
    RobotoMono_500Medium, 
    RobotoMono_600SemiBold, 
    RobotoMono_700Bold, 
    RobotoMono_100Thin_Italic, 
    RobotoMono_200ExtraLight_Italic, 
    RobotoMono_300Light_Italic, 
    RobotoMono_400Regular_Italic, 
    RobotoMono_500Medium_Italic, 
    RobotoMono_600SemiBold_Italic, 
    RobotoMono_700Bold_Italic
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
          fontFamily: "RobotoMono_100Thin"
        }}>
          Roboto Mono Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_200ExtraLight"
        }}>
          Roboto Mono Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_300Light"
        }}>
          Roboto Mono Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_400Regular"
        }}>
          Roboto Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_500Medium"
        }}>
          Roboto Mono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_600SemiBold"
        }}>
          Roboto Mono Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_700Bold"
        }}>
          Roboto Mono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_100Thin_Italic"
        }}>
          Roboto Mono Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_200ExtraLight_Italic"
        }}>
          Roboto Mono Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_300Light_Italic"
        }}>
          Roboto Mono Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_400Regular_Italic"
        }}>
          Roboto Mono Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_500Medium_Italic"
        }}>
          Roboto Mono Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_600SemiBold_Italic"
        }}>
          Roboto Mono Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoMono_700Bold_Italic"
        }}>
          Roboto Mono Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![RobotoMono_100Thin](./100Thin/RobotoMono_100Thin.ttf.png)|![RobotoMono_200ExtraLight](./200ExtraLight/RobotoMono_200ExtraLight.ttf.png)|![RobotoMono_300Light](./300Light/RobotoMono_300Light.ttf.png)||
|![RobotoMono_400Regular](./400Regular/RobotoMono_400Regular.ttf.png)|![RobotoMono_500Medium](./500Medium/RobotoMono_500Medium.ttf.png)|![RobotoMono_600SemiBold](./600SemiBold/RobotoMono_600SemiBold.ttf.png)||
|![RobotoMono_700Bold](./700Bold/RobotoMono_700Bold.ttf.png)|![RobotoMono_100Thin_Italic](./100Thin_Italic/RobotoMono_100Thin_Italic.ttf.png)|![RobotoMono_200ExtraLight_Italic](./200ExtraLight_Italic/RobotoMono_200ExtraLight_Italic.ttf.png)||
|![RobotoMono_300Light_Italic](./300Light_Italic/RobotoMono_300Light_Italic.ttf.png)|![RobotoMono_400Regular_Italic](./400Regular_Italic/RobotoMono_400Regular_Italic.ttf.png)|![RobotoMono_500Medium_Italic](./500Medium_Italic/RobotoMono_500Medium_Italic.ttf.png)||
|![RobotoMono_600SemiBold_Italic](./600SemiBold_Italic/RobotoMono_600SemiBold_Italic.ttf.png)|![RobotoMono_700Bold_Italic](./700Bold_Italic/RobotoMono_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/roboto-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Roboto Mono page on Google Fonts](https://fonts.google.com/specimen/Roboto+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Roboto Mono on Google Fonts](https://fonts.google.com/specimen/Roboto+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/roboto-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/roboto-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
