import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Center(
          child: Container(
            height: 100,
            width: 200,
            decoration: BoxDecoration(
              color: Colors.green, // Color for the container
              borderRadius: BorderRadius.circular(20), // Rounded corners
            ),
            child: const Center(
              child: Text(
                'Hi',
                style: TextStyle(
                  fontSize: 24, // Font size
                  fontWeight: FontWeight.bold, // Bold text
                  color: Colors.white, // Text color
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
