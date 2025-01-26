# Moroccan CNIE region finder  
This is a simple web-based application that identifies the Moroccan region for a given CNIE. Users can input a CNIE, and the system will determine the region based on predefined prefixes for regions codes.  

**CNIE: Carte Nationale d'Identité Electronique**

## How It Works
1. The user enters a CNIE in the input field (e.g., `XX00000`).
2. The application extracts the first two digits.
3. It compares the extracted prefix against predefined mappings for each region:
   - **Rabat**: `A, AA, AC, AJ ...`
   - **Casablanca**: `B, BA, BB, BE, BH, BJ, BK, BL, BM, BF, BV, BW ...`
   - **Marrakesh**: `E, EE ...`
4. The region name is displayed.

## Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/taher_el_mehdi/moroccan-cnie-region-finder.git
   ```
2. Open the `index.html` file in a web browser.
3. Enter a valid Moroccan CNIE to identify the region.

## Demo
You can try the application [here](#).

## Contributing
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is open source and available under the [MIT License](LICENSE).

## Contact
For questions or suggestions, feel free to contact me.