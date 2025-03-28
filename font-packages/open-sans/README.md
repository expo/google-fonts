# @expo-google-fonts/open-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/open-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/open-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/open-sans)

This package lets you use the [**Open Sans**](https://fonts.google.com/specimen/Open+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Open Sans

![Open Sans](./font-family.png)

This font family contains [12 styles](#-gallery).

- `OpenSans_300Light`
- `OpenSans_400Regular`
- `OpenSans_500Medium`
- `OpenSans_600SemiBold`
- `OpenSans_700Bold`
- `OpenSans_800ExtraBold`
- `OpenSans_300Light_Italic`
- `OpenSans_400Regular_Italic`
- `OpenSans_500Medium_Italic`
- `OpenSans_600SemiBold_Italic`
- `OpenSans_700Bold_Italic`
- `OpenSans_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/open-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/open-sans/useFonts';
import { OpenSans_300Light } from '@expo-google-fonts/open-sans/300Light';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans/400Regular';
import { OpenSans_500Medium } from '@expo-google-fonts/open-sans/500Medium';
import { OpenSans_600SemiBold } from '@expo-google-fonts/open-sans/600SemiBold';
import { OpenSans_700Bold } from '@expo-google-fonts/open-sans/700Bold';
import { OpenSans_800ExtraBold } from '@expo-google-fonts/open-sans/800ExtraBold';
import { OpenSans_300Light_Italic } from '@expo-google-fonts/open-sans/300Light_Italic';
import { OpenSans_400Regular_Italic } from '@expo-google-fonts/open-sans/400Regular_Italic';
import { OpenSans_500Medium_Italic } from '@expo-google-fonts/open-sans/500Medium_Italic';
import { OpenSans_600SemiBold_Italic } from '@expo-google-fonts/open-sans/600SemiBold_Italic';
import { OpenSans_700Bold_Italic } from '@expo-google-fonts/open-sans/700Bold_Italic';
import { OpenSans_800ExtraBold_Italic } from '@expo-google-fonts/open-sans/800ExtraBold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    OpenSans_300Light, 
    OpenSans_400Regular, 
    OpenSans_500Medium, 
    OpenSans_600SemiBold, 
    OpenSans_700Bold, 
    OpenSans_800ExtraBold, 
    OpenSans_300Light_Italic, 
    OpenSans_400Regular_Italic, 
    OpenSans_500Medium_Italic, 
    OpenSans_600SemiBold_Italic, 
    OpenSans_700Bold_Italic, 
    OpenSans_800ExtraBold_Italic
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
          fontFamily: "OpenSans_300Light"
        }}>
          Open Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "OpenSans_400Regular"
        }}>
          Open Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "OpenSans_500Medium"
        }}>
          Open Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "OpenSans_600SemiBold"
        }}>
          Open Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "OpenSans_700Bold"
        }}>
          Open Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "OpenSans_800ExtraBold"
        }}>
          Open Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "OpenSans_300Light_Italic"
        }}>
          Open Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "OpenSans_400Regular_Italic"
        }}>
          Open Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "OpenSans_500Medium_Italic"
        }}>
          Open Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "OpenSans_600SemiBold_Italic"
        }}>
          Open Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "OpenSans_700Bold_Italic"
        }}>
          Open Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "OpenSans_800ExtraBold_Italic"
        }}>
          Open Sans Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![OpenSans_300Light](./300Light/OpenSans_300Light.ttf.png)|![OpenSans_400Regular](./400Regular/OpenSans_400Regular.ttf.png)|![OpenSans_500Medium](./500Medium/OpenSans_500Medium.ttf.png)||
|![OpenSans_600SemiBold](./600SemiBold/OpenSans_600SemiBold.ttf.png)|![OpenSans_700Bold](./700Bold/OpenSans_700Bold.ttf.png)|![OpenSans_800ExtraBold](./800ExtraBold/OpenSans_800ExtraBold.ttf.png)||
|![OpenSans_300Light_Italic](./300Light_Italic/OpenSans_300Light_Italic.ttf.png)|![OpenSans_400Regular_Italic](./400Regular_Italic/OpenSans_400Regular_Italic.ttf.png)|![OpenSans_500Medium_Italic](./500Medium_Italic/OpenSans_500Medium_Italic.ttf.png)||
|![OpenSans_600SemiBold_Italic](./600SemiBold_Italic/OpenSans_600SemiBold_Italic.ttf.png)|![OpenSans_700Bold_Italic](./700Bold_Italic/OpenSans_700Bold_Italic.ttf.png)|![OpenSans_800ExtraBold_Italic](./800ExtraBold_Italic/OpenSans_800ExtraBold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/open-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Open Sans page on Google Fonts](https://fonts.google.com/specimen/Open+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Open Sans on Google Fonts](https://fonts.google.com/specimen/Open+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/open-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/open-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
