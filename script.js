const laptops = {
    "HP Pavilion 14": { cpu: "Intel i5-1235U", ram: "16GB DDR4", storage: "512GB SSD", gpu: "Intel Iris Xe", price: "₹62,990" },
    "HP Victus 15": { cpu: "Ryzen 5 5600H", ram: "16GB DDR4", storage: "512GB SSD", gpu: "GTX 1650", price: "₹69,990" },
    "HP Omen 16": { cpu: "Intel i7-12700H", ram: "16GB DDR5", storage: "1TB SSD", gpu: "RTX 3060", price: "₹1,39,990" },

    "Lenovo IdeaPad Slim 3": { cpu: "Intel i3-1215U", ram: "8GB DDR4", storage: "512GB SSD", gpu: "Intel UHD", price: "₹42,990" },
    "Lenovo IdeaPad Gaming 3": { cpu: "Ryzen 5 5600H", ram: "8GB DDR4", storage: "512GB SSD", gpu: "GTX 1650", price: "₹58,990" },
    "Lenovo Legion 5": { cpu: "Ryzen 7 5800H", ram: "16GB DDR4", storage: "1TB SSD", gpu: "RTX 3060", price: "₹1,18,990" },

    "Asus VivoBook 15": { cpu: "Intel i5-1135G7", ram: "8GB DDR4", storage: "512GB SSD", gpu: "Intel Iris Xe", price: "₹54,490" },
    "Asus ZenBook 14 OLED": { cpu: "Intel i7-1260P", ram: "16GB LPDDR5", storage: "512GB SSD", gpu: "Intel Iris Xe", price: "₹92,990" },
    "Asus TUF Gaming A15": { cpu: "Ryzen 7 4800H", ram: "16GB DDR4", storage: "1TB SSD", gpu: "RTX 3050", price: "₹89,990" },

    "Dell Inspiron 15 5000": { cpu: "Intel i5-1235U", ram: "16GB DDR4", storage: "512GB SSD", gpu: "Intel Iris Xe", price: "₹64,990" },
    "Dell G15 Gaming": { cpu: "Ryzen 7 6800H", ram: "16GB DDR5", storage: "512GB SSD", gpu: "RTX 3050", price: "₹1,02,990" },

    "Acer Aspire 7": { cpu: "Ryzen 5 5500U", ram: "8GB DDR4", storage: "512GB SSD", gpu: "GTX 1650", price: "₹54,990" },
    "Acer Nitro 5": { cpu: "Intel i5-12500H", ram: "16GB DDR4", storage: "512GB SSD", gpu: "RTX 3050", price: "₹89,990" },

    "MSI GF63 Thin": { cpu: "Intel i5-11400H", ram: "8GB DDR4", storage: "512GB SSD", gpu: "GTX 1650", price: "₹58,990" },
    "MSI Katana GF66": { cpu: "Intel i7-11800H", ram: "16GB DDR4", storage: "512GB SSD", gpu: "RTX 3060", price: "₹1,09,990" }
};

        const lap1 = document.getElementById("lap1");
        const lap2 = document.getElementById("lap2");

        function loadOptions() {
            lap1.innerHTML = "";
            lap2.innerHTML = "";
            for (let model in laptops) {
                lap1.innerHTML += `<option value="${model}">${model}</option>`;
                lap2.innerHTML += `<option value="${model}">${model}</option>`;
            }
        }

        loadOptions();

        function compareLaptops() {
            let l1 = laptops[lap1.value];
            let l2 = laptops[lap2.value];

            let table = `
                <table>
                    <tr><th>Feature</th><th>${lap1.value}</th><th>${lap2.value}</th></tr>
                    <tr><td>CPU</td><td>${l1.cpu}</td><td>${l2.cpu}</td></tr>
                    <tr><td>RAM</td><td>${l1.ram}</td><td>${l2.ram}</td></tr>
                    <tr><td>Storage</td><td>${l1.storage}</td><td>${l2.storage}</td></tr>
                    <tr><td>GPU</td><td>${l1.gpu}</td><td>${l2.gpu}</td></tr>
                    <tr><td>Price</td><td>${l1.price}</td><td>${l2.price}</td></tr>
                </table>`;

            document.getElementById("result").innerHTML = table;
        }

        function addLaptop() {
            let model = document.getElementById("newModel").value.trim();
            let cpu = document.getElementById("newCPU").value.trim();
            let ram = document.getElementById("newRAM").value.trim();
            let storage = document.getElementById("newStorage").value.trim();
            let gpu = document.getElementById("newGPU").value.trim();
            let price = document.getElementById("newPrice").value.trim();

            if (!model || !cpu || !ram || !storage || !gpu || !price) {
                alert("Please fill all fields!");
                return;
            }

            laptops[model] = { cpu, ram, storage, gpu, price };
            loadOptions();
            alert("Laptop added successfully!");
        }