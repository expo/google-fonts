# @expo-google-fonts/roboto-slab

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/roboto-slab)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/roboto-slab)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/roboto-slab)

This package lets you use the [**Roboto Slab**](https://fonts.google.com/specimen/Roboto+Slab) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Roboto Slab

![Roboto Slab](./font-family.png)

This font family contains [9 styles](#-gallery).

- `RobotoSlab_100Thin`
- `RobotoSlab_200ExtraLight`
- `RobotoSlab_300Light`
- `RobotoSlab_400Regular`
- `RobotoSlab_500Medium`
- `RobotoSlab_600SemiBold`
- `RobotoSlab_700Bold`
- `RobotoSlab_800ExtraBold`
- `RobotoSlab_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/roboto-slab expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/roboto-slab/useFonts';
import { RobotoSlab_100Thin } from '@expo-google-fonts/roboto-slab/100Thin';
import { RobotoSlab_200ExtraLight } from '@expo-google-fonts/roboto-slab/200ExtraLight';
import { RobotoSlab_300Light } from '@expo-google-fonts/roboto-slab/300Light';
import { RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab/400Regular';
import { RobotoSlab_500Medium } from '@expo-google-fonts/roboto-slab/500Medium';
import { RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab/600SemiBold';
import { RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab/700Bold';
import { RobotoSlab_800ExtraBold } from '@expo-google-fonts/roboto-slab/800ExtraBold';
import { RobotoSlab_900Black } from '@expo-google-fonts/roboto-slab/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    RobotoSlab_100Thin, 
    RobotoSlab_200ExtraLight, 
    RobotoSlab_300Light, 
    RobotoSlab_400Regular, 
    RobotoSlab_500Medium, 
    RobotoSlab_600SemiBold, 
    RobotoSlab_700Bold, 
    RobotoSlab_800ExtraBold, 
    RobotoSlab_900Black
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
          fontFamily: "RobotoSlab_100Thin"
        }}>
          Roboto Slab Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSlab_200ExtraLight"
        }}>
          Roboto Slab Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSlab_300Light"
        }}>
          Roboto Slab Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSlab_400Regular"
        }}>
          Roboto Slab Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSlab_500Medium"
        }}>
          Roboto Slab Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSlab_600SemiBold"
        }}>
          Roboto Slab Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSlab_700Bold"
        }}>
          Roboto Slab Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSlab_800ExtraBold"
        }}>
          Roboto Slab Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoSlab_900Black"
        }}>
          Roboto Slab Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![RobotoSlab_100Thin](./100Thin/RobotoSlab_100Thin.ttf.png)|![RobotoSlab_200ExtraLight](./200ExtraLight/RobotoSlab_200ExtraLight.ttf.png)|![RobotoSlab_300Light](./300Light/RobotoSlab_300Light.ttf.png)||
|![RobotoSlab_400Regular](./400Regular/RobotoSlab_400Regular.ttf.png)|![RobotoSlab_500Medium](./500Medium/RobotoSlab_500Medium.ttf.png)|![RobotoSlab_600SemiBold](./600SemiBold/RobotoSlab_600SemiBold.ttf.png)||
|![RobotoSlab_700Bold](./700Bold/RobotoSlab_700Bold.ttf.png)|![RobotoSlab_800ExtraBold](./800ExtraBold/RobotoSlab_800ExtraBold.ttf.png)|![RobotoSlab_900Black](./900Black/RobotoSlab_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/roboto-slab` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Roboto Slab page on Google Fonts](https://fonts.google.com/specimen/Roboto+Slab) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Roboto Slab on Google Fonts](https://fonts.google.com/specimen/Roboto+Slab)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/roboto-slab)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/roboto-slab)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
