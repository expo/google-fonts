# @expo-google-fonts/intel-one-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/intel-one-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/intel-one-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/intel-one-mono)

This package lets you use the [**Intel One Mono**](https://fonts.google.com/specimen/Intel+One+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Intel One Mono

![Intel One Mono](./font-family.png)

This font family contains [10 styles](#-gallery).

- `IntelOneMono_300Light`
- `IntelOneMono_300Light_Italic`
- `IntelOneMono_400Regular`
- `IntelOneMono_400Regular_Italic`
- `IntelOneMono_500Medium`
- `IntelOneMono_500Medium_Italic`
- `IntelOneMono_600SemiBold`
- `IntelOneMono_600SemiBold_Italic`
- `IntelOneMono_700Bold`
- `IntelOneMono_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/intel-one-mono expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/intel-one-mono/useFonts';
import { IntelOneMono_300Light } from '@expo-google-fonts/intel-one-mono/300Light';
import { IntelOneMono_300Light_Italic } from '@expo-google-fonts/intel-one-mono/300Light_Italic';
import { IntelOneMono_400Regular } from '@expo-google-fonts/intel-one-mono/400Regular';
import { IntelOneMono_400Regular_Italic } from '@expo-google-fonts/intel-one-mono/400Regular_Italic';
import { IntelOneMono_500Medium } from '@expo-google-fonts/intel-one-mono/500Medium';
import { IntelOneMono_500Medium_Italic } from '@expo-google-fonts/intel-one-mono/500Medium_Italic';
import { IntelOneMono_600SemiBold } from '@expo-google-fonts/intel-one-mono/600SemiBold';
import { IntelOneMono_600SemiBold_Italic } from '@expo-google-fonts/intel-one-mono/600SemiBold_Italic';
import { IntelOneMono_700Bold } from '@expo-google-fonts/intel-one-mono/700Bold';
import { IntelOneMono_700Bold_Italic } from '@expo-google-fonts/intel-one-mono/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    IntelOneMono_300Light, 
    IntelOneMono_300Light_Italic, 
    IntelOneMono_400Regular, 
    IntelOneMono_400Regular_Italic, 
    IntelOneMono_500Medium, 
    IntelOneMono_500Medium_Italic, 
    IntelOneMono_600SemiBold, 
    IntelOneMono_600SemiBold_Italic, 
    IntelOneMono_700Bold, 
    IntelOneMono_700Bold_Italic
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
          fontFamily: "IntelOneMono_300Light"
        }}>
          Intel One Mono Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IntelOneMono_300Light_Italic"
        }}>
          Intel One Mono Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IntelOneMono_400Regular"
        }}>
          Intel One Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IntelOneMono_400Regular_Italic"
        }}>
          Intel One Mono Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IntelOneMono_500Medium"
        }}>
          Intel One Mono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IntelOneMono_500Medium_Italic"
        }}>
          Intel One Mono Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IntelOneMono_600SemiBold"
        }}>
          Intel One Mono Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IntelOneMono_600SemiBold_Italic"
        }}>
          Intel One Mono Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IntelOneMono_700Bold"
        }}>
          Intel One Mono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IntelOneMono_700Bold_Italic"
        }}>
          Intel One Mono Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![IntelOneMono_300Light](./300Light/IntelOneMono_300Light.ttf.png)|![IntelOneMono_300Light_Italic](./300Light_Italic/IntelOneMono_300Light_Italic.ttf.png)|![IntelOneMono_400Regular](./400Regular/IntelOneMono_400Regular.ttf.png)||
|![IntelOneMono_400Regular_Italic](./400Regular_Italic/IntelOneMono_400Regular_Italic.ttf.png)|![IntelOneMono_500Medium](./500Medium/IntelOneMono_500Medium.ttf.png)|![IntelOneMono_500Medium_Italic](./500Medium_Italic/IntelOneMono_500Medium_Italic.ttf.png)||
|![IntelOneMono_600SemiBold](./600SemiBold/IntelOneMono_600SemiBold.ttf.png)|![IntelOneMono_600SemiBold_Italic](./600SemiBold_Italic/IntelOneMono_600SemiBold_Italic.ttf.png)|![IntelOneMono_700Bold](./700Bold/IntelOneMono_700Bold.ttf.png)||
|![IntelOneMono_700Bold_Italic](./700Bold_Italic/IntelOneMono_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/intel-one-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Intel One Mono page on Google Fonts](https://fonts.google.com/specimen/Intel+One+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Intel One Mono on Google Fonts](https://fonts.google.com/specimen/Intel+One+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/intel-one-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/intel-one-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
