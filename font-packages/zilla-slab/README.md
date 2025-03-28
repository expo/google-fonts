# @expo-google-fonts/zilla-slab

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/zilla-slab)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/zilla-slab)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/zilla-slab)

This package lets you use the [**Zilla Slab**](https://fonts.google.com/specimen/Zilla+Slab) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Zilla Slab

![Zilla Slab](./font-family.png)

This font family contains [10 styles](#-gallery).

- `ZillaSlab_300Light`
- `ZillaSlab_300Light_Italic`
- `ZillaSlab_400Regular`
- `ZillaSlab_400Regular_Italic`
- `ZillaSlab_500Medium`
- `ZillaSlab_500Medium_Italic`
- `ZillaSlab_600SemiBold`
- `ZillaSlab_600SemiBold_Italic`
- `ZillaSlab_700Bold`
- `ZillaSlab_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/zilla-slab expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/zilla-slab/useFonts';
import { ZillaSlab_300Light } from '@expo-google-fonts/zilla-slab/300Light';
import { ZillaSlab_300Light_Italic } from '@expo-google-fonts/zilla-slab/300Light_Italic';
import { ZillaSlab_400Regular } from '@expo-google-fonts/zilla-slab/400Regular';
import { ZillaSlab_400Regular_Italic } from '@expo-google-fonts/zilla-slab/400Regular_Italic';
import { ZillaSlab_500Medium } from '@expo-google-fonts/zilla-slab/500Medium';
import { ZillaSlab_500Medium_Italic } from '@expo-google-fonts/zilla-slab/500Medium_Italic';
import { ZillaSlab_600SemiBold } from '@expo-google-fonts/zilla-slab/600SemiBold';
import { ZillaSlab_600SemiBold_Italic } from '@expo-google-fonts/zilla-slab/600SemiBold_Italic';
import { ZillaSlab_700Bold } from '@expo-google-fonts/zilla-slab/700Bold';
import { ZillaSlab_700Bold_Italic } from '@expo-google-fonts/zilla-slab/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    ZillaSlab_300Light, 
    ZillaSlab_300Light_Italic, 
    ZillaSlab_400Regular, 
    ZillaSlab_400Regular_Italic, 
    ZillaSlab_500Medium, 
    ZillaSlab_500Medium_Italic, 
    ZillaSlab_600SemiBold, 
    ZillaSlab_600SemiBold_Italic, 
    ZillaSlab_700Bold, 
    ZillaSlab_700Bold_Italic
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
          fontFamily: "ZillaSlab_300Light"
        }}>
          Zilla Slab Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZillaSlab_300Light_Italic"
        }}>
          Zilla Slab Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZillaSlab_400Regular"
        }}>
          Zilla Slab Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZillaSlab_400Regular_Italic"
        }}>
          Zilla Slab Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZillaSlab_500Medium"
        }}>
          Zilla Slab Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZillaSlab_500Medium_Italic"
        }}>
          Zilla Slab Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZillaSlab_600SemiBold"
        }}>
          Zilla Slab Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZillaSlab_600SemiBold_Italic"
        }}>
          Zilla Slab Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZillaSlab_700Bold"
        }}>
          Zilla Slab Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ZillaSlab_700Bold_Italic"
        }}>
          Zilla Slab Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ZillaSlab_300Light](./300Light/ZillaSlab_300Light.ttf.png)|![ZillaSlab_300Light_Italic](./300Light_Italic/ZillaSlab_300Light_Italic.ttf.png)|![ZillaSlab_400Regular](./400Regular/ZillaSlab_400Regular.ttf.png)||
|![ZillaSlab_400Regular_Italic](./400Regular_Italic/ZillaSlab_400Regular_Italic.ttf.png)|![ZillaSlab_500Medium](./500Medium/ZillaSlab_500Medium.ttf.png)|![ZillaSlab_500Medium_Italic](./500Medium_Italic/ZillaSlab_500Medium_Italic.ttf.png)||
|![ZillaSlab_600SemiBold](./600SemiBold/ZillaSlab_600SemiBold.ttf.png)|![ZillaSlab_600SemiBold_Italic](./600SemiBold_Italic/ZillaSlab_600SemiBold_Italic.ttf.png)|![ZillaSlab_700Bold](./700Bold/ZillaSlab_700Bold.ttf.png)||
|![ZillaSlab_700Bold_Italic](./700Bold_Italic/ZillaSlab_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/zilla-slab` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Zilla Slab page on Google Fonts](https://fonts.google.com/specimen/Zilla+Slab) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Zilla Slab on Google Fonts](https://fonts.google.com/specimen/Zilla+Slab)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/zilla-slab)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/zilla-slab)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
