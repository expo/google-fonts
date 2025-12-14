# @expo-google-fonts/geom

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/geom)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/geom)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/geom)

This package lets you use the [**Geom**](https://fonts.google.com/specimen/Geom) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Geom

![Geom](./font-family.png)

This font family contains [14 styles](#-gallery).

- `Geom_300Light`
- `Geom_400Regular`
- `Geom_500Medium`
- `Geom_600SemiBold`
- `Geom_700Bold`
- `Geom_800ExtraBold`
- `Geom_900Black`
- `Geom_300Light_Italic`
- `Geom_400Regular_Italic`
- `Geom_500Medium_Italic`
- `Geom_600SemiBold_Italic`
- `Geom_700Bold_Italic`
- `Geom_800ExtraBold_Italic`
- `Geom_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/geom expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/geom/useFonts';
import { Geom_300Light } from '@expo-google-fonts/geom/300Light';
import { Geom_400Regular } from '@expo-google-fonts/geom/400Regular';
import { Geom_500Medium } from '@expo-google-fonts/geom/500Medium';
import { Geom_600SemiBold } from '@expo-google-fonts/geom/600SemiBold';
import { Geom_700Bold } from '@expo-google-fonts/geom/700Bold';
import { Geom_800ExtraBold } from '@expo-google-fonts/geom/800ExtraBold';
import { Geom_900Black } from '@expo-google-fonts/geom/900Black';
import { Geom_300Light_Italic } from '@expo-google-fonts/geom/300Light_Italic';
import { Geom_400Regular_Italic } from '@expo-google-fonts/geom/400Regular_Italic';
import { Geom_500Medium_Italic } from '@expo-google-fonts/geom/500Medium_Italic';
import { Geom_600SemiBold_Italic } from '@expo-google-fonts/geom/600SemiBold_Italic';
import { Geom_700Bold_Italic } from '@expo-google-fonts/geom/700Bold_Italic';
import { Geom_800ExtraBold_Italic } from '@expo-google-fonts/geom/800ExtraBold_Italic';
import { Geom_900Black_Italic } from '@expo-google-fonts/geom/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Geom_300Light, 
    Geom_400Regular, 
    Geom_500Medium, 
    Geom_600SemiBold, 
    Geom_700Bold, 
    Geom_800ExtraBold, 
    Geom_900Black, 
    Geom_300Light_Italic, 
    Geom_400Regular_Italic, 
    Geom_500Medium_Italic, 
    Geom_600SemiBold_Italic, 
    Geom_700Bold_Italic, 
    Geom_800ExtraBold_Italic, 
    Geom_900Black_Italic
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
          fontFamily: "Geom_300Light"
        }}>
          Geom Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_400Regular"
        }}>
          Geom Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_500Medium"
        }}>
          Geom Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_600SemiBold"
        }}>
          Geom Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_700Bold"
        }}>
          Geom Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_800ExtraBold"
        }}>
          Geom Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_900Black"
        }}>
          Geom Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_300Light_Italic"
        }}>
          Geom Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_400Regular_Italic"
        }}>
          Geom Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_500Medium_Italic"
        }}>
          Geom Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_600SemiBold_Italic"
        }}>
          Geom Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_700Bold_Italic"
        }}>
          Geom Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_800ExtraBold_Italic"
        }}>
          Geom Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Geom_900Black_Italic"
        }}>
          Geom Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Geom_300Light](./300Light/Geom_300Light.ttf.png)|![Geom_400Regular](./400Regular/Geom_400Regular.ttf.png)|![Geom_500Medium](./500Medium/Geom_500Medium.ttf.png)||
|![Geom_600SemiBold](./600SemiBold/Geom_600SemiBold.ttf.png)|![Geom_700Bold](./700Bold/Geom_700Bold.ttf.png)|![Geom_800ExtraBold](./800ExtraBold/Geom_800ExtraBold.ttf.png)||
|![Geom_900Black](./900Black/Geom_900Black.ttf.png)|![Geom_300Light_Italic](./300Light_Italic/Geom_300Light_Italic.ttf.png)|![Geom_400Regular_Italic](./400Regular_Italic/Geom_400Regular_Italic.ttf.png)||
|![Geom_500Medium_Italic](./500Medium_Italic/Geom_500Medium_Italic.ttf.png)|![Geom_600SemiBold_Italic](./600SemiBold_Italic/Geom_600SemiBold_Italic.ttf.png)|![Geom_700Bold_Italic](./700Bold_Italic/Geom_700Bold_Italic.ttf.png)||
|![Geom_800ExtraBold_Italic](./800ExtraBold_Italic/Geom_800ExtraBold_Italic.ttf.png)|![Geom_900Black_Italic](./900Black_Italic/Geom_900Black_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/geom` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Geom page on Google Fonts](https://fonts.google.com/specimen/Geom) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Geom on Google Fonts](https://fonts.google.com/specimen/Geom)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/geom)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/geom)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
