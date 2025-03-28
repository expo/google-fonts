# @expo-google-fonts/lisu-bosa

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lisu-bosa)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lisu-bosa)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lisu-bosa)

This package lets you use the [**Lisu Bosa**](https://fonts.google.com/specimen/Lisu+Bosa) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lisu Bosa

![Lisu Bosa](./font-family.png)

This font family contains [16 styles](#-gallery).

- `LisuBosa_200ExtraLight`
- `LisuBosa_200ExtraLight_Italic`
- `LisuBosa_300Light`
- `LisuBosa_300Light_Italic`
- `LisuBosa_400Regular`
- `LisuBosa_400Regular_Italic`
- `LisuBosa_500Medium`
- `LisuBosa_500Medium_Italic`
- `LisuBosa_600SemiBold`
- `LisuBosa_600SemiBold_Italic`
- `LisuBosa_700Bold`
- `LisuBosa_700Bold_Italic`
- `LisuBosa_800ExtraBold`
- `LisuBosa_800ExtraBold_Italic`
- `LisuBosa_900Black`
- `LisuBosa_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/lisu-bosa expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/lisu-bosa/useFonts';
import { LisuBosa_200ExtraLight } from '@expo-google-fonts/lisu-bosa/200ExtraLight';
import { LisuBosa_200ExtraLight_Italic } from '@expo-google-fonts/lisu-bosa/200ExtraLight_Italic';
import { LisuBosa_300Light } from '@expo-google-fonts/lisu-bosa/300Light';
import { LisuBosa_300Light_Italic } from '@expo-google-fonts/lisu-bosa/300Light_Italic';
import { LisuBosa_400Regular } from '@expo-google-fonts/lisu-bosa/400Regular';
import { LisuBosa_400Regular_Italic } from '@expo-google-fonts/lisu-bosa/400Regular_Italic';
import { LisuBosa_500Medium } from '@expo-google-fonts/lisu-bosa/500Medium';
import { LisuBosa_500Medium_Italic } from '@expo-google-fonts/lisu-bosa/500Medium_Italic';
import { LisuBosa_600SemiBold } from '@expo-google-fonts/lisu-bosa/600SemiBold';
import { LisuBosa_600SemiBold_Italic } from '@expo-google-fonts/lisu-bosa/600SemiBold_Italic';
import { LisuBosa_700Bold } from '@expo-google-fonts/lisu-bosa/700Bold';
import { LisuBosa_700Bold_Italic } from '@expo-google-fonts/lisu-bosa/700Bold_Italic';
import { LisuBosa_800ExtraBold } from '@expo-google-fonts/lisu-bosa/800ExtraBold';
import { LisuBosa_800ExtraBold_Italic } from '@expo-google-fonts/lisu-bosa/800ExtraBold_Italic';
import { LisuBosa_900Black } from '@expo-google-fonts/lisu-bosa/900Black';
import { LisuBosa_900Black_Italic } from '@expo-google-fonts/lisu-bosa/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    LisuBosa_200ExtraLight, 
    LisuBosa_200ExtraLight_Italic, 
    LisuBosa_300Light, 
    LisuBosa_300Light_Italic, 
    LisuBosa_400Regular, 
    LisuBosa_400Regular_Italic, 
    LisuBosa_500Medium, 
    LisuBosa_500Medium_Italic, 
    LisuBosa_600SemiBold, 
    LisuBosa_600SemiBold_Italic, 
    LisuBosa_700Bold, 
    LisuBosa_700Bold_Italic, 
    LisuBosa_800ExtraBold, 
    LisuBosa_800ExtraBold_Italic, 
    LisuBosa_900Black, 
    LisuBosa_900Black_Italic
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
          fontFamily: "LisuBosa_200ExtraLight"
        }}>
          Lisu Bosa Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_200ExtraLight_Italic"
        }}>
          Lisu Bosa Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_300Light"
        }}>
          Lisu Bosa Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_300Light_Italic"
        }}>
          Lisu Bosa Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_400Regular"
        }}>
          Lisu Bosa Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_400Regular_Italic"
        }}>
          Lisu Bosa Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_500Medium"
        }}>
          Lisu Bosa Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_500Medium_Italic"
        }}>
          Lisu Bosa Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_600SemiBold"
        }}>
          Lisu Bosa Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_600SemiBold_Italic"
        }}>
          Lisu Bosa Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_700Bold"
        }}>
          Lisu Bosa Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_700Bold_Italic"
        }}>
          Lisu Bosa Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_800ExtraBold"
        }}>
          Lisu Bosa Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_800ExtraBold_Italic"
        }}>
          Lisu Bosa Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_900Black"
        }}>
          Lisu Bosa Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LisuBosa_900Black_Italic"
        }}>
          Lisu Bosa Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![LisuBosa_200ExtraLight](./200ExtraLight/LisuBosa_200ExtraLight.ttf.png)|![LisuBosa_200ExtraLight_Italic](./200ExtraLight_Italic/LisuBosa_200ExtraLight_Italic.ttf.png)|![LisuBosa_300Light](./300Light/LisuBosa_300Light.ttf.png)||
|![LisuBosa_300Light_Italic](./300Light_Italic/LisuBosa_300Light_Italic.ttf.png)|![LisuBosa_400Regular](./400Regular/LisuBosa_400Regular.ttf.png)|![LisuBosa_400Regular_Italic](./400Regular_Italic/LisuBosa_400Regular_Italic.ttf.png)||
|![LisuBosa_500Medium](./500Medium/LisuBosa_500Medium.ttf.png)|![LisuBosa_500Medium_Italic](./500Medium_Italic/LisuBosa_500Medium_Italic.ttf.png)|![LisuBosa_600SemiBold](./600SemiBold/LisuBosa_600SemiBold.ttf.png)||
|![LisuBosa_600SemiBold_Italic](./600SemiBold_Italic/LisuBosa_600SemiBold_Italic.ttf.png)|![LisuBosa_700Bold](./700Bold/LisuBosa_700Bold.ttf.png)|![LisuBosa_700Bold_Italic](./700Bold_Italic/LisuBosa_700Bold_Italic.ttf.png)||
|![LisuBosa_800ExtraBold](./800ExtraBold/LisuBosa_800ExtraBold.ttf.png)|![LisuBosa_800ExtraBold_Italic](./800ExtraBold_Italic/LisuBosa_800ExtraBold_Italic.ttf.png)|![LisuBosa_900Black](./900Black/LisuBosa_900Black.ttf.png)||
|![LisuBosa_900Black_Italic](./900Black_Italic/LisuBosa_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/lisu-bosa` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lisu Bosa page on Google Fonts](https://fonts.google.com/specimen/Lisu+Bosa) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lisu Bosa on Google Fonts](https://fonts.google.com/specimen/Lisu+Bosa)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lisu-bosa)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lisu-bosa)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
