# Prompt giao việc cho Gemini: Tạo ảnh bổ sung cho website Nông Sản Việt

Bạn là Gemini, hãy đóng vai trò Art Director + Image Generation Specialist. Nhiệm vụ của bạn là tạo bộ ảnh mới để bổ sung nội dung cho website landing page `Nông Sản Việt - Gạo hữu cơ ST25`.

## 1. Bối cảnh website

Website hiện tại là landing page HTML/CSS/JS cho thương hiệu gạo hữu cơ Việt Nam:

- Thương hiệu: Nông Sản Việt
- Sản phẩm chính: Gạo hữu cơ ST25 cao cấp
- Tinh thần: sạch, tự nhiên, cao cấp, đáng tin, giàu bản sắc Việt Nam
- Nội dung chính: câu chuyện từ đất mẹ Sóc Trăng, canh tác hữu cơ, sản phẩm gạo ST25, quy trình từ cánh đồng đến bàn ăn, dinh dưỡng, nhà máy đạt chuẩn ISO, khách hàng, liên hệ
- Khách hàng mục tiêu: gia đình Việt, người quan tâm sức khỏe, nhà hàng, đại lý phân phối, người mua gạo cao cấp

## 2. Phong cách hình ảnh cần giữ đồng nhất

Hãy tạo ảnh theo hướng:

- Premium Vietnamese organic agriculture
- Warm natural daylight, realistic commercial photography
- Màu chủ đạo: xanh lúa non, xanh rừng, vàng lúa chín, kem ấm
- Cảm giác: sạch, tươi, có chiều sâu, cao cấp nhưng gần gũi
- Ánh sáng: bình minh/hoàng hôn mềm, ánh nắng tự nhiên, không quá gắt
- Bố cục: có khoảng trống để đặt chữ khi cần, không quá rối
- Chất lượng: photorealistic, high-end product/brand photography, sharp details
- Không dùng emoji, không dùng icon hoạt hình, không tạo chữ/logo giả trong ảnh
- Không tạo watermark, không chèn text trực tiếp vào ảnh
- Tránh hình ảnh quá Tây; ưu tiên cảnh đồng lúa, con người, bữa cơm và nhà máy phù hợp Việt Nam

## 3. Kích thước và định dạng xuất ảnh

Tạo ảnh theo các nhóm sau, xuất dạng `.webp` nếu có thể, nếu không thì `.png` chất lượng cao:

- Hero/background: 1920x1080 hoặc 2400x1350, tỉ lệ 16:9
- Section/card/gallery: 1200x900, tỉ lệ 4:3
- Product/card image: 1000x1000, tỉ lệ 1:1, nền sạch
- Portrait/testimonial/lifestyle: 900x1200, tỉ lệ 3:4

Tên file nên dùng chữ thường, không dấu, cách nhau bằng dấu gạch ngang. Ví dụ: `st25-rice-premium-bowl.webp`.

## 4. Danh sách ảnh cần tạo

### Ảnh 1 - Hero mới cho đầu trang

Tên file: `hero-st25-organic-field.webp`

Prompt tạo ảnh:

```text
Photorealistic premium Vietnamese organic rice field in Soc Trang at sunrise, lush green ST25 rice paddies with golden morning light, soft mist, subtle water reflections, a few distant farmers in traditional conical hats, cinematic depth, clean natural atmosphere, warm green and gold palette, wide composition with empty space in the center for website headline, high-end agricultural brand photography, ultra detailed, 16:9, no text, no logo, no watermark
```

Mục đích dùng trên web: thay hoặc bổ sung nền hero hiện tại để tạo cảm giác cao cấp hơn và có khoảng trống đặt tiêu đề.

### Ảnh 2 - Sản phẩm ST25 cao cấp

Tên file: `st25-premium-rice-packaging.webp`

Prompt tạo ảnh:

```text
Photorealistic premium organic ST25 rice product packaging mockup on a warm cream background, elegant Vietnamese agricultural brand aesthetic, white and deep forest green rice bag, subtle gold accent, bowl of cooked fragrant rice beside it, raw long white rice grains scattered naturally, banana leaf and woven bamboo tray details, soft studio daylight, luxury clean product photography, square composition, no readable text, no fake logo, no watermark
```

Mục đích dùng trên web: ảnh sản phẩm flagship cho card `Gạo ST25 Organic` hoặc section sản phẩm nổi bật.

### Ảnh 3 - Bữa cơm gia đình Việt

Tên file: `vietnamese-family-rice-meal.webp`

Prompt tạo ảnh:

```text
Photorealistic warm Vietnamese family meal scene, steaming bowl of white fragrant rice at the center, healthy home-cooked Vietnamese dishes around it, natural wooden table, soft afternoon light through window, cozy family atmosphere with hands serving rice but faces not dominant, clean premium lifestyle photography, warm cream green and golden tones, authentic Vietnamese home, 4:3, no text, no logo, no watermark
```

Mục đích dùng trên web: bổ sung section lifestyle để kết nối sản phẩm với bữa cơm gia đình.

### Ảnh 4 - Cận cảnh hạt gạo ST25

Tên file: `st25-rice-grains-macro.webp`

Prompt tạo ảnh:

```text
Ultra realistic macro photography of premium ST25 long white rice grains, clean translucent grains, natural texture, soft directional light, shallow depth of field, warm cream background, a few grains on bamboo surface, elegant minimal composition, high-end food photography, crisp details, 4:3, no text, no logo, no watermark
```

Mục đích dùng trên web: dùng cho section chất lượng, dinh dưỡng hoặc làm nền card.

### Ảnh 5 - Nông dân thu hoạch hữu cơ

Tên file: `organic-rice-farmers-harvest.webp`

Prompt tạo ảnh:

```text
Photorealistic Vietnamese organic rice farmers harvesting mature golden rice in Soc Trang, farmers wearing conical hats and simple work clothes, natural candid moment, golden rice field, warm late afternoon sunlight, respectful documentary commercial style, optimistic sustainable agriculture mood, deep forest green and gold color palette, 4:3, no text, no logo, no watermark
```

Mục đích dùng trên web: bổ sung phần câu chuyện thương hiệu hoặc quy trình thu hoạch.

### Ảnh 6 - Quy trình sấy và xay xát hiện đại

Tên file: `modern-rice-processing-factory.webp`

Prompt tạo ảnh:

```text
Photorealistic modern rice processing factory interior in Vietnam, clean stainless steel machinery, rice grains moving through sorting and milling equipment, bright hygienic environment, workers in clean uniforms and hairnets checking quality, ISO food safety feeling, premium industrial agriculture photography, balanced green and warm highlights, 16:9, no text, no logo, no watermark
```

Mục đích dùng trên web: dùng cho section công nghệ/nhà máy, thay ảnh nhà máy nếu cần chuyên nghiệp hơn.

### Ảnh 7 - Kiểm định chất lượng

Tên file: `rice-quality-control-lab.webp`

Prompt tạo ảnh:

```text
Photorealistic quality control lab for premium organic rice, Vietnamese technician in clean lab coat examining ST25 rice grains under bright neutral light, glass containers with rice samples, clean modern laboratory, food safety certification atmosphere, trustworthy premium brand mood, shallow depth of field, 4:3, no text, no logo, no watermark
```

Mục đích dùng trên web: bổ sung nội dung về ISO 22000, HACCP, kiểm soát chất lượng.

### Ảnh 8 - Gạo lứt huyết rồng

Tên file: `red-brown-rice-healthy.webp`

Prompt tạo ảnh:

```text
Photorealistic healthy red brown rice product scene, deep red brown rice grains in ceramic bowl, cooked brown rice beside raw grains, natural linen cloth, wooden spoon, warm clean daylight, health and wellness food photography, earthy green cream and terracotta palette, square composition, no text, no logo, no watermark
```

Mục đích dùng trên web: thay ảnh card `Gạo lứt huyết rồng`, vì ảnh hiện tại đang dùng lại ảnh hero.

### Ảnh 9 - Gạo nếp nương đặc sản

Tên file: `sticky-rice-specialty.webp`

Prompt tạo ảnh:

```text
Photorealistic Vietnamese specialty sticky rice scene, plump glutinous rice grains in woven bamboo basket, small bowl of steamed sticky rice, banana leaf, rustic premium packaging mood, mountain rice specialty feeling without looking touristy, warm natural light, clean food photography, square composition, no text, no logo, no watermark
```

Mục đích dùng trên web: thay ảnh card `Gạo nếp nương`, vì ảnh hiện tại đang dùng ảnh cánh đồng.

### Ảnh 10 - Gallery vùng nguyên liệu

Tên file: `organic-rice-material-zone.webp`

Prompt tạo ảnh:

```text
Photorealistic aerial or elevated view of Vietnamese organic rice material zone, organized green rice paddies, irrigation channels, rural landscape in Soc Trang, soft golden sunlight, clean sustainable agriculture mood, high-end brand documentary photography, wide 16:9 composition, no text, no logo, no watermark
```

Mục đích dùng trên web: bổ sung gallery `Vùng nguyên liệu & nhà máy`.

### Ảnh 11 - Đại lý/nhà hàng dùng gạo ST25

Tên file: `restaurant-premium-rice-service.webp`

Prompt tạo ảnh:

```text
Photorealistic premium Vietnamese restaurant kitchen or serving counter, chef plating fragrant white rice in elegant ceramic bowl, clean professional environment, subtle Vietnamese culinary details, warm focused lighting, trustworthy B2B food service mood, premium commercial photography, 4:3, no text, no logo, no watermark
```

Mục đích dùng trên web: bổ sung bằng chứng xã hội cho khách nhà hàng/đại lý.

### Ảnh 12 - Background newsletter/footer

Tên file: `rice-pattern-warm-background.webp`

Prompt tạo ảnh:

```text
Elegant subtle background pattern made from rice grains and rice leaves, warm cream surface, minimal premium organic food brand aesthetic, soft shadows, low contrast, plenty of clean negative space, suitable for website newsletter or footer background, seamless feeling, 16:9, no text, no logo, no watermark
```

Mục đích dùng trên web: làm nền phụ cho newsletter, section khuyến mãi hoặc banner nhẹ.

## 5. Yêu cầu kiểm tra chất lượng trước khi trả ảnh

Vui lòng kiểm tra từng ảnh theo checklist:

- Không có chữ bị AI tạo sai, không có logo giả, không watermark
- Không bị méo tay, méo mặt, méo hạt gạo hoặc vật thể bất thường
- Tông màu đồng bộ với website: xanh tự nhiên, vàng lúa, kem ấm, nâu gỗ
- Ảnh đủ sáng, rõ chi tiết, không quá bão hòa
- Có thể dùng tốt trên mobile và desktop
- Hero/background phải có vùng trống để đặt chữ
- Ảnh sản phẩm/card phải có chủ thể rõ ràng, không rối nền

## 6. Kết quả cần bàn giao

Hãy trả về:

1. 12 file ảnh theo đúng tên đã đề xuất.
2. Nếu không thể xuất đúng định dạng `.webp`, hãy xuất `.png` hoặc `.jpg` chất lượng cao.
3. Một bảng ngắn mô tả từng ảnh gồm: tên file, kích thước, mục đích dùng trên website, ghi chú nếu cần chỉnh sửa.
4. Nếu ảnh nào chưa đạt checklist, hãy tạo lại trước khi bàn giao.

## 7. Ghi chú quan trọng

Không tự ý đổi phong cách sang dark mode, neon, hoạt hình 3D, fantasy hoặc stock-photo phương Tây. Website cần cảm giác nông sản Việt Nam cao cấp, sạch, thật và đáng tin.
