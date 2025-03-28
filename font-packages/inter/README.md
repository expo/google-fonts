# @expo-google-fonts/inter

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/inter)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/inter)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/inter)

This package lets you use the [**Inter**](https://fonts.google.com/specimen/Inter) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Inter

![Inter](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Inter_100Thin`
- `Inter_200ExtraLight`
- `Inter_300Light`
- `Inter_400Regular`
- `Inter_500Medium`
- `Inter_600SemiBold`
- `Inter_700Bold`
- `Inter_800ExtraBold`
- `Inter_900Black`
- `Inter_100Thin_Italic`
- `Inter_200ExtraLight_Italic`
- `Inter_300Light_Italic`
- `Inter_400Regular_Italic`
- `Inter_500Medium_Italic`
- `Inter_600SemiBold_Italic`
- `Inter_700Bold_Italic`
- `Inter_800ExtraBold_Italic`
- `Inter_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/inter expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/inter/useFonts';
import { Inter_100Thin } from '@expo-google-fonts/inter/100Thin';
import { Inter_200ExtraLight } from '@expo-google-fonts/inter/200ExtraLight';
import { Inter_300Light } from '@expo-google-fonts/inter/300Light';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_500Medium } from '@expo-google-fonts/inter/500Medium';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Inter_700Bold } from '@expo-google-fonts/inter/700Bold';
import { Inter_800ExtraBold } from '@expo-google-fonts/inter/800ExtraBold';
import { Inter_900Black } from '@expo-google-fonts/inter/900Black';
import { Inter_100Thin_Italic } from '@expo-google-fonts/inter/100Thin_Italic';
import { Inter_200ExtraLight_Italic } from '@expo-google-fonts/inter/200ExtraLight_Italic';
import { Inter_300Light_Italic } from '@expo-google-fonts/inter/300Light_Italic';
import { Inter_400Regular_Italic } from '@expo-google-fonts/inter/400Regular_Italic';
import { Inter_500Medium_Italic } from '@expo-google-fonts/inter/500Medium_Italic';
import { Inter_600SemiBold_Italic } from '@expo-google-fonts/inter/600SemiBold_Italic';
import { Inter_700Bold_Italic } from '@expo-google-fonts/inter/700Bold_Italic';
import { Inter_800ExtraBold_Italic } from '@expo-google-fonts/inter/800ExtraBold_Italic';
import { Inter_900Black_Italic } from '@expo-google-fonts/inter/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Inter_100Thin, 
    Inter_200ExtraLight, 
    Inter_300Light, 
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_800ExtraBold, 
    Inter_900Black, 
    Inter_100Thin_Italic, 
    Inter_200ExtraLight_Italic, 
    Inter_300Light_Italic, 
    Inter_400Regular_Italic, 
    Inter_500Medium_Italic, 
    Inter_600SemiBold_Italic, 
    Inter_700Bold_Italic, 
    Inter_800ExtraBold_Italic, 
    Inter_900Black_Italic
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
          fontFamily: "Inter_100Thin"
        }}>
          Inter Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_200ExtraLight"
        }}>
          Inter Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_300Light"
        }}>
          Inter Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_400Regular"
        }}>
          Inter Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_500Medium"
        }}>
          Inter Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_600SemiBold"
        }}>
          Inter Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_700Bold"
        }}>
          Inter Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_800ExtraBold"
        }}>
          Inter Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_900Black"
        }}>
          Inter Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_100Thin_Italic"
        }}>
          Inter Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_200ExtraLight_Italic"
        }}>
          Inter Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_300Light_Italic"
        }}>
          Inter Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_400Regular_Italic"
        }}>
          Inter Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_500Medium_Italic"
        }}>
          Inter Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_600SemiBold_Italic"
        }}>
          Inter Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_700Bold_Italic"
        }}>
          Inter Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_800ExtraBold_Italic"
        }}>
          Inter Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inter_900Black_Italic"
        }}>
          Inter Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Inter_100Thin](./100Thin/Inter_100Thin.ttf.png)|![Inter_200ExtraLight](./200ExtraLight/Inter_200ExtraLight.ttf.png)|![Inter_300Light](./300Light/Inter_300Light.ttf.png)||
|![Inter_400Regular](./400Regular/Inter_400Regular.ttf.png)|![Inter_500Medium](./500Medium/Inter_500Medium.ttf.png)|![Inter_600SemiBold](./600SemiBold/Inter_600SemiBold.ttf.png)||
|![Inter_700Bold](./700Bold/Inter_700Bold.ttf.png)|![Inter_800ExtraBold](./800ExtraBold/Inter_800ExtraBold.ttf.png)|![Inter_900Black](./900Black/Inter_900Black.ttf.png)||
|![Inter_100Thin_Italic](./100Thin_Italic/Inter_100Thin_Italic.ttf.png)|![Inter_200ExtraLight_Italic](./200ExtraLight_Italic/Inter_200ExtraLight_Italic.ttf.png)|![Inter_300Light_Italic](./300Light_Italic/Inter_300Light_Italic.ttf.png)||
|![Inter_400Regular_Italic](./400Regular_Italic/Inter_400Regular_Italic.ttf.png)|![Inter_500Medium_Italic](./500Medium_Italic/Inter_500Medium_Italic.ttf.png)|![Inter_600SemiBold_Italic](./600SemiBold_Italic/Inter_600SemiBold_Italic.ttf.png)||
|![Inter_700Bold_Italic](./700Bold_Italic/Inter_700Bold_Italic.ttf.png)|![Inter_800ExtraBold_Italic](./800ExtraBold_Italic/Inter_800ExtraBold_Italic.ttf.png)|![Inter_900Black_Italic](./900Black_Italic/Inter_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/inter` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Inter page on Google Fonts](https://fonts.google.com/specimen/Inter) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Inter on Google Fonts](https://fonts.google.com/specimen/Inter)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inter)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inter)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
