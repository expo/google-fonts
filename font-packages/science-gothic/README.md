# @expo-google-fonts/science-gothic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/science-gothic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/science-gothic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/science-gothic)

This package lets you use the [**Science Gothic**](https://fonts.google.com/specimen/Science+Gothic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Science Gothic

![Science Gothic](./font-family.png)

This font family contains [9 styles](#-gallery).

- `ScienceGothic_100Thin`
- `ScienceGothic_200ExtraLight`
- `ScienceGothic_300Light`
- `ScienceGothic_400Regular`
- `ScienceGothic_500Medium`
- `ScienceGothic_600SemiBold`
- `ScienceGothic_700Bold`
- `ScienceGothic_800ExtraBold`
- `ScienceGothic_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/science-gothic expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/science-gothic/useFonts';
import { ScienceGothic_100Thin } from '@expo-google-fonts/science-gothic/100Thin';
import { ScienceGothic_200ExtraLight } from '@expo-google-fonts/science-gothic/200ExtraLight';
import { ScienceGothic_300Light } from '@expo-google-fonts/science-gothic/300Light';
import { ScienceGothic_400Regular } from '@expo-google-fonts/science-gothic/400Regular';
import { ScienceGothic_500Medium } from '@expo-google-fonts/science-gothic/500Medium';
import { ScienceGothic_600SemiBold } from '@expo-google-fonts/science-gothic/600SemiBold';
import { ScienceGothic_700Bold } from '@expo-google-fonts/science-gothic/700Bold';
import { ScienceGothic_800ExtraBold } from '@expo-google-fonts/science-gothic/800ExtraBold';
import { ScienceGothic_900Black } from '@expo-google-fonts/science-gothic/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    ScienceGothic_100Thin, 
    ScienceGothic_200ExtraLight, 
    ScienceGothic_300Light, 
    ScienceGothic_400Regular, 
    ScienceGothic_500Medium, 
    ScienceGothic_600SemiBold, 
    ScienceGothic_700Bold, 
    ScienceGothic_800ExtraBold, 
    ScienceGothic_900Black
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
          fontFamily: "ScienceGothic_100Thin"
        }}>
          Science Gothic Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScienceGothic_200ExtraLight"
        }}>
          Science Gothic Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScienceGothic_300Light"
        }}>
          Science Gothic Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScienceGothic_400Regular"
        }}>
          Science Gothic Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScienceGothic_500Medium"
        }}>
          Science Gothic Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScienceGothic_600SemiBold"
        }}>
          Science Gothic Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScienceGothic_700Bold"
        }}>
          Science Gothic Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScienceGothic_800ExtraBold"
        }}>
          Science Gothic Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScienceGothic_900Black"
        }}>
          Science Gothic Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ScienceGothic_100Thin](./100Thin/ScienceGothic_100Thin.ttf.png)|![ScienceGothic_200ExtraLight](./200ExtraLight/ScienceGothic_200ExtraLight.ttf.png)|![ScienceGothic_300Light](./300Light/ScienceGothic_300Light.ttf.png)||
|![ScienceGothic_400Regular](./400Regular/ScienceGothic_400Regular.ttf.png)|![ScienceGothic_500Medium](./500Medium/ScienceGothic_500Medium.ttf.png)|![ScienceGothic_600SemiBold](./600SemiBold/ScienceGothic_600SemiBold.ttf.png)||
|![ScienceGothic_700Bold](./700Bold/ScienceGothic_700Bold.ttf.png)|![ScienceGothic_800ExtraBold](./800ExtraBold/ScienceGothic_800ExtraBold.ttf.png)|![ScienceGothic_900Black](./900Black/ScienceGothic_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/science-gothic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Science Gothic page on Google Fonts](https://fonts.google.com/specimen/Science+Gothic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Science Gothic on Google Fonts](https://fonts.google.com/specimen/Science+Gothic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/science-gothic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/science-gothic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
