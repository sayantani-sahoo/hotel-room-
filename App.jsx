export default function App() {
const defaultCode = {
    Python: `print("Hello, World!")

name = "Developer"
print("Welcome", name)`,

    JavaScript: `console.log("Hello, World!");

const name = "Developer";
console.log("Welcome", name);`,

    Java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,

    "C++": `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,

    C: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,

    Go: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,

    "C#": `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,

    Rust: `fn main() {
    println!("Hello, World!");
}`,

    PHP: `<?php
echo "Hello, World!";
?>`,

    Ruby: `puts "Hello, World!"`,

    TypeScript: `console.log("Hello, World!");`,

    HTML: `<!DOCTYPE html>
<html>
<head>
    <title>Hello</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`,

    CSS: `body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
  }`,
    SQL: `SELECT 'Hello, World!' AS greeting;`,

    "Objective-C": `#import <stdio.h>

  int main() {
      printf("Hello, World!");
      return 0;
  }`
  
};
 console.log("CodeSpace");
 return defaultCode;
}
App();