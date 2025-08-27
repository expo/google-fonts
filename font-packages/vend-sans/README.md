# @expo-google-fonts/vend-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/vend-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/vend-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/vend-sans)

This package lets you use the [**Vend Sans**](https://fonts.google.com/specimen/Vend+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Vend Sans

![Vend Sans](./font-family.png)

This font family contains [10 styles](#-gallery).

- `VendSans_300Light`
- `VendSans_400Regular`
- `VendSans_500Medium`
- `VendSans_600SemiBold`
- `VendSans_700Bold`
- `VendSans_300Light_Italic`
- `VendSans_400Regular_Italic`
- `VendSans_500Medium_Italic`
- `VendSans_600SemiBold_Italic`
- `VendSans_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/vend-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/vend-sans/useFonts';
import { VendSans_300Light } from '@expo-google-fonts/vend-sans/300Light';
import { VendSans_400Regular } from '@expo-google-fonts/vend-sans/400Regular';
import { VendSans_500Medium } from '@expo-google-fonts/vend-sans/500Medium';
import { VendSans_600SemiBold } from '@expo-google-fonts/vend-sans/600SemiBold';
import { VendSans_700Bold } from '@expo-google-fonts/vend-sans/700Bold';
import { VendSans_300Light_Italic } from '@expo-google-fonts/vend-sans/300Light_Italic';
import { VendSans_400Regular_Italic } from '@expo-google-fonts/vend-sans/400Regular_Italic';
import { VendSans_500Medium_Italic } from '@expo-google-fonts/vend-sans/500Medium_Italic';
import { VendSans_600SemiBold_Italic } from '@expo-google-fonts/vend-sans/600SemiBold_Italic';
import { VendSans_700Bold_Italic } from '@expo-google-fonts/vend-sans/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    VendSans_300Light, 
    VendSans_400Regular, 
    VendSans_500Medium, 
    VendSans_600SemiBold, 
    VendSans_700Bold, 
    VendSans_300Light_Italic, 
    VendSans_400Regular_Italic, 
    VendSans_500Medium_Italic, 
    VendSans_600SemiBold_Italic, 
    VendSans_700Bold_Italic
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
          fontFamily: "VendSans_300Light"
        }}>
          Vend Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VendSans_400Regular"
        }}>
          Vend Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VendSans_500Medium"
        }}>
          Vend Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VendSans_600SemiBold"
        }}>
          Vend Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VendSans_700Bold"
        }}>
          Vend Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VendSans_300Light_Italic"
        }}>
          Vend Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VendSans_400Regular_Italic"
        }}>
          Vend Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VendSans_500Medium_Italic"
        }}>
          Vend Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VendSans_600SemiBold_Italic"
        }}>
          Vend Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VendSans_700Bold_Italic"
        }}>
          Vend Sans Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![VendSans_300Light](./300Light/VendSans_300Light.ttf.png)|![VendSans_400Regular](./400Regular/VendSans_400Regular.ttf.png)|![VendSans_500Medium](./500Medium/VendSans_500Medium.ttf.png)||
|![VendSans_600SemiBold](./600SemiBold/VendSans_600SemiBold.ttf.png)|![VendSans_700Bold](./700Bold/VendSans_700Bold.ttf.png)|![VendSans_300Light_Italic](./300Light_Italic/VendSans_300Light_Italic.ttf.png)||
|![VendSans_400Regular_Italic](./400Regular_Italic/VendSans_400Regular_Italic.ttf.png)|![VendSans_500Medium_Italic](./500Medium_Italic/VendSans_500Medium_Italic.ttf.png)|![VendSans_600SemiBold_Italic](./600SemiBold_Italic/VendSans_600SemiBold_Italic.ttf.png)||
|![VendSans_700Bold_Italic](./700Bold_Italic/VendSans_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/vend-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Vend Sans page on Google Fonts](https://fonts.google.com/specimen/Vend+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Vend Sans on Google Fonts](https://fonts.google.com/specimen/Vend+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/vend-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/vend-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
