# @expo-google-fonts/epunda-slab

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/epunda-slab)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/epunda-slab)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/epunda-slab)

This package lets you use the [**Epunda Slab**](https://fonts.google.com/specimen/Epunda+Slab) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Epunda Slab

![Epunda Slab](./font-family.png)

This font family contains [14 styles](#-gallery).

- `EpundaSlab_300Light`
- `EpundaSlab_400Regular`
- `EpundaSlab_500Medium`
- `EpundaSlab_600SemiBold`
- `EpundaSlab_700Bold`
- `EpundaSlab_800ExtraBold`
- `EpundaSlab_900Black`
- `EpundaSlab_300Light_Italic`
- `EpundaSlab_400Regular_Italic`
- `EpundaSlab_500Medium_Italic`
- `EpundaSlab_600SemiBold_Italic`
- `EpundaSlab_700Bold_Italic`
- `EpundaSlab_800ExtraBold_Italic`
- `EpundaSlab_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/epunda-slab expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/epunda-slab/useFonts';
import { EpundaSlab_300Light } from '@expo-google-fonts/epunda-slab/300Light';
import { EpundaSlab_400Regular } from '@expo-google-fonts/epunda-slab/400Regular';
import { EpundaSlab_500Medium } from '@expo-google-fonts/epunda-slab/500Medium';
import { EpundaSlab_600SemiBold } from '@expo-google-fonts/epunda-slab/600SemiBold';
import { EpundaSlab_700Bold } from '@expo-google-fonts/epunda-slab/700Bold';
import { EpundaSlab_800ExtraBold } from '@expo-google-fonts/epunda-slab/800ExtraBold';
import { EpundaSlab_900Black } from '@expo-google-fonts/epunda-slab/900Black';
import { EpundaSlab_300Light_Italic } from '@expo-google-fonts/epunda-slab/300Light_Italic';
import { EpundaSlab_400Regular_Italic } from '@expo-google-fonts/epunda-slab/400Regular_Italic';
import { EpundaSlab_500Medium_Italic } from '@expo-google-fonts/epunda-slab/500Medium_Italic';
import { EpundaSlab_600SemiBold_Italic } from '@expo-google-fonts/epunda-slab/600SemiBold_Italic';
import { EpundaSlab_700Bold_Italic } from '@expo-google-fonts/epunda-slab/700Bold_Italic';
import { EpundaSlab_800ExtraBold_Italic } from '@expo-google-fonts/epunda-slab/800ExtraBold_Italic';
import { EpundaSlab_900Black_Italic } from '@expo-google-fonts/epunda-slab/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    EpundaSlab_300Light, 
    EpundaSlab_400Regular, 
    EpundaSlab_500Medium, 
    EpundaSlab_600SemiBold, 
    EpundaSlab_700Bold, 
    EpundaSlab_800ExtraBold, 
    EpundaSlab_900Black, 
    EpundaSlab_300Light_Italic, 
    EpundaSlab_400Regular_Italic, 
    EpundaSlab_500Medium_Italic, 
    EpundaSlab_600SemiBold_Italic, 
    EpundaSlab_700Bold_Italic, 
    EpundaSlab_800ExtraBold_Italic, 
    EpundaSlab_900Black_Italic
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
          fontFamily: "EpundaSlab_300Light"
        }}>
          Epunda Slab Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_400Regular"
        }}>
          Epunda Slab Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_500Medium"
        }}>
          Epunda Slab Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_600SemiBold"
        }}>
          Epunda Slab Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_700Bold"
        }}>
          Epunda Slab Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_800ExtraBold"
        }}>
          Epunda Slab Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_900Black"
        }}>
          Epunda Slab Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_300Light_Italic"
        }}>
          Epunda Slab Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_400Regular_Italic"
        }}>
          Epunda Slab Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_500Medium_Italic"
        }}>
          Epunda Slab Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_600SemiBold_Italic"
        }}>
          Epunda Slab Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_700Bold_Italic"
        }}>
          Epunda Slab Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_800ExtraBold_Italic"
        }}>
          Epunda Slab Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EpundaSlab_900Black_Italic"
        }}>
          Epunda Slab Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![EpundaSlab_300Light](./300Light/EpundaSlab_300Light.ttf.png)|![EpundaSlab_400Regular](./400Regular/EpundaSlab_400Regular.ttf.png)|![EpundaSlab_500Medium](./500Medium/EpundaSlab_500Medium.ttf.png)||
|![EpundaSlab_600SemiBold](./600SemiBold/EpundaSlab_600SemiBold.ttf.png)|![EpundaSlab_700Bold](./700Bold/EpundaSlab_700Bold.ttf.png)|![EpundaSlab_800ExtraBold](./800ExtraBold/EpundaSlab_800ExtraBold.ttf.png)||
|![EpundaSlab_900Black](./900Black/EpundaSlab_900Black.ttf.png)|![EpundaSlab_300Light_Italic](./300Light_Italic/EpundaSlab_300Light_Italic.ttf.png)|![EpundaSlab_400Regular_Italic](./400Regular_Italic/EpundaSlab_400Regular_Italic.ttf.png)||
|![EpundaSlab_500Medium_Italic](./500Medium_Italic/EpundaSlab_500Medium_Italic.ttf.png)|![EpundaSlab_600SemiBold_Italic](./600SemiBold_Italic/EpundaSlab_600SemiBold_Italic.ttf.png)|![EpundaSlab_700Bold_Italic](./700Bold_Italic/EpundaSlab_700Bold_Italic.ttf.png)||
|![EpundaSlab_800ExtraBold_Italic](./800ExtraBold_Italic/EpundaSlab_800ExtraBold_Italic.ttf.png)|![EpundaSlab_900Black_Italic](./900Black_Italic/EpundaSlab_900Black_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/epunda-slab` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Epunda Slab page on Google Fonts](https://fonts.google.com/specimen/Epunda+Slab) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Epunda Slab on Google Fonts](https://fonts.google.com/specimen/Epunda+Slab)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/epunda-slab)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/epunda-slab)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
