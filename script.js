document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  const naira = (n) => "₦" + n.toLocaleString("en-NG");


/* ---------- Advanced Phone Checker: 15 Models per Brand (10 Budget, 5 Mid, 10 Flagship) ---------- */
const phones = [
  // ==========================================
  // --- SAMSUNG (25 Total: 10 Budget, 5 Mid, 10 Flag) ---
  // ==========================================
  // Budget (1-10)
  { brand: "Samsung", model: "Galaxy A05", price: 125000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "MediaTek Helio G85, 6.7\" display, 5000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNI1Imx4a3kuE05hNduY4vA94vzfyEOfZNteT9Ol8Pzg&s=10" },

  { brand: "Samsung", model: "Galaxy A06", price: 135000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "Budget entry, MediaTek Helio G85, 5000mAh Battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0ULQeCN3bYKLxYDACnZ0C27_rgnTf1xot25ABhUCPw&s=10" },

  { brand: "Samsung", model: "Galaxy A07", price: 150000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "Affordable daily driver, 6.7\" display, 5000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMX9I9Wz4BT2ZO0R_4Xkpobt6UdglXmIPblBT7doaiQ&s=10" },

  { brand: "Samsung", model: "Galaxy A14", price: 140000, storage: "64GB", ram: "4GB RAM", specs: "FHD+ Display, 50MP triple camera setup, 5000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdpDFwni_kE6Nv4Nwdw5udLor8BePa7XVRQIwHwPEgw&s" },

  { brand: "Samsung", model: "Galaxy A05s", price: 150000, storage: "128GB", ram: "4GB RAM", specs: "Snapdragon 680, 6.7\" 90Hz display, 5000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_jZjdVlZb7fwpsTVs-vl65pH2sZF2hf-q88WLeB3iw&s=10" },

  { brand: "Samsung", model: "Galaxy A15", price: 185000, storage: "128GB", ram: "4GB / 6GB RAM", specs: "Super AMOLED 90Hz display, 50MP camera, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qe3lB4pB4RDsie24QpbSjVikD2FZnmJEBU415f145g&s=10" },

  { brand: "Samsung", model: "Galaxy M15", price: 195000, storage: "128GB", ram: "4GB RAM", specs: "Massive 6000mAh battery, Super AMOLED 90Hz screen.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdy26G-Rbc5C-CP2n24hEPG5O9wH8fJzjrpwLdsnkDlA&s=10" },

  { brand: "Samsung", model: "Galaxy A16 LTE", price: 195000, storage: "128GB", ram: "4GB RAM", specs: "Reliable entry tier, Super AMOLED screen, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZOtUoWiDrWzsvTAHlpdllDeUKC7aV9F5IgDBmshsRAA&s=10" },

  { brand: "Samsung", model: "Galaxy F15", price: 205000, storage: "128GB", ram: "6GB RAM", specs: "MediaTek Dimensity 6100+, 6000mAh battery, 90Hz screen.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0uZXw0lZ_GMTO7adVc0NqsNBSBe6j75i87wsRyH3ow&s=10" },
  
  { brand: "Samsung", model: "Galaxy A16 5G", price: 235000, storage: "128GB / 256GB", ram: "4GB / 6GB RAM", specs: "MediaTek Dimensity 6300, 6.7\" Super AMOLED 90Hz, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEfadqnsapxY-1pzTYPoPg3GsUABRySXjfUeEe898gg&s=10" },
  // Midrange (11-15)
  { brand: "Samsung", model: "Galaxy A17 5G", price: 260000, storage: "128GB", ram: "4GB RAM", specs: "Upgraded mid-tier entry, 90Hz AMOLED, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WojgRYBaW1e36QQyIvewHAaKqCwLvxlt0xg4p81Feg&s=10" },
  { brand: "Samsung", model: "Galaxy A27 5G", price: 310000, storage: "128GB / 256GB", ram: "6GB / 8GB RAM", specs: "Balanced performance, Super AMOLED 120Hz, OIS camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQay5gj7uS3kB9LHdeQqCZF1elsxLkHk0dUdr7VYzNrlA&s=10" },
  { brand: "Samsung", model: "Galaxy M35 5G", price: 340000, storage: "256GB", ram: "8GB RAM", specs: "Exynos 1380, 6000mAh battery, 120Hz AMOLED display.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pOht3q7OI0rHEO_xAAPz6oX-hknXNemchN2Yy8-k8Q&s=10" },
  { brand: "Samsung", model: "Galaxy A37 5G", price: 390000, storage: "128GB / 256GB", ram: "6GB / 8GB RAM", specs: "Snapdragon / Exynos mid core, 120Hz AMOLED, 50MP OIS.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbIfXTjj-U-4vMSYlvKArtdOGZ6kRlGXSOs7SPt8cKg&s=10" },
  { brand: "Samsung", model: "Galaxy C55", price: 460000, storage: "256GB", ram: "8GB RAM", specs: "Vegan leather finish, Snapdragon 7 Gen 1, 45W fast charge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGosWCc8_XTGino4dyfSeIrwCSUFk5dJ__OuwbICJnA&s" },

  { brand: "Samsung", model: "Galaxy A57 5G", price: 490000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Premium mid-tier layout, robust build, advanced nightography.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyImiTak3n8EjfEWZprG16QnAoTTLe6WFOCAnTGjwy7Q&s=10" },

  // Flagship (16-25)

  { 
  brand: "Samsung", 
  model: "Galaxy S23", 
  price: 450000, 
  storage: "128GB / 256GB / 512GB", 
  ram: "8GB RAM", 
  specs: "Compact flagship performance, Snapdragon 8 Gen 2, dynamic 120Hz AMOLED display.", 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxR4vruYAFhosfP1IOAnfzRaHYpcA0uAo_NMBidlHuZg&s=10" 
},

  
  { brand: "Samsung", model: "Galaxy S26 FE", price: 850000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Fan Edition flagship entry, high-end processing, 120Hz AMOLED.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFj9AJKaMayJzdiPEnXEywwGOyVgFxwb1-BKl8eTrsmQ&s=10" },
  { brand: "Samsung", model: "Galaxy S24 Ultra", price: 1450000, storage: "256GB / 512GB", ram: "12GB RAM", specs: "Legacy flagship standard, flat display, quad camera zoom.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVO9NA7FO6bV07bXoUYt4LSqN9WMF6RUuw0yMNK9Hs1A&s=10" },
  { brand: "Samsung", model: "Galaxy S26", price: 1350000, storage: "256GB / 512GB", ram: "12GB RAM", specs: "Next-gen flagship power, compact Dynamic AMOLED 2X display.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Y_6VNY8eXwr2jz5pBFDaOQIxkF3AbVfRnOOT3a9jOg&s=10" },
  { brand: "Samsung", model: "Galaxy S26+", price: 1550000, storage: "256GB / 512GB", ram: "12GB RAM", specs: "Large screen powerhouse, flagship processor, 4900mAh battery.", image: "https://b2c-contenthub.com/wp-content/uploads/2026/03/Samsung-Galaxy-S26-Plus-Black.jpg?quality=50&strip=all&w=1200" },
  { brand: "Samsung", model: "Galaxy Z Flip 7", price: 1650000, storage: "256GB / 512GB", ram: "12GB RAM", specs: "Compact foldable flip phone, extensive cover display, Galaxy AI.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKptPAPe2BjSPd0o35piEbh7xXXBF2PE5vxDBYjS2RQ&s=10" },
  { brand: "Samsung", model: "Galaxy S25 Ultra", price: 1850000, storage: "256GB / 512GB", ram: "12GB RAM", specs: "Snapdragon 8 Elite core, titanium build, phenomenal zoom.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLapwK-Fpu1-4IIWyxBpUUY52ogFhcw7pFcBMTjK6CQ&s=10" },
  { brand: "Samsung", model: "Galaxy S26 Ultra", price: 2150000, storage: "256GB / 512GB / 1TB", ram: "12GB / 16GB RAM", specs: "Top-tier flagship, Privacy Display, 200MP Quad camera layout.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_K9pPVlAmcXb0QKZ1OdBWkBREG4YaOLtVi6kB0-bcg&s=10" },
  { brand: "Samsung", model: "Galaxy Z Fold 7", price: 2350000, storage: "256GB / 512GB", ram: "12GB RAM", specs: "Ultra-thin book-style foldable tablet layout, productivity master.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnBRIz5f-OtIIrhF0iNCJSUYKm56srhHiIrsCXI7_ig&s=10" },
  { brand: "Samsung", model: "Galaxy Z Fold 8", price: 2650000, storage: "256GB / 512GB / 1TB", ram: "12GB / 16GB RAM", specs: "Next-gen heavy duty foldable, advanced hinge architecture.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHhxzcJeljE3rj3mZiCgGOgeZBjuXmuW2SGqLgshiOA&s=10" },


  // ==========================================
  // --- APPLE (25 Total: 10 Budget, 5 Mid, 10 Flag) ---
  // ==========================================
  // Budget (1-10)
  { brand: "Apple", model: "iPhone 7", price: 135000, storage: "32GB / 128GB", ram: "2GB RAM", specs: "Apple A10 Fusion chip, aluminum build, single camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKwx2yd-ZRVC_RXI4CyrunEe3JjqbMCpWHI6ln5Fk7A&s=10" },
  { brand: "Apple", model: "iPhone 7 Plus", price: 145000, storage: "32GB / 128GB", ram: "3GB RAM", specs: "Dual camera zoom portrait mode, water resistant body.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGVOtOkirWcHzDPqJuqerZYyO6CBtPSp_CzN2JLehXA&s=10" },

  { brand: "Apple", model: "iPhone 8", price: 165000, storage: "64GB", ram: "2GB RAM", specs: "A11 Bionic chip, compact 4.7-inch display, wireless charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_U5QUSXL9hDAchh0g_BWxdeUfyqgkmhUEfqDPkLk1_w&s=10" },

  { brand: "Apple", model: "iPhone 8 Plus", price: 210000, storage: "64GB / 128GB", ram: "3GB RAM", specs: "Glass back design, dual cameras, physical Home button.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nxJsliYwueF07SpzjAtLConG0Fx81Ltx6w23oac4Xg&s=10" },
  { brand: "Apple", model: "iPhone SE (2020)", price: 240000, storage: "64GB / 128GB", ram: "3GB RAM", specs: "Compact form factor, A13 Bionic chip, Touch ID button.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7KoGvlrkYN5yC8hgPOMe74RAIFd3FVsH8YVnjrURZw&s=10" },
  { brand: "Apple", model: "iPhone X", price: 290000, storage: "64GB / 256GB", ram: "3GB RAM", specs: "OLED display debut, Face ID, dual 12MP telephoto configuration.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e4w31hUQqIXimRo2MuCgdOwU9mSG5HO08dmHqzVHSg&s=10" },
  { brand: "Apple", model: "iPhone XR", price: 310000, storage: "64GB / 128GB", ram: "3GB RAM", specs: "All-screen LCD layout, Face ID, reliable battery duration.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApMTtk9-jehFcPvNY90ejgYI7HVPlCKNSbKWw5-wM1g&s=10" },

  { brand: "Apple", model: "iPhone SE (2022)", price: 350000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "A15 Bionic chip inside classic compact body layout.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWpAI-d7BNHAdv3K23cCzrR3q2sIKw_bdIRpGOuRraA&s=10" },
  { brand: "Apple", model: "iPhone 11", price: 380000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "A13 Bionic, 6.1\" Liquid Retina display, dual 12MP cameras.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbIB1MrlqZPxXQDT1GRlyMDKRnNx0KEQybyp4H_Y7jA&s=10" },
  { brand: "Apple", model: "iPhone 12 mini", price: 420000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "Compact OLED screen, A14 Bionic processor, 5G cellular support.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwdZnUzODcnczFtN9S-gS8cSVkA69UGlXSyRX0cp1eg&s=10" },
  // Midrange (11-15)
  { brand: "Apple", model: "iPhone 11 Pro", price: 490000, storage: "64GB / 256GB", ram: "4GB RAM", specs: "Triple camera system, stainless steel frame, OLED display.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlv3sAWXId0v7qQbt926Bd43UFMI4SuoPVH_Rf2o_XNg&s=10" },
  { brand: "Apple", model: "iPhone 13 mini", price: 540000, storage: "128GB / 256GB", ram: "4GB RAM", specs: "Pocket-friendly size, improved battery over 12 mini, A15 Bionic.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xacQPF6F7qxYLkOpq2EooazNlpRPoLa67fvkjrmK_A&s=10" },
  { brand: "Apple", model: "iPhone 12", price: 580000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "A14 Bionic chip, flat-edge design, Super Retina XDR OLED.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5q9v2dDhyueUw0skXyybCDRoSnYHYUMOTVOqOQJyeA&s=10" },
  { brand: "Apple", model: "iPhone 12 Pro Max", price: 690000, storage: "128GB / 256GB", ram: "6GB RAM", specs: "Large screen display, sensor-shift stabilization, premium finish.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwe4xF6mJ9oJlX51c7lkErCypg5wcvcYMhDC5QVB0pmw&s=10" },
  

  { brand: "Apple", model: "iPhone SE (4th Gen)", price: 750000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Apple A18 Chip, modern layout, 48MP camera, Apple Intelligence.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WuCLwCuPVvIyP4y-c9aWmgkukKbvDJub9-2iTo_p_A&s=10" },

  // Flagship (16-25)

  { brand: "Apple", model: "iPhone 13", price: 720000, storage: "128GB / 256GB", ram: "4GB RAM", specs: "Diagonal dual cameras, cinematic video mode, excellent battery life.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVJ0dOA1Tu7ElIukkJkltQDs5IZMX54L0c7rPuP0g2Q&s=10" },
  
  { brand: "Apple", model: "iPhone 14", price: 900000, storage: "128GB / 256GB", ram: "6GB RAM", specs: "A15 Bionic, 6.1\" Super Retina XDR Display, dual 12MP cameras.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-Tz5OohMpbO8Dn8PLIif5j616ZI2AS3ZVBwaPMv_Xg&s=10" },

  { brand: "Apple", model: "iPhone 15", price: 1100000, storage: "128GB / 256GB", ram: "6GB RAM", specs: "USB Type-C port, Dynamic Island layout, 48MP main sensor.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-Mh3P-wNnzqb-OlKYTvN-XkLB10Hoa-kJHwI2YV7Xg&s=10" },
  { brand: "Apple", model: "iPhone 16", price: 1350000, storage: "128GB / 256GB / 512GB", ram: "8GB RAM", specs: "Apple A18 Chip, 6.1\" Super Retina XDR OLED, Dynamic Island.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyevBXtUoGDd2qMeeMBPVomfKC6vtWmif5BOVUMNi8A&s=10" },
  { brand: "Apple", model: "iPhone 17", price: 1380000, storage: "128GB / 256GB / 512GB", ram: "8GB RAM", specs: "Apple A19 Chip, 6.1\" OLED, ProMotion 120Hz display.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2avQl7qZx02KkfZPdyvJjwdbue5KhXznqFsu7L4RdXQ&s=10" },
  { brand: "Apple", model: "iPhone 17 Plus", price: 1550000, storage: "256GB / 512GB", ram: "8GB RAM", specs: "Apple A19 Chip, 6.7\" Super Retina XDR display, dual 48MP.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2R7s3CeH_ZTbap2WxMw6tPKv0Arry06qljSu1brgViQ&s=10" },
  { brand: "Apple", model: "iPhone 16 Pro", price: 1650000, storage: "128GB / 256GB / 512GB", ram: "8GB RAM", specs: "A18 Pro Chip, 6.3\" Super Retina XDR, Camera Control button.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJHIj-3lr8pb7QgzVgx7dNYueiFSTPWrtMYKXC8dRuA&s=10" },
  { brand: "Apple", model: "iPhone 15 Pro Max", price: 1650000, storage: "256GB / 512GB", ram: "8GB RAM", specs: "Titanium build, A17 Pro chip, 5x optical telephoto lens.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1wtnOGE2JFOTvRloNoyucZFbs4lcdmLhgsKwUhtoLw&s=10" },

  { brand: "Apple", model: "iPhone 17 Pro", price: 1700000, storage: "256GB / 512GB", ram: "12GB RAM", specs: "Apple A19 Pro Chip, 6.3\" Super Retina XDR, 120Hz ProMotion.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKrgVNrh6dG2Sreo_igqx0iVyZLsNazOIQb3DBOI7Yw&s=10" },
  { brand: "Apple", model: "iPhone 16 Pro Max", price: 2150000, storage: "256GB / 512GB / 1TB", ram: "8GB RAM", specs: "A18 Pro Chip, 6.9\" Super Retina XDR, 48MP Fusion Camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_wwWKpBM3Ax0c3NoKT89PmLQyxN30QVA3LLEjHrRSQ&s=10" },

  // ==========================================
  // --- GOOGLE (25 Total: 10 Budget, 5 Mid, 10 Flag) ---
  // ==========================================
  // Budget (1-10)
  { brand: "Google", model: "Pixel 2 XL", price: 120000, storage: "64GB", ram: "4GB RAM", specs: "Snapdragon 835, squeeze for Google Assistant feature.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTrrElFqYmpvpSngU5E3UTLIOP--zmjyvOSfBIpO2Ag&s=10" },
  { brand: "Google", model: "Pixel 3", price: 160000, storage: "64GB", ram: "4GB RAM", specs: "Dual front selfie cameras, flagship glass back build architecture.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfGGr5yaY9LlSK4Rth2eYOd9wu3K-OIrjyeiEpkCRdg&s=10" },
  { brand: "Google", model: "Pixel 3a", price: 180000, storage: "64GB", ram: "4GB RAM", specs: "Classic headphone jack, phenomenal single camera performance.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbE-0F7LVHH-77XQEm1I6dvPOf0Dw79TPwD3l6OUVilQ&s=10" },
  { brand: "Google", model: "Pixel 3 XL", price: 195000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "Notch display layout, stereo speakers, unlimited original photo backup.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVV6EOJmXJEQkf-7IljX5cUF-IcdrdQxUU6BsjvnMcQg&s=10" },
  { brand: "Google", model: "Pixel 4a", price: 250000, storage: "128GB", ram: "6GB RAM", specs: "Snapdragon 730G, 5.81\" OLED display, lightweight compact design.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQo6-qPmvpJsbXHNgBKZBwvYBAc_cmgdWuZE4_5KL5Q&s=10" },
  { brand: "Google", model: "Pixel 4", price: 280000, storage: "64GB / 128GB", ram: "6GB RAM", specs: "Snapdragon 855, Motion Sense radar features, 90Hz display.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rCUBaz1rVnpkHQWmo-WcoQ34DtU1brAhFsyPbTNd9w&s=10" },
  { brand: "Google", model: "Pixel 4a 5G", price: 290000, storage: "128GB", ram: "6GB RAM", specs: "Snapdragon 765G, larger 6.2\" OLED screen, ultra-wide lens added.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfMabwY-fggj9GdkcFpcnnp29aw_1xvACBbYgj1ZPvA&s=10" },
  { brand: "Google", model: "Pixel 5", price: 380000, storage: "128GB", ram: "8GB RAM", specs: "Snapdragon 765G, aluminum unibody build, wireless charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtz0-EgeKKuK0k1mF8kh5aZ_D0QclXu914-k2gSrnH7g&s=10" },
  { brand: "Google", model: "Pixel 5a 5G", price: 420000, storage: "128GB", ram: "6GB RAM", specs: "IP67 water resistance, larger 4680mAh battery capacity.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQnU2GKjCZvhAQRY0YnJzR04mL6ziff0KUzkfU-uK6g&s=10" },
  { brand: "Google", model: "Pixel 6a (Refurbished)", price: 450000, storage: "128GB", ram: "6GB RAM", specs: "Google Tensor G1 chip, custom security core, clean software.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseOEMlZCPqkNbgr4VpX-btHP7EIDxcYxCo5otBlVz2A&s=10" },
  // Midrange (11-15)
  { brand: "Google", model: "Pixel 7a", price: 520000, storage: "128GB", ram: "8GB RAM", specs: "Google Tensor G2, 6.1\" OLED 90Hz, 64MP Main Camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrwEY2KQtfjdHVAePoHN8akt9rgsaHjw_WpNSTw0uxw&s=10" },
  { brand: "Google", model: "Pixel 6", price: 530000, storage: "128GB", ram: "8GB RAM", specs: "Tensor G1 chip, distinctive camera visor design, 90Hz screen.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67qcj0GRaqTQSRskCVy-QqgpSKz-cCJfXMP3Nz8Rgsg&s=10" },
  { brand: "Google", model: "Pixel 7", price: 650000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Tensor G2 processor, refined aluminum visor camera bar.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1nD4APjVDGM_ph4MVQfRyWUC1yPqW0Nuw1IVF7tCdA&s=10" },
  { brand: "Google", model: "Pixel 8a", price: 680000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Google Tensor G3, 6.1\" OLED 120Hz, AI Photo Editing.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bnVbnJ_mT3OWxmY6da36iDVcRIa0IANh5-ulCA67sQ&s=10" },
  { brand: "Google", model: "Pixel 8", price: 780000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Google Tensor G3, 6.2\" Actua Display 120Hz, advanced audio.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEcZadAR375jOCrkqxvn-UkYP8JLvOZjdx7YIB5nD3g&s=10" },
  // Flagship (16-25)
  { brand: "Google", model: "Pixel 6 Pro", price: 720000, storage: "128GB / 256GB", ram: "12GB RAM", specs: "Curved LTPO 120Hz display, 4x optical telephoto lens.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0vW38bKj3DDm9OqM9NJNpK0gkWRt-1C05I3ktINkAQ&s=10" },
  { brand: "Google", model: "Pixel 7 Pro", price: 850000, storage: "128GB / 256GB", ram: "12GB RAM", specs: "Tensor G2, triple rear cameras with 5x telephoto zoom.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Fm9v_R5dmpm6RSA45RCkvJZqH-i0UILkSmOlnMSSPg&s=10" },
  { brand: "Google", model: "Pixel 8 Pro", price: 950000, storage: "128GB / 256GB / 512GB", ram: "12GB RAM", specs: "Google Tensor G3, Super Actua display, built-in temperature sensor.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMZ0LSUrOoWSKqHpXOtBV-faFMnXi2bDeRumClyEp_Q&s=10" },
  { brand: "Google", model: "Pixel 9", price: 1120000, storage: "128GB / 256GB", ram: "12GB RAM", specs: "Google Tensor G4, 6.3\" Actua Display, dual camera, 4700mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEk1JPgwBHQ_zYzhfnNWYqOnefBVaPIA5x7zXvOjZriA&s=10" },
  { brand: "Google", model: "Pixel 9 Pro", price: 1380000, storage: "128GB / 256GB", ram: "16GB RAM", specs: "Google Tensor G4, 6.3\" LTPO OLED 120Hz, triple camera array.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLvTyMbvDRTilmqrlTwgH0ZSShUryEV1m_ZQpZ8XaqQ&s=10" },
  { brand: "Google", model: "Pixel 9 Pro XL", price: 1550000, storage: "128GB / 256GB / 512GB", ram: "16GB RAM", specs: "Google Tensor G4, 6.8\" Super Actua Display, Gemini AI integration.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FvnPSbOzfaQ8Fcjh5HT51voGqvjQRsAuFRUtfLWgaA&s=10" },
  { brand: "Google", model: "Pixel Fold", price: 1650000, storage: "256GB / 512GB", ram: "12GB RAM", specs: "Google Tensor G2, 7.6\" Foldable OLED Inner Screen, triple camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeFKeTmJWUPrxcXP1k6wmMRFcZn0AaaNk5t_xUwWhGQ&s=10" },
  { brand: "Google", model: "Pixel 10 Pro", price: 1800000, storage: "128GB / 256GB / 512GB", ram: "16GB RAM", specs: "Google Tensor G5, 6.7\" LTPO OLED, Advanced AI Features, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GLXw-1rerbw23WfRBfNsPt6Uqw5LSc363s7Mu08M4A&s=10" },
  { brand: "Google", model: "Pixel 11 Pro XL", price: 1872000, storage: "256GB / 512GB", ram: "16GB RAM", specs: "Google Tensor G6, 6.8\" LTPO OLED, upgraded computational photography.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD53yupEznErjnu-pn7DE051iTMnoutj2Bas4lltbYkw&s=10" },
  { brand: "Google", model: "Pixel 9 Pro Fold", price: 1980000, storage: "256GB / 512GB", ram: "16GB RAM", specs: "Tensor G4, ultra-thin foldable format, dual 120Hz OLED displays.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhLhNTDWHFWX_DuROG7r05VWEO8VKDAA6yQz26rjZCA&s=10" },

  // ==========================================
  // --- XIAOMI & REDMI (25 Total: 10 Budget, 5 Mid, 10 Flag) ---
  // ==========================================
  // Budget (1-10)
  { brand: "Xiaomi", model: "Redmi A3", price: 125000, storage: "64GB / 128GB", ram: "3GB / 4GB RAM", specs: "Unique halo design glass back, Android Go optimized layout.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnClMHvMYGZaUTufucQD-fQgumTv4XkXqORpJylADtw&s=10" },
  { brand: "Xiaomi", model: "Redmi A3x", price: 135000, storage: "64GB", ram: "3GB RAM", specs: "Unisoc T603 processor, smooth 90Hz display, 5000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_zkqaeGYhs5LOJJW540LmGG88I_YPxtWeliHI37Zmg&s=10" },
  { brand: "Xiaomi", model: "POCO C65", price: 155000, storage: "128GB", ram: "6GB RAM", specs: "MediaTek Helio G85, 6.74\" 90Hz display, AI triple camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6T4GWnS9piu8NhmA3QAvcBavzkYXXK_m3mWOwGiqCQ&s=10" },
  { brand: "Xiaomi", model: "Redmi A4 5G", price: 165000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "Budget 5G connectivity powered by Snapdragon 4s Gen 2.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ZbKOX3BjLbhJecp7CEVj1G6TV6Klw-d6VylkdpU-uQ&s=10" },
  { brand: "Xiaomi", model: "Redmi 13C", price: 165000, storage: "128GB / 256GB", ram: "4GB / 8GB RAM", specs: "MediaTek Helio G85, 6.74\" 90Hz display, 5000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxgq0ifDGhRlt1g76MqDETqVj6cindvMPWpv01ooxqg&s=10" },
  { brand: "Xiaomi", model: "Redmi 14C", price: 178000, storage: "128GB / 256GB", ram: "4GB / 6GB RAM", specs: "Sleek budget design, immersive screen, fast side fingerprint.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu2LjqGyq7JAfe6UVR6v2VJH0G-idJijzEm2m63cmWQ&s=10" },
  { brand: "Xiaomi", model: "Redmi 12", price: 180000, storage: "128GB", ram: "4GB RAM", specs: "Premium glass back finish, MediaTek Helio G88, 90Hz screen.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBCOgARCOknX2ldsk8Lv_KNgS61ViPMTEC3CJsu2RjA&s=10" },
  { brand: "Xiaomi", model: "Redmi 15C", price: 190000, storage: "128GB / 256GB", ram: "4GB / 8GB RAM", specs: "MediaTek Helio Processor, 6.9\" HD+ Display, 50MP Dual Camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGIhdVyAUUTmCHInMePgOpAqSwx5Hzwid-6zpScmnQw&s=10" },
  { brand: "Xiaomi", model: "Redmi Note 12", price: 245000, storage: "128GB", ram: "6GB RAM", specs: "120Hz AMOLED screen, Snapdragon 685, 33W fast charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgyyW91aUmXP-r-0-w1A5I9r9Uansq_tCs8cU5E2LdQ&s=10" },
  { brand: "Xiaomi", model: "Redmi Note 13 4G", price: 295000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "108MP main camera, 120Hz AMOLED display, Snapdragon 685.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0F367oVbz4LpGhphaUvo7pAvOyOPoOHB4gbtV0LaUw&s=10" },
  // Midrange (11-15)
  { brand: "Xiaomi", model: "POCO M7 Pro 5G", price: 310000, storage: "128GB / 256GB", ram: "6GB / 8GB RAM", specs: "Dimensity 6300, 6.67\" AMOLED 120Hz, 50MP dual camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9r62gjRjoyacOe4IWj3N6eV0sy34zSxPZnI3U5_agA&s" },
  { brand: "Xiaomi", model: "Redmi Note 14 5G", price: 360000, storage: "128GB / 256GB", ram: "6GB / 8GB RAM", specs: "MediaTek Dimensity 7025 Ultra, 120Hz AMOLED, 5110mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14vAXAsKddPRcAeJrD2DpUACZEtZaFFU6oGHnMXISew&s=10" },
  { brand: "Xiaomi", model: "Redmi Note 13 Pro 4G", price: 420000, storage: "256GB", ram: "8GB / 12GB RAM", specs: "Helio G99 Ultra, 200MP OIS camera, 67W turbo charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjW9d3y_dZLlzL7-LFXaWm5c4UFQRDw7cqiYZYhwiXAQ&s=10" },
  { brand: "Xiaomi", model: "Redmi Note 14 Pro", price: 490000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Dimensity 7300 Ultra, curved 120Hz AMOLED, 5500mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqA9iSEbSmKv6CpYxieSlgiS3p8SiKQ3StUKJqS1LLMQ&s=10" },


  { brand: "Xiaomi", model: "POCO X6 Pro", price: 580000, storage: "256GB / 512GB", ram: "8GB / 12GB RAM", specs: "Dimensity 8300 Ultra, 1.5K CrystalRes AMOLED display, OIS.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnzwk2xURvJWaGRUdobC5ffXx7hxeiETtaCI5YWweSg&s=10" },
  // Flagship (16-25)
  { brand: "Xiaomi", model: "Redmi Note 14 Pro+", price: 610000, storage: "256GB / 512GB", ram: "8GB / 12GB RAM", specs: "Snapdragon 7s Gen 3, curved 120Hz AMOLED, 200MP OIS, 6200mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUO2YmcrwGyxbhGAcfjuy6IMz8E8tIVO2u6PYWtnUXg&s=10" },
  { brand: "Xiaomi", model: "POCO X7 Pro", price: 640000, storage: "256GB / 512GB", ram: "8GB / 12GB RAM", specs: "MediaTek Dimensity 8400, 1.5K AMOLED 120Hz, 6000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYcrXXRseSvKsZnbF8q3PFXZvAeXqn7CmqvhGG7ci0w&s=10" },
  { brand: "Xiaomi", model: "Redmi Note 17 Pro Max", price: 766400, storage: "256GB / 512GB", ram: "8GB / 12GB RAM", specs: "MediaTek Dimensity Processor, 6.67\" AMOLED 120Hz, 200MP camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAz5kZu_pdCnTjE2Gww-K_B3MDwg5P8awnkAr83EqPQ&s=10" },
  { brand: "Xiaomi", model: "POCO F6 Pro", price: 790000, storage: "256GB / 512GB", ram: "12GB / 16GB RAM", specs: "Snapdragon 8 Gen 2, WQHD+ 120Hz Flow AMOLED display, 120W.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfMvAObPbOIQrjElRguqWgCRBlK1yCSqbEOGXWfqOjg&s" },
  { brand: "Xiaomi", model: "Xiaomi 14", price: 980000, storage: "256GB / 512GB", ram: "12GB RAM", specs: "Snapdragon 8 Gen 3, Leica professional lenses, compact body.", image: "" },
  { brand: "Xiaomi", model: "Xiaomi 14T Pro", price: 1150000, storage: "256GB / 512GB / 1TB", ram: "12GB RAM", specs: "MediaTek Dimensity 9300+, Leica Triple Camera, 144Hz AMOLED.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnWH4jpuBPJLX-oFzgWjMwxIvlRodrLsfuto49D6wfA&s=10" },
  { brand: "Xiaomi", model: "Xiaomi 15", price: 1320000, storage: "256GB / 512GB", ram: "12GB / 16GB RAM", specs: "Snapdragon 8 Elite, ultra-narrow bezel layout, Leica optics.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fd9WAC9xk72pW9MJIJk2nJGrAZeEtVLJt7gy0AxoMw&s=10" },
  { brand: "Xiaomi", model: "Xiaomi 15 Pro", price: 1450000, storage: "256GB / 512GB / 1TB", ram: "12GB / 16GB RAM", specs: "Snapdragon 8 Elite, Leica Triple Camera, 6.73\" 2K AMOLED, 6100mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE49pYwTrmHCmhNBcpJMmgAE1sJ6YjLbJHVb-bl1Iq5Q&s=10" },
  { brand: "Xiaomi", model: "Xiaomi 17 Ultra", price: 1850000, storage: "512GB / 1TB", ram: "16GB RAM", specs: "Snapdragon 8 Elite Gen 5, Leica Quad Camera System, 6800mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexfeOtl8NEC3Wv7VWYeCl3k9C3A1XS4IN1HGrTID6iA&s=10" },
  { brand: "Xiaomi", model: "Xiaomi Mix Fold 4", price: 2100000, storage: "512GB / 1TB", ram: "16GB RAM", specs: "Slim book foldable design, Snapdragon 8 Gen 3, quad Leica cameras.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzfXHw3srX_sGMmPlvCEROGXUsf3RUuijrtj5OV9dEA&s=10" },

  // ==========================================
  // --- TECNO (25 Total: 10 Budget, 5 Mid, 10 Flag) ---
  // ==========================================
  // Budget (1-10)
  { brand: "Tecno", model: "Pop 8", price: 105000, storage: "64GB / 128GB", ram: "3GB / 4GB RAM", specs: "Unisoc T606, 90Hz punch-hole screen, 5000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Pop 9", price: 115000, storage: "64GB / 128GB", ram: "3GB / 4GB RAM", specs: "UNISOC T606, 6.6\" HD+ 90Hz Display, 13MP Rear Camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Spark Go 2024", price: 120000, storage: "64GB / 128GB", ram: "3GB / 4GB RAM", specs: "DTS stereo dual speakers, punch-hole screen layout.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Pop 9 5G", price: 155000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "MediaTek Dimensity 6300, 48MP Sony Camera, IR Blaster.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Spark 20", price: 175000, storage: "256GB", ram: "8GB RAM", specs: "Helio G85, 32MP selfie camera, 90Hz display, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Pova Neo 3", price: 190000, storage: "128GB", ram: "8GB RAM", specs: "Massive 7000mAh battery for extended power backups.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Spark 30", price: 195000, storage: "128GB / 256GB", ram: "6GB / 8GB RAM", specs: "MediaTek Helio G91, 6.78\" 90Hz, 64MP Camera, 33W Charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Spark 20 Pro", price: 215000, storage: "256GB", ram: "8GB RAM", specs: "Helio G99, 108MP main camera, curved punch-hole screen.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Spark 30 Pro", price: 245000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Helio G99 Ultimate, 6.78\" AMOLED 120Hz, 108MP Camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Pova 6", price: 295000, storage: "256GB", ram: "8GB RAM", specs: "Helio G99 Ultimate, 6.78\" FHD+ 120Hz, 108MP, 6000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  // Midrange (11-15)
  { brand: "Tecno", model: "Camon 30", price: 310000, storage: "256GB", ram: "8GB RAM", specs: "Helio G99 ultimate, 50MP OIS front & rear camera configuration.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Camon 40 Pro", price: 348800, storage: "256GB", ram: "8GB RAM", specs: "MediaTek Helio G-Series, 6.78\" AMOLED 120Hz, 50MP OIS Camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Pova 6 Pro 5G", price: 380000, storage: "256GB", ram: "8GB / 12GB RAM", specs: "Dimensity 6080, AMOLED 120Hz, mecha design, 6000mAh, 70W.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Camon 30 5G", price: 420000, storage: "256GB", ram: "12GB RAM", specs: "MediaTek Dimensity 7020, curved 120Hz screen, 70W fast charge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Camon 40 Pro 5G", price: 490000, storage: "256GB", ram: "12GB RAM", specs: "Dimensity 7020, 6.78\" Curved AMOLED 120Hz, 50MP OIS Camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  // Flagship (16-25)
  { brand: "Tecno", model: "Pova 6 Pro Ultimate", price: 420000, storage: "256GB", ram: "12GB RAM", specs: "Upgraded gaming processor, customized cooler accessory support.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Camon 30 Premier 5G", price: 680000, storage: "512GB", ram: "12GB RAM", specs: "Dimensity 8200 Ultimate, Sony IMX890 OIS, 4K 60fps portrait.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Camon 40 Premier", price: 750000, storage: "512GB", ram: "12GB RAM", specs: "Advanced studio-grade portrait engine, premium flagship build.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Phantom X2 5G", price: 780000, storage: "256GB", ram: "8GB RAM", specs: "Dimensity 9000 4nm chip, 120Hz curved AMOLED screen.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Phantom V Flip", price: 850000, storage: "256GB", ram: "8GB RAM", specs: "MediaTek Dimensity 8050, circular cover screen, foldable flip.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Phantom X2 Pro", price: 950000, storage: "256GB", ram: "12GB RAM", specs: "World's first retractable portrait lens, Dimensity 9000.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Phantom V Flip 2 5G", price: 1050000, storage: "256GB", ram: "8GB RAM", specs: "Dimensity 8020, 6.9\" Foldable AMOLED, large cover screen.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Phantom V Fold", price: 1350000, storage: "512GB", ram: "12GB RAM", specs: "Large 7.85\" foldable LTPO screen, Dimensity 9000+, robust hinge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Phantom V Fold 2 5G", price: 1850000, storage: "512GB", ram: "12GB RAM", specs: "Dimensity 9000+, 7.85\" Foldable LTPO AMOLED, 5750mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Tecno", model: "Phantom Ultimate Concept", price: 2200000, storage: "1TB", ram: "16GB RAM", specs: "Rollable screen technology showcase model, flagship processor.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },

  // ==========================================
  // --- INFINIX (25 Total: 10 Budget, 5 Mid, 10 Flag) ---
  // ==========================================
  // Budget (1-10)
  { brand: "Infinix", model: "Smart 9", price: 102000, storage: "64GB / 128GB", ram: "3GB / 4GB RAM", specs: "MediaTek Helio G81, 6.7\" 120Hz Display, 13MP Main Camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Smart 8", price: 105000, storage: "64GB / 128GB", ram: "3GB / 4GB RAM", specs: "Magic Ring notification panel, 90Hz display, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Hot 40i", price: 150000, storage: "128GB / 256GB", ram: "4GB / 8GB RAM", specs: "Unisoc T606, 90Hz screen, 32MP selfie camera with flash.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Hot 40", price: 185000, storage: "256GB", ram: "8GB RAM", specs: "Helio G88, 90Hz screen, 50MP triple camera, 33W charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Hot 50", price: 195000, storage: "128GB / 256GB", ram: "6GB / 8GB RAM", specs: "MediaTek Helio G100, 6.78\" 120Hz display, 5000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Note 30i", price: 198000, storage: "256GB", ram: "8GB RAM", specs: "AMOLED display layout, Helio G85, 33W fast charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Hot 40 Pro", price: 220000, storage: "256GB", ram: "8GB RAM", specs: "Helio G99, 120Hz FHD+ display, 108MP camera, 33W charge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Hot 50 Pro", price: 230000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Helio G100, 6.78\" FHD+ 120Hz, 50MP camera, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Hot 50 Pro+", price: 260000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Helio G100, 6.78\" 3D Curved AMOLED 120Hz, slim design.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Note 30", price: 265000, storage: "256GB", ram: "8GB RAM", specs: "Helio G99, 120Hz display, 64MP camera, 45W bypass charge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  // Midrange (11-15)
  { brand: "Infinix", model: "Note 40", price: 310000, storage: "256GB", ram: "8GB RAM", specs: "Helio G99 Ultimate, 6.78\" AMOLED 120Hz, 108MP, 45W charge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Note 30 Pro", price: 330000, storage: "256GB", ram: "8GB RAM", specs: "108MP camera, wireless charging capability, 68W fast fill.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "GT 10 Pro", price: 395000, storage: "256GB", ram: "8GB RAM", specs: "Cyber mecha interactive back LED lights, Dimensity 8050.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Note 40 Pro 5G", price: 430000, storage: "256GB", ram: "8GB / 12GB RAM", specs: "Dimensity 7020, 6.78\" Curved AMOLED 120Hz, 108MP OIS.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Note 40 Pro+ 5G", price: 510000, storage: "256GB", ram: "12GB RAM", specs: "Dimensity 7020, 100W FastCharge 2.0, wireless MagCharge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  // Flagship (16-25)
  { brand: "Infinix", model: "GT 20 Pro", price: 520000, storage: "256GB", ram: "8GB / 12GB RAM", specs: "Dimensity 8200 Ultimate, dedicated gaming chip, 144Hz AMOLED.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Infinix Note 50 Pro Ultra", price: 540000, storage: "256GB", ram: "12GB RAM", specs: "Advanced power management chip, high-speed wireless charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Zero 30 5G", price: 550000, storage: "256GB", ram: "12GB RAM", specs: "Dimensity 8020, 4K 60fps front video recording, 144Hz curved screen.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Zero 40 5G", price: 580000, storage: "256GB / 512GB", ram: "12GB RAM", specs: "Dimensity 8200 Ultimate, curved 144Hz screen, GoPro integration.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "GT 30 Pro", price: 610000, storage: "256GB", ram: "12GB RAM", specs: "Next-gen gaming beast, advanced vapor cooling chamber.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Zero 50 5G", price: 690000, storage: "512GB", ram: "12GB RAM", specs: "Flagship imaging matrix, periscope zoom capability, OIS.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Zero Ultra", price: 790000, storage: "256GB", ram: "8GB RAM", specs: "200MP OIS camera, insane 180W Thunder Charge, curved display.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Zero Flip", price: 1065000, storage: "256GB / 512GB", ram: "8GB RAM", specs: "Dimensity 8020, 6.9\" Foldable AMOLED Inner Screen, 50MP Dual Camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Zero Book Ultra", price: 1250000, storage: "512GB", ram: "16GB RAM", specs: "High-performance creator laptop line integration model.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },
  { brand: "Infinix", model: "Zero X Pro", price: 480000, storage: "128GB", ram: "8GB RAM", specs: "Periscope moon shot lens, Helio G95 processor layout.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10" },

  // ==========================================
  // --- OPPO (25 Total: 10 Budget, 5 Mid, 10 Flag) ---
  // ==========================================
  // Budget (1-10)
  { brand: "Oppo", model: "Oppo A18", price: 145000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "MediaTek Helio G85, 90Hz HD+ Display, 8MP Dual Camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo A3x", price: 165000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "Snapdragon 680, military-grade shock resistance, 90Hz.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo A38", price: 185000, storage: "128GB", ram: "4GB RAM", specs: "Helio G85, 90Hz Sunlight Display, 50MP AI Camera, 33W.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo A40", price: 210000, storage: "128GB", ram: "4GB / 6GB RAM", specs: "Snapdragon 6s 4G Gen 1, splash touch technology, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo A58", price: 235000, storage: "128GB", ram: "6GB RAM", specs: "FHD+ sunlight display, dual stereo speakers, 33W charge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo A60", price: 250000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Snapdragon 680, drop resistant build, 45W SUPERVOOC charge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo A78", price: 290000, storage: "256GB", ram: "8GB RAM", specs: "Snapdragon 680, 90Hz AMOLED display, 67W fast charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo A59 5G", price: 320000, storage: "128GB", ram: "4GB RAM", specs: "Dimensity 6020, 90Hz screen, glowing silk design layout.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo A79 5G", price: 340000, storage: "256GB", ram: "8GB RAM", specs: "Dimensity 6020, 90Hz FHD+ display, 33W SUPERVOOC charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo A3 Pro", price: 375000, storage: "256GB", ram: "8GB RAM", specs: "Full-angle water resistance, durable drop-proof architecture.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  // Midrange (11-15)
  { brand: "Oppo", model: "Oppo Reno 11 F 5G", price: 450000, storage: "256GB", ram: "8GB RAM", specs: "Dimensity 7050, 6.7\" AMOLED 120Hz, 64MP triple camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Reno 12 5G", price: 560000, storage: "256GB", ram: "12GB RAM", specs: "Dimensity 7300-Energy, curved 120Hz screen, AI portrait.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Reno 10 Pro", price: 610000, storage: "256GB", ram: "12GB RAM", specs: "Snapdragon 778G 5G, telephoto portrait lens, 80W charge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Reno 11 Pro", price: 640000, storage: "256GB", ram: "12GB RAM", specs: "Dimensity 8200, 50MP Sony portrait setup, 80W flash charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Reno 12 Pro 5G", price: 680000, storage: "256GB / 512GB", ram: "12GB RAM", specs: "Dimensity 7300-Energy, 6.7\" AMOLED 120Hz, 50MP Sony Camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  // Flagship (16-25)
  { brand: "Oppo", model: "Oppo Reno 12 Pro Plus", price: 740000, storage: "512GB", ram: "12GB RAM", specs: "Special edition configuration with upgraded structural glass.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Reno 13 Pro", price: 820000, storage: "512GB", ram: "12GB RAM", specs: "High-tier performance core, live photo capture, premium metal build.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Find X7", price: 1100000, storage: "256GB / 512GB", ram: "16GB RAM", specs: "Dimensity 9300, Hasselblad camera tuning, curved OLED screen.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Find N3 Flip", price: 1200000, storage: "256GB", ram: "12GB RAM", specs: "Vertical flip foldable phone, Hasselblad triple camera system.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Find X8", price: 1350000, storage: "256GB / 512GB", ram: "12GB / 16GB RAM", specs: "MediaTek Dimensity 9400, Hasselblad Triple Cameras, 5630mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Find X7 Ultra", price: 1550000, storage: "512GB", ram: "16GB RAM", specs: "Snapdragon 8 Gen 3, world's first dual periscope telephoto setup.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Find N3", price: 1650000, storage: "512GB", ram: "16GB RAM", specs: "Book-style foldable flagship, Snapdragon 8 Gen 2, Hasselblad optics.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Find X8 Pro", price: 1750000, storage: "512GB", ram: "16GB RAM", specs: "Dimensity 9400, Hasselblad Quad Cameras, 6.78\" AMOLED 120Hz.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Find N5", price: 1950000, storage: "512GB / 1TB", ram: "16GB RAM", specs: "Snapdragon flagship processor, ultra-thin folding engineering.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Oppo", model: "Oppo Find X8 Ultra", price: 1980000, storage: "512GB / 1TB", ram: "16GB RAM", specs: "Ultimate mobile photography ecosystem with advanced zoom arrays.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },

  // ==========================================
  // --- VIVO (25 Total: 10 Budget, 5 Mid, 10 Flag) ---
  // ==========================================
  // Budget (1-10)
  { brand: "Vivo", model: "Vivo Y02t", price: 110000, storage: "64GB", ram: "4GB RAM", specs: "Entry-level daily device, 5000mAh battery, face wake recognition.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo Y03", price: 125000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "Helio G85, 90Hz HD+ display, IP54 dust and water resistance.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo Y18", price: 155000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "Helio G85, 90Hz sunlight display, 50MP dual camera setup.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo Y17s", price: 168000, storage: "128GB", ram: "6GB RAM", specs: "Helio G85, 50MP rear camera, durable scratch-resistant back.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo Y19s", price: 170000, storage: "128GB", ram: "4GB / 6GB RAM", specs: "UNISOC T612, 90Hz display, dual stereo speakers, 5500mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo Y27", price: 195000, storage: "128GB", ram: "6GB RAM", specs: "Helio G85 processor, 44W FlashCharge speed, stylish back.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo Y35", price: 225000, storage: "128GB", ram: "8GB RAM", specs: "Snapdragon 680, 90Hz screen refresh, 50MP triple camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo Y28 5G", price: 230000, storage: "128GB / 256GB", ram: "6GB / 8GB RAM", specs: "Dimensity 6020, 6.56\" 90Hz display, 6000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo Y36", price: 260000, storage: "256GB", ram: "8GB RAM", specs: "Snapdragon 680, 90Hz display, 44W FlashCharge support.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo Y38 5G", price: 285000, storage: "256GB", ram: "8GB RAM", specs: "Snapdragon 4 Gen 2, 6000mAh battery, 44W fast charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  // Midrange (11-15)
  { brand: "Vivo", model: "Vivo Y39 5G", price: 340000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Dimensity Processor, 6.72\" 120Hz display, 6000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo V30 Lite", price: 410000, storage: "256GB", ram: "12GB RAM", specs: "Snapdragon 695, 120Hz AMOLED, 64W fast charge, slim build.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo V40 Lite", price: 430000, storage: "256GB", ram: "8GB RAM", specs: "Snapdragon 685, 6.67\" AMOLED 120Hz, 50MP Sony Camera, 80W.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo V30e", price: 480000, storage: "256GB", ram: "8GB RAM", specs: "Snapdragon 6 Gen 1, curved 120Hz display, studio aura light.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo V30", price: 560000, storage: "256GB", ram: "12GB RAM", specs: "Snapdragon 7 Gen 3, ZEISS optics portrait suite, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  // Flagship (16-25)
  { brand: "Vivo", model: "Vivo V40 5G", price: 640000, storage: "256GB / 512GB", ram: "8GB / 12GB RAM", specs: "Snapdragon 7 Gen 3, ZEISS Smart Aura Light, 5500mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo V40 Pro 5G", price: 780000, storage: "256GB / 512GB", ram: "12GB RAM", specs: "Dimensity 9200+, ZEISS Optics Camera, Curved AMOLED 120Hz.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo V50 Pro", price: 850000, storage: "512GB", ram: "12GB RAM", specs: "Next-gen portrait master, ultra-slim housing architecture.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo X100", price: 990000, storage: "256GB / 512GB", ram: "12GB / 16GB RAM", specs: "Dimensity 9300, ZEISS Apo telephoto camera, 120W charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo X100 Pro", price: 1250000, storage: "512GB", ram: "16GB RAM", specs: "Dimensity 9300, 1-inch main sensor, custom V3 imaging chip.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo X200", price: 1280000, storage: "256GB / 512GB", ram: "12GB / 16GB RAM", specs: "MediaTek Dimensity 9400, ZEISS Triple Cameras, 5800mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo X200 Pro", price: 1600000, storage: "512GB", ram: "16GB RAM", specs: "Dimensity 9400, ZEISS 200MP Apo Telephoto, 6000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo X100 Ultra", price: 1680000, storage: "512GB / 1TB", ram: "16GB RAM", specs: "Ultimate camera phone with 200MP Zeiss periscope telephoto.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo X Fold 3 Pro", price: 1950000, storage: "512GB / 1TB", ram: "16GB RAM", specs: "Snapdragon 8 Gen 3, lightweight foldable flagship, ZEISS cameras.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Vivo", model: "Vivo X200 Ultra", price: 1980000, storage: "512GB / 1TB", ram: "16GB RAM", specs: "Snapdragon flagship chipset, professional-grade multi-focal optics.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },

  // ==========================================
  // --- ONEPLUS (25 Total: 10 Budget, 5 Mid, 10 Flag) ---
  // ==========================================
  // Budget (1-10)
  { brand: "OnePlus", model: "OnePlus Nord N10 5G", price: 185000, storage: "128GB", ram: "6GB RAM", specs: "Snapdragon 690, 90Hz screen refresh rate, stereo speakers.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus Nord N20 SE", price: 155000, storage: "64GB", ram: "4GB RAM", specs: "Helio G35, 33W SUPERVOOC charge, 50MP dual camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus Nord CE 2 Lite", price: 205000, storage: "128GB", ram: "6GB RAM", specs: "Snapdragon 695 5G, 6599mAh equivalent feel, 33W charger.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus Nord N20 5G", price: 220000, storage: "128GB", ram: "6GB RAM", specs: "Snapdragon 695 5G, AMOLED display panel, 33W charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus 8", price: 260000, storage: "128GB", ram: "8GB RAM", specs: "Snapdragon 865 5G, 90Hz fluid AMOLED curved display.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus Nord N30 SE 5G", price: 280000, storage: "128GB", ram: "4GB RAM", specs: "Dimensity 6020, 6.72\" FHD+ display, 50MP dual camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus Nord CE 3 Lite", price: 295000, storage: "256GB", ram: "8GB RAM", specs: "Snapdragon 695, 108MP camera, 67W SUPERVOOC charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus Nord N30 5G", price: 310000, storage: "128GB", ram: "8GB RAM", specs: "Snapdragon 695, 108MP camera sensor, 50W fast charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus 8T", price: 310000, storage: "256GB", ram: "12GB RAM", specs: "120Hz flat AMOLED screen, 65W warp fast charging speed.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus 9", price: 380000, storage: "128GB", ram: "8GB RAM", specs: "Snapdragon 888, Hasselblad color calibration for mobile.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  // Midrange (11-15)
  { brand: "OnePlus", model: "OnePlus Nord CE 4 Lite 5G", price: 390000, storage: "256GB", ram: "8GB RAM", specs: "Snapdragon 695 5G, 6.67\" 120Hz AMOLED, 50MP Sony camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus Nord CE 4 5G", price: 490000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Snapdragon 7 Gen 3, 120Hz AMOLED, 100W fast charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus Nord 3 5G", price: 530000, storage: "128GB / 256GB", ram: "8GB / 16GB RAM", specs: "Dimensity 9000, 6.74\" 120Hz AMOLED, 50MP OIS camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus 10T 5G", price: 560000, storage: "128GB / 256GB", ram: "8GB / 16GB RAM", specs: "Snapdragon 8+ Gen 1, extreme cooling layout, 150W charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus Nord 4 5G", price: 590000, storage: "256GB / 512GB", ram: "8GB / 12GB RAM", specs: "Snapdragon 7+ Gen 3, all-metal unibody build, 5500mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  // Flagship (16-25)
  { brand: "OnePlus", model: "OnePlus 10 Pro 5G", price: 650000, storage: "256GB", ram: "12GB RAM", specs: "Snapdragon 8 Gen 1, Hasselblad second-gen cameras, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus 12R", price: 790000, storage: "128GB / 256GB", ram: "8GB / 16GB RAM", specs: "Snapdragon 8 Gen 2, 6.78\" 1.5K 120Hz AMOLED, 5500mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus Ace 3 Pro", price: 840000, storage: "512GB", ram: "16GB RAM", specs: "Performance-centric powerhouse with colossal battery reserve.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus 11 5G", price: 850000, storage: "128GB / 256GB", ram: "8GB / 16GB RAM", specs: "Snapdragon 8 Gen 2, Fluid AMOLED 120Hz, Hasselblad triple cam.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus 13R", price: 920000, storage: "256GB", ram: "12GB RAM", specs: "Sub-flagship performer tuned for gaming and efficiency.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus 12", price: 1120000, storage: "256GB / 512GB", ram: "12GB / 16GB RAM", specs: "Snapdragon 8 Gen 3, Hasselblad Camera, 6.82\" 2K ProXDR Display.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus 13", price: 1450000, storage: "256GB / 512GB", ram: "12GB / 16GB RAM", specs: "Snapdragon 8 Elite, Hasselblad system, 6.82\" 2K 120Hz, 6000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus 14", price: 1620000, storage: "512GB", ram: "16GB RAM", specs: "Next-gen flagship processing architecture with upgraded cooling.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus Open", price: 2100000, storage: "512GB", ram: "16GB RAM", specs: "Snapdragon 8 Gen 2, 7.82\" Foldable Flexi-Fluid AMOLED, Hasselblad.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "OnePlus", model: "OnePlus Open Apex Edition", price: 2350000, storage: "1TB", ram: "16GB RAM", specs: "Special high-capacity foldable edition with upgraded security.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },

  // ==========================================
  // --- REALME (25 Total: 10 Budget, 5 Mid, 10 Flag) ---
  // ==========================================
  // Budget (1-10)
  { brand: "Realme", model: "Realme Narzo 50i", price: 102000, storage: "64GB", ram: "4GB RAM", specs: "Super power saving mode, reliable daily entry-level companion.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme C30", price: 105000, storage: "32GB / 64GB", ram: "2GB / 3GB RAM", specs: "Unisoc T612, vertical stripe design aesthetic, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme C51", price: 115000, storage: "64GB / 128GB", ram: "4GB RAM", specs: "UNISOC T612, 6.74\" 90Hz Display, 33W SUPERVOOC Charge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme C33", price: 125000, storage: "64GB", ram: "4GB RAM", specs: "50MP crystal AI camera, slim 8.3mm prism light design layout.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme C61", price: 135000, storage: "64GB / 128GB", ram: "4GB / 6GB RAM", specs: "UNISOC T612, ArmorShell protection, 90Hz display, 5000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme C53", price: 145000, storage: "128GB", ram: "6GB RAM", specs: "Shiny champion design layout, 90Hz screen, 33W charge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme C63", price: 155000, storage: "128GB", ram: "6GB / 8GB RAM", specs: "Vegan leather option, 45W fast charge, 5000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme C55", price: 168000, storage: "128GB / 256GB", ram: "6GB / 8GB RAM", specs: "Mini capsule notification feature, Helio G88, 64MP camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme C65", price: 175000, storage: "128GB / 256GB", ram: "6GB / 8GB RAM", specs: "Helio G85, 6.67\" 90Hz, 50MP AI camera, 45W fast charge.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme C75", price: 240000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Helio G92 Max, military drop resistance, IP69 water rating.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  // Midrange (11-15)
  { brand: "Realme", model: "Realme 11 5G", price: 310000, storage: "256GB", ram: "8GB RAM", specs: "Dimensity 6100+, 108MP camera, 67W SUPERVOOC charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme 12 5G", price: 345000, storage: "256GB", ram: "8GB RAM", specs: "Dimensity 6100+, watch-inspired luxury camera module ring.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme 13 5G", price: 360000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Dimensity 6300 Energy, 6.72\" 120Hz display, 50MP OIS.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme 12+ 5G", price: 410000, storage: "256GB", ram: "12GB RAM", specs: "Dimensity 7050, Sony LYT-600 OIS camera, 120Hz AMOLED.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme 13 Pro 5G", price: 440000, storage: "256GB", ram: "8GB / 12GB RAM", specs: "Snapdragon 7s Gen 2, 6.7\" curved AMOLED 120Hz, 5200mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  // Flagship (16-25)
  { brand: "Realme", model: "Realme 13 Pro+ 5G", price: 520000, storage: "256GB / 512GB", ram: "8GB / 12GB RAM", specs: "Snapdragon 7s Gen 2, Sony Periscope Telephoto camera lens.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme 14 Pro+", price: 580000, storage: "512GB", ram: "12GB RAM", specs: "Flagship photography mid-tier alternative with professional zoom.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme GT Neo 6 SE", price: 620000, storage: "256GB", ram: "12GB RAM", specs: "Snapdragon 7+ Gen 3, ultra-bright 6000-nit curved display screen.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme GT 6T", price: 690000, storage: "256GB / 512GB", ram: "8GB / 12GB RAM", specs: "Snapdragon 7+ Gen 3, world's brightest 6000 nits display, 5500mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme GT Neo 6", price: 740000, storage: "256GB", ram: "16GB RAM", specs: "High performance tracking core built for intense mobile gaming.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme GT 6", price: 890000, storage: "256GB / 512GB", ram: "12GB / 16GB RAM", specs: "Snapdragon 8s Gen 3, LTPO AMOLED 120Hz screen, 50MP OIS.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme GT 5 Pro", price: 980000, storage: "256GB / 512GB", ram: "16GB RAM", specs: "Snapdragon 8 Gen 3, periscope telephoto setup, fast charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme GT 7", price: 1100000, storage: "512GB", ram: "16GB RAM", specs: "Snapdragon flagship performance core, custom cooling matrix.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme GT 7 Pro", price: 1250000, storage: "256GB / 512GB", ram: "12GB / 16GB RAM", specs: "Snapdragon 8 Elite, Eco² OLED Plus 120Hz, periscope zoom, 6500mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Realme", model: "Realme GT 8 Pro", price: 1450000, storage: "1TB", ram: "16GB RAM", specs: "Next-gen flagship beast featuring advanced telephoto macro lenses.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },

  // ==========================================
  // --- ITEL (25 Total: 10 Budget, 5 Mid, 10 Flag) ---
  // ==========================================
  // Budget (1-10)
  { brand: "Itel", model: "Itel A06", price: 80950, storage: "32GB", ram: "2GB RAM", specs: "Android Go Edition, 6.6\" HD+ waterdrop display, 4000mAh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel A05s", price: 85000, storage: "64GB", ram: "2GB / 4GB RAM", specs: "Unisoc SC9863A1, 6.6\" HD+ screen, 4000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel A90", price: 94900, storage: "64GB / 128GB", ram: "3GB RAM", specs: "Compact build, face unlock, fingerprint reader under ₦100k.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel A70", price: 95000, storage: "128GB", ram: "4GB RAM", specs: "Massive 128GB ROM storage under 100k, dynamic bar layout.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel A80", price: 99900, storage: "128GB", ram: "3GB / 4GB RAM", specs: "6.7\" HD+ large screen display, enhanced rugged build quality.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel A50C", price: 107700, storage: "64GB", ram: "2GB RAM", specs: "Reliable entry-level smartphone optimized for messaging & calls.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel P40", price: 112000, storage: "64GB", ram: "2GB / 4GB RAM", specs: "Huge 6000mAh battery configuration, 6.6\" display screen.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel P65", price: 135000, storage: "128GB", ram: "4GB RAM", specs: "Cyberpunk mecha design, light mobile gaming focus layout.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel P55", price: 138000, storage: "128GB", ram: "4GB / 8GB RAM", specs: "Unisoc T606, 90Hz punch-hole screen, 5000mAh with 18W charging.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel S23", price: 145000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Color-changing back panel design, 90Hz screen, 50MP camera.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  // Midrange (11-15)
  { brand: "Itel", model: "Itel A200 Plus", price: 155700, storage: "64GB / 128GB", ram: "3GB RAM", specs: "Unisoc T7250, 6.75\" HD+ 120Hz display, 6000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel City 200", price: 174600, storage: "128GB", ram: "4GB RAM", specs: "Modern aesthetic design, smooth display, student multi-tasker.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel S24", price: 185000, storage: "256GB", ram: "8GB RAM", specs: "Helio G91 processor, 108MP clear camera, 5000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel Power 80", price: 191300, storage: "128GB", ram: "4GB RAM", specs: "Massive battery setup built for power cuts, 4G dual-SIM.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel P55 5G", price: 198000, storage: "128GB", ram: "6GB RAM", specs: "MediaTek Dimensity 6080 5G, 90Hz screen, budget connectivity.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  // Flagship (16-25)
  { brand: "Itel", model: "Itel Color Pro 5G", price: 220000, storage: "128GB", ram: "6GB RAM", specs: "Color changing back variant, Dimensity 6080 5G processor core.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel S25", price: 234900, storage: "128GB", ram: "8GB RAM", specs: "6.78\" AMOLED display, 50MP rear camera, 5000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel S25 Ultra", price: 235000, storage: "256GB", ram: "8GB RAM", specs: "Unisoc T620, 6.78\" Curved AMOLED 120Hz, ultra-slim 6.9mm design.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel VistaTab 30", price: 240000, storage: "128GB", ram: "4GB RAM", specs: "11-inch display entertainment tablet setup, 7000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel Matrix 5G", price: 260000, storage: "128GB", ram: "8GB RAM", specs: "Futuristic back casing pattern, fast 5G data speeds built-in.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel S26 Pro", price: 275000, storage: "256GB", ram: "12GB RAM", specs: "Maxed-out Itel tier featuring advanced curved display glass.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel Alpha 1 Ultra", price: 285000, storage: "256GB", ram: "8GB RAM", specs: "Upgraded optics and specialized portrait features for creators.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel Super 26 Ultra", price: 295000, storage: "128GB / 256GB", ram: "8GB RAM", specs: "Unisoc T7300, 6.8\" Curved AMOLED 144Hz display, 6000mAh battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel S25 Ultra Plus", price: 299000, storage: "512GB", ram: "12GB RAM", specs: "Expanded storage edition of the flagship S-series lineup.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" },
  { brand: "Itel", model: "Itel Titan 1", price: 310000, storage: "256GB", ram: "12GB RAM", specs: "High-end rugged enterprise protection layout with strong battery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10" }
];
document.getElementById("phone-search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const queryInput = document.getElementById("phone-query").value;
  const budgetInput = document.getElementById("phone-budget").value;
  
  // Filter logic (incorporating both query and budget if needed)
  const query = queryInput.toLowerCase().trim();
  const budget = budgetInput ? parseFloat(budgetInput) : Infinity;

  const matchedPhones = phones.filter(p => {
    const matchesQuery = p.model.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query);
    const matchesBudget = p.price <= budget;
    return matchesQuery && matchesBudget;
  });

  const resultsContainer = document.getElementById("phone-results");
  const statusEl = document.getElementById("phone-search-status");
  resultsContainer.innerHTML = "";

  if (matchedPhones.length > 0) {
    statusEl.textContent = `Found ${matchedPhones.length} matching phone(s).`;
    matchedPhones.forEach(foundPhone => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <img src="${foundPhone.image}" alt="${foundPhone.model}" loading="lazy" style="width:100%; height:180px; object-fit:cover; border-radius:6px; margin-bottom:10px;">
        <h3>${foundPhone.brand} ${foundPhone.model}</h3>
        <p><strong>Price:</strong> ${naira(foundPhone.price)}</p>
        <p><strong>Storage:</strong> ${foundPhone.storage} | <strong>RAM:</strong> ${foundPhone.ram}</p>
        <p><small>${foundPhone.specs}</small></p>
      `;
      resultsContainer.appendChild(card);
    });
  } else {
    statusEl.textContent = "No phones found matching your criteria.";
  }
});

// Example usage:
checkPhoneDetails("Samsung"); // Will pull up all Samsung phones in the list
// checkPhoneDetails("iPhone 17 Pro Max"); // Will pull up the specific model

  const form = $("phone-search-form");
  const results = $("phone-results");
  const status = $("phone-search-status");

  function renderPhones(list) {
    results.innerHTML = "";
    list.forEach((p) => {
      const card = document.createElement("article");
      card.className = "card phone-card";
      card.innerHTML = `<h3></h3><p>${p.brand}</p><p class="price">About ${naira(p.price)}</p>`;
      card.querySelector("h3").textContent = p.model;
      results.appendChild(card);
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = $("phone-query").value.trim().toLowerCase();
      const budgetVal = $("phone-budget").value;
      const budget = budgetVal === "" ? Infinity : Number(budgetVal);
      const found = phones.filter(
        (p) => `${p.brand} ${p.model}`.toLowerCase().includes(q) && p.price <= budget
      );
      renderPhones(found);
      status.textContent = found.length
        ? `${found.length} phone${found.length > 1 ? "s" : ""} found. Prices are estimates; confirm with the seller.`
        : "No phones matched. Try another name or a higher budget.";
    });
  }

  /* ---------- Community poll ---------- */
  const voteForm = $("phone-vote-form");
  const voteStatus = $("phone-vote-status");
  const voteResults = $("phone-vote-results");
  const options = ["iPhone 17 Pro Max", "Samsung Galaxy S26 Ultra", "Google Pixel 10 Pro", "Xiaomi 18 Pro Max", "OnePlus 16"];
  const KEY = "phoneVotes";

  const loadVotes = () => {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  };
  const saveVotes = (v) => {
    try { localStorage.setItem(KEY, JSON.stringify(v)); } catch { /* storage unavailable */ }
  };

  function showVotes() {
    const votes = loadVotes();
    const total = options.reduce((s, o) => s + (votes[o] || 0), 0);
    voteResults.innerHTML = "";
    if (!total) return;
    options.forEach((o) => {
      const n = votes[o] || 0;
      const pct = Math.round((n / total) * 100);
      const row = document.createElement("div");
      row.innerHTML = `<strong></strong> — ${n} vote${n === 1 ? "" : "s"} (${pct}%)<div class="bar"><span style="width:${pct}%"></span></div>`;
      row.querySelector("strong").textContent = o;
      voteResults.appendChild(row);
    });
  }

  if (voteForm) {
    voteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const choice = voteForm.querySelector('input[name="phone-vote"]:checked');
      if (!choice) return;
      const votes = loadVotes();
      votes[choice.value] = (votes[choice.value] || 0) + 1;
      saveVotes(votes);
      voteStatus.textContent = `Thanks! You voted for ${choice.value}. `;
      voteForm.reset();
      showVotes();
    });
    showVotes();
  }

  /* ---------- Newsletter ---------- */
  const signup = $("signup-form");
  if (signup) {
    signup.addEventListener("submit", (e) => {
      e.preventDefault();
      // Connect this to your email service (Mailchimp, Brevo, etc.) to collect real signups.
      signup.innerHTML = "<p>Thanks for signing up!</p>";
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNavigation = document.getElementById("mainNavigation");
  const siteHeader = document.getElementById("siteHeader");

  if (!menuToggle || !mainNavigation) {
    console.error("Menu toggle or navigation element was not found.");
    return;
  }

  function closeMenu() {
    menuToggle.classList.remove("active");
    mainNavigation.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNavigation.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  mainNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (
      !mainNavigation.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });

  function updateHeader() {
    siteHeader?.classList.toggle("scrolled", window.scrollY > 15);
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
});