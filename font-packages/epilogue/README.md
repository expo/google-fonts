# @expo-google-fonts/epilogue

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/epilogue)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/epilogue)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/epilogue)

This package lets you use the [**Epilogue**](https://fonts.google.com/specimen/Epilogue) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Epilogue

![Epilogue](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Epilogue_100Thin`
- `Epilogue_200ExtraLight`
- `Epilogue_300Light`
- `Epilogue_400Regular`
- `Epilogue_500Medium`
- `Epilogue_600SemiBold`
- `Epilogue_700Bold`
- `Epilogue_800ExtraBold`
- `Epilogue_900Black`
- `Epilogue_100Thin_Italic`
- `Epilogue_200ExtraLight_Italic`
- `Epilogue_300Light_Italic`
- `Epilogue_400Regular_Italic`
- `Epilogue_500Medium_Italic`
- `Epilogue_600SemiBold_Italic`
- `Epilogue_700Bold_Italic`
- `Epilogue_800ExtraBold_Italic`
- `Epilogue_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/epilogue expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/epilogue/useFonts';
import { Epilogue_100Thin } from '@expo-google-fonts/epilogue/100Thin';
import { Epilogue_200ExtraLight } from '@expo-google-fonts/epilogue/200ExtraLight';
import { Epilogue_300Light } from '@expo-google-fonts/epilogue/300Light';
import { Epilogue_400Regular } from '@expo-google-fonts/epilogue/400Regular';
import { Epilogue_500Medium } from '@expo-google-fonts/epilogue/500Medium';
import { Epilogue_600SemiBold } from '@expo-google-fonts/epilogue/600SemiBold';
import { Epilogue_700Bold } from '@expo-google-fonts/epilogue/700Bold';
import { Epilogue_800ExtraBold } from '@expo-google-fonts/epilogue/800ExtraBold';
import { Epilogue_900Black } from '@expo-google-fonts/epilogue/900Black';
import { Epilogue_100Thin_Italic } from '@expo-google-fonts/epilogue/100Thin_Italic';
import { Epilogue_200ExtraLight_Italic } from '@expo-google-fonts/epilogue/200ExtraLight_Italic';
import { Epilogue_300Light_Italic } from '@expo-google-fonts/epilogue/300Light_Italic';
import { Epilogue_400Regular_Italic } from '@expo-google-fonts/epilogue/400Regular_Italic';
import { Epilogue_500Medium_Italic } from '@expo-google-fonts/epilogue/500Medium_Italic';
import { Epilogue_600SemiBold_Italic } from '@expo-google-fonts/epilogue/600SemiBold_Italic';
import { Epilogue_700Bold_Italic } from '@expo-google-fonts/epilogue/700Bold_Italic';
import { Epilogue_800ExtraBold_Italic } from '@expo-google-fonts/epilogue/800ExtraBold_Italic';
import { Epilogue_900Black_Italic } from '@expo-google-fonts/epilogue/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Epilogue_100Thin, 
    Epilogue_200ExtraLight, 
    Epilogue_300Light, 
    Epilogue_400Regular, 
    Epilogue_500Medium, 
    Epilogue_600SemiBold, 
    Epilogue_700Bold, 
    Epilogue_800ExtraBold, 
    Epilogue_900Black, 
    Epilogue_100Thin_Italic, 
    Epilogue_200ExtraLight_Italic, 
    Epilogue_300Light_Italic, 
    Epilogue_400Regular_Italic, 
    Epilogue_500Medium_Italic, 
    Epilogue_600SemiBold_Italic, 
    Epilogue_700Bold_Italic, 
    Epilogue_800ExtraBold_Italic, 
    Epilogue_900Black_Italic
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
          fontFamily: "Epilogue_100Thin"
        }}>
          Epilogue Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_200ExtraLight"
        }}>
          Epilogue Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_300Light"
        }}>
          Epilogue Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_400Regular"
        }}>
          Epilogue Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_500Medium"
        }}>
          Epilogue Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_600SemiBold"
        }}>
          Epilogue Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_700Bold"
        }}>
          Epilogue Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_800ExtraBold"
        }}>
          Epilogue Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_900Black"
        }}>
          Epilogue Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_100Thin_Italic"
        }}>
          Epilogue Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_200ExtraLight_Italic"
        }}>
          Epilogue Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_300Light_Italic"
        }}>
          Epilogue Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_400Regular_Italic"
        }}>
          Epilogue Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_500Medium_Italic"
        }}>
          Epilogue Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_600SemiBold_Italic"
        }}>
          Epilogue Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_700Bold_Italic"
        }}>
          Epilogue Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_800ExtraBold_Italic"
        }}>
          Epilogue Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Epilogue_900Black_Italic"
        }}>
          Epilogue Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Epilogue_100Thin](./100Thin/Epilogue_100Thin.ttf.png)|![Epilogue_200ExtraLight](./200ExtraLight/Epilogue_200ExtraLight.ttf.png)|![Epilogue_300Light](./300Light/Epilogue_300Light.ttf.png)||
|![Epilogue_400Regular](./400Regular/Epilogue_400Regular.ttf.png)|![Epilogue_500Medium](./500Medium/Epilogue_500Medium.ttf.png)|![Epilogue_600SemiBold](./600SemiBold/Epilogue_600SemiBold.ttf.png)||
|![Epilogue_700Bold](./700Bold/Epilogue_700Bold.ttf.png)|![Epilogue_800ExtraBold](./800ExtraBold/Epilogue_800ExtraBold.ttf.png)|![Epilogue_900Black](./900Black/Epilogue_900Black.ttf.png)||
|![Epilogue_100Thin_Italic](./100Thin_Italic/Epilogue_100Thin_Italic.ttf.png)|![Epilogue_200ExtraLight_Italic](./200ExtraLight_Italic/Epilogue_200ExtraLight_Italic.ttf.png)|![Epilogue_300Light_Italic](./300Light_Italic/Epilogue_300Light_Italic.ttf.png)||
|![Epilogue_400Regular_Italic](./400Regular_Italic/Epilogue_400Regular_Italic.ttf.png)|![Epilogue_500Medium_Italic](./500Medium_Italic/Epilogue_500Medium_Italic.ttf.png)|![Epilogue_600SemiBold_Italic](./600SemiBold_Italic/Epilogue_600SemiBold_Italic.ttf.png)||
|![Epilogue_700Bold_Italic](./700Bold_Italic/Epilogue_700Bold_Italic.ttf.png)|![Epilogue_800ExtraBold_Italic](./800ExtraBold_Italic/Epilogue_800ExtraBold_Italic.ttf.png)|![Epilogue_900Black_Italic](./900Black_Italic/Epilogue_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/epilogue` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Epilogue page on Google Fonts](https://fonts.google.com/specimen/Epilogue) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Epilogue on Google Fonts](https://fonts.google.com/specimen/Epilogue)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/epilogue)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/epilogue)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
