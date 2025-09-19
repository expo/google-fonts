# @expo-google-fonts/suse-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/suse-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/suse-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/suse-mono)

This package lets you use the [**SUSE Mono**](https://fonts.google.com/specimen/SUSE+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## SUSE Mono

![SUSE Mono](./font-family.png)

This font family contains [16 styles](#-gallery).

- `SUSEMono_100Thin`
- `SUSEMono_200ExtraLight`
- `SUSEMono_300Light`
- `SUSEMono_400Regular`
- `SUSEMono_500Medium`
- `SUSEMono_600SemiBold`
- `SUSEMono_700Bold`
- `SUSEMono_800ExtraBold`
- `SUSEMono_100Thin_Italic`
- `SUSEMono_200ExtraLight_Italic`
- `SUSEMono_300Light_Italic`
- `SUSEMono_400Regular_Italic`
- `SUSEMono_500Medium_Italic`
- `SUSEMono_600SemiBold_Italic`
- `SUSEMono_700Bold_Italic`
- `SUSEMono_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/suse-mono expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/suse-mono/useFonts';
import { SUSEMono_100Thin } from '@expo-google-fonts/suse-mono/100Thin';
import { SUSEMono_200ExtraLight } from '@expo-google-fonts/suse-mono/200ExtraLight';
import { SUSEMono_300Light } from '@expo-google-fonts/suse-mono/300Light';
import { SUSEMono_400Regular } from '@expo-google-fonts/suse-mono/400Regular';
import { SUSEMono_500Medium } from '@expo-google-fonts/suse-mono/500Medium';
import { SUSEMono_600SemiBold } from '@expo-google-fonts/suse-mono/600SemiBold';
import { SUSEMono_700Bold } from '@expo-google-fonts/suse-mono/700Bold';
import { SUSEMono_800ExtraBold } from '@expo-google-fonts/suse-mono/800ExtraBold';
import { SUSEMono_100Thin_Italic } from '@expo-google-fonts/suse-mono/100Thin_Italic';
import { SUSEMono_200ExtraLight_Italic } from '@expo-google-fonts/suse-mono/200ExtraLight_Italic';
import { SUSEMono_300Light_Italic } from '@expo-google-fonts/suse-mono/300Light_Italic';
import { SUSEMono_400Regular_Italic } from '@expo-google-fonts/suse-mono/400Regular_Italic';
import { SUSEMono_500Medium_Italic } from '@expo-google-fonts/suse-mono/500Medium_Italic';
import { SUSEMono_600SemiBold_Italic } from '@expo-google-fonts/suse-mono/600SemiBold_Italic';
import { SUSEMono_700Bold_Italic } from '@expo-google-fonts/suse-mono/700Bold_Italic';
import { SUSEMono_800ExtraBold_Italic } from '@expo-google-fonts/suse-mono/800ExtraBold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    SUSEMono_100Thin, 
    SUSEMono_200ExtraLight, 
    SUSEMono_300Light, 
    SUSEMono_400Regular, 
    SUSEMono_500Medium, 
    SUSEMono_600SemiBold, 
    SUSEMono_700Bold, 
    SUSEMono_800ExtraBold, 
    SUSEMono_100Thin_Italic, 
    SUSEMono_200ExtraLight_Italic, 
    SUSEMono_300Light_Italic, 
    SUSEMono_400Regular_Italic, 
    SUSEMono_500Medium_Italic, 
    SUSEMono_600SemiBold_Italic, 
    SUSEMono_700Bold_Italic, 
    SUSEMono_800ExtraBold_Italic
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
          fontFamily: "SUSEMono_100Thin"
        }}>
          SUSE Mono Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_200ExtraLight"
        }}>
          SUSE Mono Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_300Light"
        }}>
          SUSE Mono Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_400Regular"
        }}>
          SUSE Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_500Medium"
        }}>
          SUSE Mono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_600SemiBold"
        }}>
          SUSE Mono Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_700Bold"
        }}>
          SUSE Mono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_800ExtraBold"
        }}>
          SUSE Mono Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_100Thin_Italic"
        }}>
          SUSE Mono Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_200ExtraLight_Italic"
        }}>
          SUSE Mono Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_300Light_Italic"
        }}>
          SUSE Mono Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_400Regular_Italic"
        }}>
          SUSE Mono Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_500Medium_Italic"
        }}>
          SUSE Mono Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_600SemiBold_Italic"
        }}>
          SUSE Mono Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_700Bold_Italic"
        }}>
          SUSE Mono Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SUSEMono_800ExtraBold_Italic"
        }}>
          SUSE Mono Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![SUSEMono_100Thin](./100Thin/SUSEMono_100Thin.ttf.png)|![SUSEMono_200ExtraLight](./200ExtraLight/SUSEMono_200ExtraLight.ttf.png)|![SUSEMono_300Light](./300Light/SUSEMono_300Light.ttf.png)||
|![SUSEMono_400Regular](./400Regular/SUSEMono_400Regular.ttf.png)|![SUSEMono_500Medium](./500Medium/SUSEMono_500Medium.ttf.png)|![SUSEMono_600SemiBold](./600SemiBold/SUSEMono_600SemiBold.ttf.png)||
|![SUSEMono_700Bold](./700Bold/SUSEMono_700Bold.ttf.png)|![SUSEMono_800ExtraBold](./800ExtraBold/SUSEMono_800ExtraBold.ttf.png)|![SUSEMono_100Thin_Italic](./100Thin_Italic/SUSEMono_100Thin_Italic.ttf.png)||
|![SUSEMono_200ExtraLight_Italic](./200ExtraLight_Italic/SUSEMono_200ExtraLight_Italic.ttf.png)|![SUSEMono_300Light_Italic](./300Light_Italic/SUSEMono_300Light_Italic.ttf.png)|![SUSEMono_400Regular_Italic](./400Regular_Italic/SUSEMono_400Regular_Italic.ttf.png)||
|![SUSEMono_500Medium_Italic](./500Medium_Italic/SUSEMono_500Medium_Italic.ttf.png)|![SUSEMono_600SemiBold_Italic](./600SemiBold_Italic/SUSEMono_600SemiBold_Italic.ttf.png)|![SUSEMono_700Bold_Italic](./700Bold_Italic/SUSEMono_700Bold_Italic.ttf.png)||
|![SUSEMono_800ExtraBold_Italic](./800ExtraBold_Italic/SUSEMono_800ExtraBold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/suse-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [SUSE Mono page on Google Fonts](https://fonts.google.com/specimen/SUSE+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [SUSE Mono on Google Fonts](https://fonts.google.com/specimen/SUSE+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/suse-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/suse-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
