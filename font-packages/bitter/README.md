# @expo-google-fonts/bitter

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitter)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitter)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitter)

This package lets you use the [**Bitter**](https://fonts.google.com/specimen/Bitter) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bitter

![Bitter](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Bitter_100Thin`
- `Bitter_200ExtraLight`
- `Bitter_300Light`
- `Bitter_400Regular`
- `Bitter_500Medium`
- `Bitter_600SemiBold`
- `Bitter_700Bold`
- `Bitter_800ExtraBold`
- `Bitter_900Black`
- `Bitter_100Thin_Italic`
- `Bitter_200ExtraLight_Italic`
- `Bitter_300Light_Italic`
- `Bitter_400Regular_Italic`
- `Bitter_500Medium_Italic`
- `Bitter_600SemiBold_Italic`
- `Bitter_700Bold_Italic`
- `Bitter_800ExtraBold_Italic`
- `Bitter_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bitter expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bitter/useFonts';
import { Bitter_100Thin } from '@expo-google-fonts/bitter/100Thin';
import { Bitter_200ExtraLight } from '@expo-google-fonts/bitter/200ExtraLight';
import { Bitter_300Light } from '@expo-google-fonts/bitter/300Light';
import { Bitter_400Regular } from '@expo-google-fonts/bitter/400Regular';
import { Bitter_500Medium } from '@expo-google-fonts/bitter/500Medium';
import { Bitter_600SemiBold } from '@expo-google-fonts/bitter/600SemiBold';
import { Bitter_700Bold } from '@expo-google-fonts/bitter/700Bold';
import { Bitter_800ExtraBold } from '@expo-google-fonts/bitter/800ExtraBold';
import { Bitter_900Black } from '@expo-google-fonts/bitter/900Black';
import { Bitter_100Thin_Italic } from '@expo-google-fonts/bitter/100Thin_Italic';
import { Bitter_200ExtraLight_Italic } from '@expo-google-fonts/bitter/200ExtraLight_Italic';
import { Bitter_300Light_Italic } from '@expo-google-fonts/bitter/300Light_Italic';
import { Bitter_400Regular_Italic } from '@expo-google-fonts/bitter/400Regular_Italic';
import { Bitter_500Medium_Italic } from '@expo-google-fonts/bitter/500Medium_Italic';
import { Bitter_600SemiBold_Italic } from '@expo-google-fonts/bitter/600SemiBold_Italic';
import { Bitter_700Bold_Italic } from '@expo-google-fonts/bitter/700Bold_Italic';
import { Bitter_800ExtraBold_Italic } from '@expo-google-fonts/bitter/800ExtraBold_Italic';
import { Bitter_900Black_Italic } from '@expo-google-fonts/bitter/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Bitter_100Thin, 
    Bitter_200ExtraLight, 
    Bitter_300Light, 
    Bitter_400Regular, 
    Bitter_500Medium, 
    Bitter_600SemiBold, 
    Bitter_700Bold, 
    Bitter_800ExtraBold, 
    Bitter_900Black, 
    Bitter_100Thin_Italic, 
    Bitter_200ExtraLight_Italic, 
    Bitter_300Light_Italic, 
    Bitter_400Regular_Italic, 
    Bitter_500Medium_Italic, 
    Bitter_600SemiBold_Italic, 
    Bitter_700Bold_Italic, 
    Bitter_800ExtraBold_Italic, 
    Bitter_900Black_Italic
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
          fontFamily: "Bitter_100Thin"
        }}>
          Bitter Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_200ExtraLight"
        }}>
          Bitter Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_300Light"
        }}>
          Bitter Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_400Regular"
        }}>
          Bitter Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_500Medium"
        }}>
          Bitter Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_600SemiBold"
        }}>
          Bitter Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_700Bold"
        }}>
          Bitter Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_800ExtraBold"
        }}>
          Bitter Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_900Black"
        }}>
          Bitter Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_100Thin_Italic"
        }}>
          Bitter Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_200ExtraLight_Italic"
        }}>
          Bitter Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_300Light_Italic"
        }}>
          Bitter Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_400Regular_Italic"
        }}>
          Bitter Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_500Medium_Italic"
        }}>
          Bitter Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_600SemiBold_Italic"
        }}>
          Bitter Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_700Bold_Italic"
        }}>
          Bitter Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_800ExtraBold_Italic"
        }}>
          Bitter Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bitter_900Black_Italic"
        }}>
          Bitter Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Bitter_100Thin](./100Thin/Bitter_100Thin.ttf.png)|![Bitter_200ExtraLight](./200ExtraLight/Bitter_200ExtraLight.ttf.png)|![Bitter_300Light](./300Light/Bitter_300Light.ttf.png)||
|![Bitter_400Regular](./400Regular/Bitter_400Regular.ttf.png)|![Bitter_500Medium](./500Medium/Bitter_500Medium.ttf.png)|![Bitter_600SemiBold](./600SemiBold/Bitter_600SemiBold.ttf.png)||
|![Bitter_700Bold](./700Bold/Bitter_700Bold.ttf.png)|![Bitter_800ExtraBold](./800ExtraBold/Bitter_800ExtraBold.ttf.png)|![Bitter_900Black](./900Black/Bitter_900Black.ttf.png)||
|![Bitter_100Thin_Italic](./100Thin_Italic/Bitter_100Thin_Italic.ttf.png)|![Bitter_200ExtraLight_Italic](./200ExtraLight_Italic/Bitter_200ExtraLight_Italic.ttf.png)|![Bitter_300Light_Italic](./300Light_Italic/Bitter_300Light_Italic.ttf.png)||
|![Bitter_400Regular_Italic](./400Regular_Italic/Bitter_400Regular_Italic.ttf.png)|![Bitter_500Medium_Italic](./500Medium_Italic/Bitter_500Medium_Italic.ttf.png)|![Bitter_600SemiBold_Italic](./600SemiBold_Italic/Bitter_600SemiBold_Italic.ttf.png)||
|![Bitter_700Bold_Italic](./700Bold_Italic/Bitter_700Bold_Italic.ttf.png)|![Bitter_800ExtraBold_Italic](./800ExtraBold_Italic/Bitter_800ExtraBold_Italic.ttf.png)|![Bitter_900Black_Italic](./900Black_Italic/Bitter_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bitter` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitter page on Google Fonts](https://fonts.google.com/specimen/Bitter) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitter on Google Fonts](https://fonts.google.com/specimen/Bitter)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitter)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitter)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
