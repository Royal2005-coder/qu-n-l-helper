document.addEventListener('DOMContentLoaded', () => {

    // --- DATABASE ---
    // Mock Data based on the provided document
    const nhanVienData = [
        { MaNhanVien: 101, HoTen: 'Nguyễn Văn An', Anh: 'https://placehold.co/100x100/E2E8F0/4A5568?text=An', ChucVu: 'Nhân viên' },
        { MaNhanVien: 102, HoTen: 'Trần Thị Bích', Anh: 'https://placehold.co/100x100/E2E8F0/4A5568?text=Bich', ChucVu: 'Nhân viên' },
        { MaNhanVien: 103, HoTen: 'Lê Minh Cường', Anh: 'https://placehold.co/100x100/E2E8F0/4A5568?text=Cuong', ChucVu: 'Nhân viên cao cấp' },
        { MaNhanVien: 104, HoTen: 'Phạm Thị Dung', Anh: 'https://placehold.co/100x100/E2E8F0/4A5568?text=Dung', ChucVu: 'Nhân viên' },
        { MaNhanVien: 105, HoTen: 'Hoàng Văn Em', Anh: 'https://placehold.co/100x100/E2E8F0/4A5568?text=Em', ChucVu: 'Trưởng nhóm' },
    ];

    const khachHangData = [
        { MaKhachHang: 1, HoTen: 'Nguyễn Thị Lan Anh' }, { MaKhachHang: 2, HoTen: 'Trần Minh Hoàng' },
        { MaKhachHang: 3, HoTen: 'Lê Gia Bảo' }, { MaKhachHang: 4, HoTen: 'Phạm Ngọc Hân' },
        { MaKhachHang: 5, HoTen: 'Vũ Minh Đức' }, { MaKhachHang: 6, HoTen: 'Đặng Thu Trang' },
        { MaKhachHang: 7, HoTen: 'Bùi Anh Tuấn' },
    ];
    
    const lichLamViecData = [{MaLichLamViec:1,MaNhanVien:101,NgayLamViec:"2025-06-10",GioBatDau:"08:00:00",GioKetThuc:"12:00:00",TrangThai:"Trống",GhiChu:"Ca sáng sẵn sàng"},{MaLichLamViec:2,MaNhanVien:102,NgayLamViec:"2025-06-10",GioBatDau:"13:00:00",GioKetThuc:"17:00:00",TrangThai:"Đã Đặt",GhiChu:"Đơn hàng #DH001"},{MaLichLamViec:3,MaNhanVien:103,NgayLamViec:"2025-06-11",GioBatDau:"09:00:00",GioKetThuc:"18:00:00",TrangThai:"Trống",GhiChu:"Ca cả ngày"},{MaLichLamViec:4,MaNhanVien:101,NgayLamViec:"2025-06-12",GioBatDau:"07:00:00",GioKetThuc:"11:00:00",TrangThai:"Trống",GhiChu:"Ca sáng sớm"},{MaLichLamViec:5,MaNhanVien:104,NgayLamViec:"2025-06-12",GioBatDau:"14:00:00",GioKetThuc:"17:00:00",TrangThai:"Đã Đặt",GhiChu:"Đơn hàng #DH002"},{MaLichLamViec:6,MaNhanVien:105,NgayLamViec:"2025-06-13",GioBatDau:"08:30:00",GioKetThuc:"12:30:00",TrangThai:"Trống",GhiChu:"Ca sáng sẵn sàng"},{MaLichLamViec:7,MaNhanVien:102,NgayLamViec:"2025-06-13",GioBatDau:"10:00:00",GioKetThuc:"15:00:00",TrangThai:"Trống",GhiChu:"Ca giữa ngày"},{MaLichLamViec:8,MaNhanVien:103,NgayLamViec:"2025-06-14",GioBatDau:"09:00:00",GioKetThuc:"13:00:00",TrangThai:"Đã Đặt",GhiChu:"Đơn hàng #DH003"},{MaLichLamViec:9,MaNhanVien:101,NgayLamViec:"2025-06-15",GioBatDau:"13:00:00",GioKetThuc:"17:00:00",TrangThai:"Đã Hủy",GhiChu:"Khách hàng thay đổi lịch"},{MaLichLamViec:10,MaNhanVien:104,NgayLamViec:"2025-06-16",GioBatDau:"08:00:00",GioKetThuc:"12:00:00",TrangThai:"Trống",GhiChu:"Sẵn sàng dọn dẹp"},{MaLichLamViec:11,MaNhanVien:105,NgayLamViec:"2025-06-16",GioBatDau:"13:00:00",GioKetThuc:"17:00:00",TrangThai:"Đã Đặt",GhiChu:"Đơn hàng #DH004"},{MaLichLamViec:12,MaNhanVien:101,NgayLamViec:"2025-06-17",GioBatDau:"09:00:00",GioKetThuc:"13:00:00",TrangThai:"Trống",GhiChu:"Ca sáng trống"},{MaLichLamViec:13,MaNhanVien:102,NgayLamViec:"2025-06-17",GioBatDau:"14:00:00",GioKetThuc:"18:00:00",TrangThai:"Đã Đặt",GhiChu:"Đơn hàng #DH005"},{MaLichLamViec:14,MaNhanVien:103,NgayLamViec:"2025-06-18",GioBatDau:"08:00:00",GioKetThuc:"12:00:00",TrangThai:"Trống",GhiChu:"Ca nấu ăn"},{MaLichLamViec:15,MaNhanVien:104,NgayLamViec:"2025-06-18",GioBatDau:"13:00:00",GioKetThuc:"17:00:00",TrangThai:"Đã Đặt",GhiChu:"Đơn hàng #DH006"},{MaLichLamViec:16,MaNhanVien:101,NgayLamViec:"2025-06-19",GioBatDau:"09:00:00",GioKetThuc:"14:00:00",TrangThai:"Trống",GhiChu:"Ca chăm sóc trẻ em"},{MaLichLamViec:17,MaNhanVien:102,NgayLamViec:"2025-06-19",GioBatDau:"15:00:00",GioKetThuc:"19:00:00",TrangThai:"Trống",GhiChu:"Ca giặt là"},{MaLichLamViec:18,MaNhanVien:103,NgayLamViec:"2025-06-20",GioBatDau:"08:00:00",GioKetThuc:"12:00:00",TrangThai:"Đã Đặt",GhiChu:"Đơn hàng #DH007"},{MaLichLamViec:19,MaNhanVien:104,NgayLamViec:"2025-06-20",GioBatDau:"13:00:00",GioKetThuc:"17:00:00",TrangThai:"Trống",GhiChu:"Ca làm vườn"},{MaLichLamViec:20,MaNhanVien:105,NgayLamViec:"2025-06-21",GioBatDau:"09:00:00",GioKetThuc:"13:00:00",TrangThai:"Đã Hủy",GhiChu:"Khách hàng thay đổi lịch"},{MaLichLamViec:21,MaNhanVien:101,NgayLamViec:"2025-06-21",GioBatDau:"14:00:00",GioKetThuc:"18:00:00",TrangThai:"Trống",GhiChu:"Ca sửa chữa"},{MaLichLamViec:22,MaNhanVien:102,NgayLamViec:"2025-06-22",GioBatDau:"08:00:00",GioKetThuc:"12:00:00",TrangThai:"Đã Đặt",GhiChu:"Đơn hàng #DH008"},{MaLichLamViec:23,MaNhanVien:103,NgayLamViec:"2025-06-22",GioBatDau:"13:00:00",GioKetThuc:"17:00:00",TrangThai:"Trống",GhiChu:"Ca rửa xe"},{MaLichLamViec:24,MaNhanVien:104,NgayLamViec:"2025-06-23",GioBatDau:"09:00:00",GioKetThuc:"13:00:00",TrangThai:"Trống",GhiChu:"Ca chăm sóc thú cưng"},{MaLichLamViec:25,MaNhanVien:105,NgayLamViec:"2025-06-23",GioBatDau:"14:00:00",GioKetThuc:"18:00:00",TrangThai:"Đã Đặt",GhiChu:"Đơn hàng #DH009"},{MaLichLamViec:26,MaNhanVien:101,NgayLamViec:"2025-06-24",GioBatDau:"08:00:00",GioKetThuc:"12:00:00",TrangThai:"Trống",GhiChu:"Ca đi chợ"},{MaLichLamViec:27,MaNhanVien:102,NgayLamViec:"2025-06-24",GioBatDau:"13:00:00",GioKetThuc:"17:00:00",TrangThai:"Trống",GhiChu:"Ca dọn văn phòng"},{MaLichLamViec:28,MaNhanVien:103,NgayLamViec:"2025-06-25",GioBatDau:"09:00:00",GioKetThuc:"13:00:00",TrangThai:"Đã Đặt",GhiChu:"Đơn hàng #DH010"},{MaLichLamViec:29,MaNhanVien:104,NgayLamViec:"2025-06-25",GioBatDau:"14:00:00",GioKetThuc:"18:00:00",TrangThai:"Trống",GhiChu:"Ca trông nhà"},{MaLichLamViec:30,MaNhanVien:105,NgayLamViec:"2025-06-26",GioBatDau:"08:00:00",GioKetThuc:"12:00:00",TrangThai:"Trống",GhiChu:"Ca buổi sáng"},];
    const kyNangData = [{MaKyNang:1,TenKyNang:"Dọn dẹp nhà cửa",MoTaKyNang:"Lau chùi, hút bụi, sắp xếp đồ đạc, làm sạch bề mặt."},{MaKyNang:2,TenKyNang:"Nấu ăn",MoTaKyNang:"Chuẩn bị và nấu các món ăn theo yêu cầu, đảm bảo vệ sinh an toàn thực phẩm."},{MaKyNang:3,TenKyNang:"Chăm sóc trẻ em",MoTaKyNang:"Trông trẻ, cho ăn, chơi đùa, tắm rửa, thay tã."},{MaKyNang:4,TenKyNang:"Giặt là",MoTaKyNang:"Giặt, phơi, là ủi quần áo, phân loại đồ."},{MaKyNang:5,TenKyNang:"Chăm sóc người già",MoTaKyNang:"Hỗ trợ sinh hoạt hàng ngày, trò chuyện, nhắc nhở thuốc."},{MaKyNang:6,TenKyNang:"Làm vườn",MoTaKyNang:"Cắt tỉa cây cối, tưới nước, bón phân, dọn dẹp sân vườn."},{MaKyNang:7,TenKyNang:"Sửa chữa cơ bản",MoTaKyNang:"Sửa chữa nhỏ các thiết bị điện nước, đồ gia dụng."},{MaKyNang:8,TenKyNang:"Rửa xe",MoTaKyNang:"Vệ sinh bên trong và ngoài xe hơi, đánh bóng lốp."},{MaKyNang:9,TenKyNang:"Chăm sóc thú cưng",MoTaKyNang:"Cho ăn, dắt đi dạo, vệ sinh chuồng/khu vực thú cưng."},{MaKyNang:10,TenKyNang:"Đi chợ/Mua sắm",MoTaKyNang:"Mua sắm nhu yếu phẩm, thực phẩm theo danh sách."},{MaKyNang:11,TenKyNang:"Dọn dẹp văn phòng",MoTaKyNang:"Lau dọn bàn ghế, thiết bị, sàn nhà văn phòng."},{MaKyNang:12,TenKyNang:"Trông nhà",MoTaKyNang:"Giữ nhà, kiểm tra an ninh, tưới cây khi chủ vắng."},{MaKyNang:13,TenKyNang:"Thú cưng",MoTaKyNang:"Chăm sóc, dắt đi dạo thú cưng."},{MaKyNang:14,TenKyNang:"Quản lý tài sản",MoTaKyNang:"Kiểm kê và sắp xếp tài sản gia đình."},{MaKyNang:15,TenKyNang:"Hỗ trợ sự kiện",MoTaKyNang:"Hỗ trợ chuẩn bị và dọn dẹp cho các sự kiện nhỏ."},];
    const kyNangNhanVienData = [{MaKyNangNhanVien:1,MaNhanVien:101,MaKyNang:1,MucDoThanhThao:"Nâng cao"},{MaKyNangNhanVien:2,MaNhanVien:101,MaKyNang:2,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:3,MaNhanVien:102,MaKyNang:1,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:4,MaNhanVien:102,MaKyNang:3,MucDoThanhThao:"Nâng cao"},{MaKyNangNhanVien:5,MaNhanVien:103,MaKyNang:4,MucDoThanhThao:"Nâng cao"},{MaKyNangNhanVien:6,MaNhanVien:103,MaKyNang:1,MucDoThanhThao:"Sơ cấp"},{MaKyNangNhanVien:7,MaNhanVien:104,MaKyNang:2,MucDoThanhThao:"Nâng cao"},{MaKyNangNhanVien:8,MaNhanVien:104,MaKyNang:5,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:9,MaNhanVien:105,MaKyNang:1,MucDoThanhThao:"Nâng cao"},{MaKyNangNhanVien:10,MaNhanVien:105,MaKyNang:4,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:11,MaNhanVien:101,MaKyNang:6,MucDoThanhThao:"Sơ cấp"},{MaKyNangNhanVien:12,MaNhanVien:102,MaKyNang:7,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:13,MaNhanVien:103,MaKyNang:8,MucDoThanhThao:"Nâng cao"},{MaKyNangNhanVien:14,MaNhanVien:104,MaKyNang:9,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:15,MaNhanVien:105,MaKyNang:10,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:16,MaNhanVien:101,MaKyNang:11,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:17,MaNhanVien:102,MaKyNang:12,MucDoThanhThao:"Sơ cấp"},{MaKyNangNhanVien:18,MaNhanVien:103,MaKyNang:5,MucDoThanhThao:"Sơ cấp"},{MaKyNangNhanVien:19,MaNhanVien:104,MaKyNang:1,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:20,MaNhanVien:105,MaKyNang:2,MucDoThanhThao:"Sơ cấp"},{MaKyNangNhanVien:21,MaNhanVien:101,MaKyNang:13,MucDoThanhThao:"Nâng cao"},{MaKyNangNhanVien:22,MaNhanVien:102,MaKyNang:14,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:23,MaNhanVien:103,MaKyNang:15,MucDoThanhThao:"Sơ cấp"},{MaKyNangNhanVien:24,MaNhanVien:104,MaKyNang:3,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:25,MaNhanVien:105,MaKyNang:6,MucDoThanhThao:"Nâng cao"},{MaKyNangNhanVien:26,MaNhanVien:101,MaKyNang:7,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:27,MaNhanVien:102,MaKyNang:8,MucDoThanhThao:"Nâng cao"},{MaKyNangNhanVien:28,MaNhanVien:103,MaKyNang:9,MucDoThanhThao:"Trung cấp"},{MaKyNangNhanVien:29,MaNhanVien:104,MaKyNang:10,MucDoThanhThao:"Sơ cấp"},{MaKyNangNhanVien:30,MaNhanVien:105,MaKyNang:11,MucDoThanhThao:"Trung cấp"},];
    const dichVuData = [{MaDichVu:1,TenDichVu:"Dọn dẹp theo giờ",MoTaDichVu:"Dịch vụ vệ sinh nhà cửa tính theo giờ.",GiaCoBan:100000,DonViTinh:"Giờ"},{MaDichVu:2,TenDichVu:"Nấu ăn gia đình",MoTaDichVu:"Dịch vụ chuẩn bị các bữa ăn gia đình.",GiaCoBan:250000,DonViTinh:"Bữa"},{MaDichVu:3,TenDichVu:"Chăm sóc em bé",MoTaDichVu:"Dịch vụ trông nom và chăm sóc trẻ nhỏ.",GiaCoBan:150000,DonViTinh:"Giờ"},{MaDichVu:4,TenDichVu:"Giặt ủi",MoTaDichVu:"Dịch vụ giặt, phơi, là ủi quần áo.",GiaCoBan:80000,DonViTinh:"Kg"},{MaDichVu:5,TenDichVu:"Tổng vệ sinh nhà cửa",MoTaDichVu:"Dịch vụ làm sạch tổng thể toàn bộ căn nhà.",GiaCoBan:500000,DonViTinh:"Lần"},{MaDichVu:6,TenDichVu:"Chăm sóc người cao tuổi",MoTaDichVu:"Dịch vụ hỗ trợ và bầu bạn với người già.",GiaCoBan:180000,DonViTinh:"Giờ"},{MaDichVu:7,TenDichVu:"Dọn dẹp văn phòng",MoTaDichVu:"Dịch vụ vệ sinh và sắp xếp không gian làm việc.",GiaCoBan:120000,DonViTinh:"Giờ"},{MaDichVu:8,TenDichVu:"Nấu ăn tiệc",MoTaDichVu:"Dịch vụ nấu ăn cho các buổi tiệc, sự kiện nhỏ.",GiaCoBan:350000,DonViTinh:"Bữa"},{MaDichVu:9,TenDichVu:"Chăm sóc thú cưng",MoTaDichVu:"Dịch vụ cho ăn, dắt đi dạo và vệ sinh cho thú cưng.",GiaCoBan:120000,DonViTinh:"Lần"},{MaDichVu:10,TenDichVu:"Sửa chữa gia dụng cơ bản",MoTaDichVu:"Dịch vụ sửa chữa nhỏ các thiết bị trong nhà.",GiaCoBan:150000,DonViTinh:"Lần"},{MaDichVu:11,TenDichVu:"Đi chợ hộ",MoTaDichVu:"Dịch vụ mua sắm nhu yếu phẩm theo yêu cầu.",GiaCoBan:70000,DonViTinh:"Lần"},{MaDichVu:12,TenDichVu:"Dịch vụ trông nhà",MoTaDichVu:"Dịch vụ giữ nhà, kiểm tra an ninh khi chủ vắng mặt.",GiaCoBan:200000,DonViTinh:"Ngày"},{MaDichVu:13,TenDichVu:"Rửa chén đĩa",MoTaDichVu:"Rửa và sắp xếp chén đĩa, dụng cụ nhà bếp.",GiaCoBan:50000,DonViTinh:"Lần"},{MaDichVu:14,TenDichVu:"Vệ sinh sofa/thảm",MoTaDichVu:"Làm sạch sâu sofa, thảm bằng máy chuyên dụng.",GiaCoBan:300000,DonViTinh:"Lần"},{MaDichVu:15,TenDichVu:"Hỗ trợ di chuyển",MoTaDichVu:"Hỗ trợ đóng gói, sắp xếp đồ đạc khi chuyển nhà.",GiaCoBan:400000,DonViTinh:"Lần"},{MaDichVu:16,TenDichVu:"Lau kính cửa sổ",MoTaDichVu:"Lau sạch kính cửa sổ bên trong và bên ngoài.",GiaCoBan:100000,DonViTinh:"m2"},{MaDichVu:17,TenDichVu:"Vệ sinh tủ lạnh",MoTaDichVu:"Làm sạch và sắp xếp thực phẩm trong tủ lạnh.",GiaCoBan:80000,DonViTinh:"Lần"},{MaDichVu:18,TenDichVu:"Đánh bóng sàn nhà",MoTaDichVu:"Đánh bóng và làm sạch sàn nhà bằng máy.",GiaCoBan:200000,DonViTinh:"m2"},{MaDichVu:19,TenDichVu:"Dịch vụ giao hàng",MoTaDichVu:"Giao nhận các bưu kiện, hàng hóa nhỏ.",GiaCoBan:40000,DonViTinh:"Lần"},{MaDichVu:20,TenDichVu:"Trợ lý cá nhân",MoTaDichVu:"Hỗ trợ các công việc cá nhân, đặt lịch hẹn.",GiaCoBan:200000,DonViTinh:"Giờ"},];
    const donHangData = [{MaDonHang:1,MaKhachHang:1,MaNhanVien:102,MaDichVu:5,NgayDatHang:"2025-06-08",GioBatDau:"09:00:00",GioKetThuc:"17:00:00",DiaChiDichVu:"123 Lê Lợi, Q.1, TP.HCM",TongTien:500000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Cần tổng vệ sinh nhà 3 phòng."},{MaDonHang:2,MaKhachHang:2,MaNhanVien:101,MaDichVu:1,NgayDatHang:"2025-06-08",GioBatDau:"08:00:00",GioKetThuc:"12:00:00",DiaChiDichVu:"45 Nguyễn Huệ, Q.1, TP.HCM",TongTien:400000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Dọn dẹp định kỳ."},{MaDonHang:3,MaKhachHang:3,MaNhanVien:104,MaDichVu:3,NgayDatHang:"2025-06-09",GioBatDau:"10:00:00",GioKetThuc:"14:00:00",DiaChiDichVu:"78 Điện Biên Phủ, Q.Bình Thạnh",TongTien:600000,TrangThaiDonHang:"Chờ xác nhận",GhiChu:"Chăm sóc bé 6 tháng tuổi."},{MaDonHang:4,MaKhachHang:1,MaNhanVien:null,MaDichVu:2,NgayDatHang:"2025-06-09",GioBatDau:"18:00:00",GioKetThuc:"20:00:00",DiaChiDichVu:"123 Lê Lợi, Q.1, TP.HCM",TongTien:250000,TrangThaiDonHang:"Chờ xác nhận",GhiChu:"Nấu bữa tối cho 4 người."},{MaDonHang:5,MaKhachHang:4,MaNhanVien:103,MaDichVu:4,NgayDatHang:"2025-06-10",GioBatDau:"09:00:00",GioKetThuc:"10:00:00",DiaChiDichVu:"20 Bến Nghé, Q.1, TP.HCM",TongTien:160000,TrangThaiDonHang:"Đã hoàn thành",GhiChu:"Giặt ủi 2 bộ quần áo."},{MaDonHang:6,MaKhachHang:5,MaNhanVien:105,MaDichVu:6,NgayDatHang:"2025-06-10",GioBatDau:"13:00:00",GioKetThuc:"16:00:00",DiaChiDichVu:"88 Trường Sa, Q.Bình Thạnh",TongTien:540000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Chăm sóc cụ ông 80 tuổi."},{MaDonHang:7,MaKhachHang:2,MaNhanVien:101,MaDichVu:1,NgayDatHang:"2025-06-11",GioBatDau:"14:00:00",GioKetThuc:"17:00:00",DiaChiDichVu:"45 Nguyễn Huệ, Q.1, TP.HCM",TongTien:300000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Dọn dẹp phòng khách và bếp."},{MaDonHang:8,MaKhachHang:6,MaNhanVien:102,MaDichVu:7,NgayDatHang:"2025-06-11",GioBatDau:"08:00:00",GioKetThuc:"12:00:00",DiaChiDichVu:"34 Ngô Gia Tự, Q.10, TP.HCM",TongTien:480000,TrangThaiDonHang:"Đã hoàn thành",GhiChu:"Vệ sinh văn phòng làm việc."},{MaDonHang:9,MaKhachHang:7,MaNhanVien:104,MaDichVu:8,NgayDatHang:"2025-06-12",GioBatDau:"19:00:00",GioKetThuc:"22:00:00",DiaChiDichVu:"56 Lý Thường Kiệt, Q.10, TP.HCM",TongTien:350000,TrangThaiDonHang:"Chờ xác nhận",GhiChu:"Nấu tiệc sinh nhật nhỏ."},{MaDonHang:10,MaKhachHang:3,MaNhanVien:103,MaDichVu:9,NgayDatHang:"2025-06-12",GioBatDau:"09:00:00",GioKetThuc:"10:00:00",DiaChiDichVu:"78 Điện Biên Phủ, Q.Bình Thạnh",TongTien:120000,TrangThaiDonHang:"Đã hoàn thành",GhiChu:"Chăm sóc mèo cưng."},{MaDonHang:11,MaKhachHang:1,MaNhanVien:105,MaDichVu:10,NgayDatHang:"2025-06-13",GioBatDau:"08:00:00",GioKetThuc:"10:00:00",DiaChiDichVu:"123 Lê Lợi, Q.1, TP.HCM",TongTien:150000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Sửa vòi nước bị rò rỉ."},{MaDonHang:12,MaKhachHang:4,MaNhanVien:null,MaDichVu:11,NgayDatHang:"2025-06-13",GioBatDau:"10:00:00",GioKetThuc:"11:00:00",DiaChiDichVu:"20 Bến Nghé, Q.1, TP.HCM",TongTien:70000,TrangThaiDonHang:"Chờ xác nhận",GhiChu:"Mua sắm rau củ quả."},{MaDonHang:13,MaKhachHang:5,MaNhanVien:101,MaDichVu:12,NgayDatHang:"2025-06-14",GioBatDau:"09:00:00",GioKetThuc:"17:00:00",DiaChiDichVu:"88 Trường Sa, Q.Bình Thạnh",TongTien:200000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Trông nhà và tưới cây."},{MaDonHang:14,MaKhachHang:6,MaNhanVien:102,MaDichVu:1,NgayDatHang:"2025-06-14",GioBatDau:"13:00:00",GioKetThuc:"16:00:00",DiaChiDichVu:"34 Ngô Gia Tự, Q.10, TP.HCM",TongTien:300000,TrangThaiDonHang:"Đã hủy",GhiChu:"Khách hàng thay đổi lịch đột xuất."},{MaDonHang:15,MaKhachHang:7,MaNhanVien:103,MaDichVu:3,NgayDatHang:"2025-06-15",GioBatDau:"10:00:00",GioKetThuc:"12:00:00",DiaChiDichVu:"56 Lý Thường Kiệt, Q.10, TP.HCM",TongTien:300000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Chăm sóc bé 3 tuổi."},{MaDonHang:16,MaKhachHang:1,MaNhanVien:104,MaDichVu:4,NgayDatHang:"2025-06-15",GioBatDau:"15:00:00",GioKetThuc:"16:00:00",DiaChiDichVu:"123 Lê Lợi, Q.1, TP.HCM",TongTien:80000,TrangThaiDonHang:"Chờ xác nhận",GhiChu:"Giặt ủi 1 túi đồ."},{MaDonHang:17,MaKhachHang:2,MaNhanVien:105,MaDichVu:5,NgayDatHang:"2025-06-16",GioBatDau:"09:00:00",GioKetThuc:"17:00:00",DiaChiDichVu:"45 Nguyễn Huệ, Q.1, TP.HCM",TongTien:500000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Tổng vệ sinh sau tiệc."},{MaDonHang:18,MaKhachHang:3,MaNhanVien:101,MaDichVu:13,NgayDatHang:"2025-06-17",GioBatDau:"10:00:00",GioKetThuc:"11:00:00",DiaChiDichVu:"78 Điện Biên Phủ, Q.Bình Thạnh",TongTien:50000,TrangThaiDonHang:"Đã hoàn thành",GhiChu:"Rửa chén đĩa sau bữa sáng."},{MaDonHang:19,MaKhachHang:4,MaNhanVien:102,MaDichVu:14,NgayDatHang:"2025-06-18",GioBatDau:"13:00:00",GioKetThuc:"16:00:00",DiaChiDichVu:"20 Bến Nghé, Q.1, TP.HCM",TongTien:300000,TrangThaiDonHang:"Chờ xác nhận",GhiChu:"Vệ sinh sofa phòng khách."},{MaDonHang:20,MaKhachHang:5,MaNhanVien:103,MaDichVu:15,NgayDatHang:"2025-06-19",GioBatDau:"08:00:00",GioKetThuc:"17:00:00",DiaChiDichVu:"88 Trường Sa, Q.Bình Thạnh",TongTien:400000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Hỗ trợ đóng gói chuyển nhà."},{MaDonHang:21,MaKhachHang:6,MaNhanVien:104,MaDichVu:16,NgayDatHang:"2025-06-20",GioBatDau:"09:00:00",GioKetThuc:"11:00:00",DiaChiDichVu:"34 Ngô Gia Tự, Q.10, TP.HCM",TongTien:200000,TrangThaiDonHang:"Đã hoàn thành",GhiChu:"Lau kính ban công."},{MaDonHang:22,MaKhachHang:7,MaNhanVien:105,MaDichVu:17,NgayDatHang:"2025-06-21",GioBatDau:"14:00:00",GioKetThuc:"15:00:00",DiaChiDichVu:"56 Lý Thường Kiệt, Q.10, TP.HCM",TongTien:80000,TrangThaiDonHang:"Chờ xác nhận",GhiChu:"Vệ sinh tủ lạnh."},{MaDonHang:23,MaKhachHang:1,MaNhanVien:101,MaDichVu:18,NgayDatHang:"2025-06-22",GioBatDau:"10:00:00",GioKetThuc:"12:00:00",DiaChiDichVu:"123 Lê Lợi, Q.1, TP.HCM",TongTien:400000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Đánh bóng sàn gỗ phòng khách."},{MaDonHang:24,MaKhachHang:2,MaNhanVien:102,MaDichVu:19,NgayDatHang:"2025-06-23",GioBatDau:"08:00:00",GioKetThuc:"09:00:00",DiaChiDichVu:"45 Nguyễn Huệ, Q.1, TP.HCM",TongTien:40000,TrangThaiDonHang:"Đã hoàn thành",GhiChu:"Giao tài liệu đến công ty."},{MaDonHang:25,MaKhachHang:3,MaNhanVien:103,MaDichVu:20,NgayDatHang:"2025-06-24",GioBatDau:"13:00:00",GioKetThuc:"15:00:00",DiaChiDichVu:"78 Điện Biên Phủ, Q.Bình Thạnh",TongTien:400000,TrangThaiDonHang:"Chờ xác nhận",GhiChu:"Trợ lý sắp xếp lịch hẹn."},{MaDonHang:26,MaKhachHang:4,MaNhanVien:104,MaDichVu:1,NgayDatHang:"2025-06-25",GioBatDau:"09:00:00",GioKetThuc:"13:00:00",DiaChiDichVu:"20 Bến Nghé, Q.1, TP.HCM",TongTien:400000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Dọn dẹp nhà sau buổi tiệc."},{MaDonHang:27,MaKhachHang:5,MaNhanVien:105,MaDichVu:2,NgayDatHang:"2025-06-26",GioBatDau:"18:00:00",GioKetThuc:"20:00:00",DiaChiDichVu:"88 Trường Sa, Q.Bình Thạnh",TongTien:250000,TrangThaiDonHang:"Chờ xác nhận",GhiChu:"Nấu ăn tối kiểu Ý."},{MaDonHang:28,MaKhachHang:6,MaNhanVien:101,MaDichVu:3,NgayDatHang:"2025-06-27",GioBatDau:"10:00:00",GioKetThuc:"14:00:00",DiaChiDichVu:"34 Ngô Gia Tự, Q.10, TP.HCM",TongTien:600000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Chăm sóc bé sơ sinh."},{MaDonHang:29,MaKhachHang:7,MaNhanVien:102,MaDichVu:4,NgayDatHang:"2025-06-28",GioBatDau:"09:00:00",GioKetThuc:"10:30:00",DiaChiDichVu:"56 Lý Thường Kiệt, Q.10, TP.HCM",TongTien:120000,TrangThaiDonHang:"Chờ xác nhận",GhiChu:"Giặt ủi quần áo trẻ em."},{MaDonHang:30,MaKhachHang:1,MaNhanVien:103,MaDichVu:5,NgayDatHang:"2025-06-29",GioBatDau:"09:00:00",GioKetThuc:"17:00:00",DiaChiDichVu:"123 Lê Lợi, Q.1, TP.HCM",TongTien:500000,TrangThaiDonHang:"Đang xử lý",GhiChu:"Tổng vệ sinh định kỳ hàng tháng."}];
    
    // --- UTILITY FUNCTIONS ---
    const formatCurrency = (amount) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    
    const createLookup = (data, key) => data.reduce((acc, item) => {
        acc[item[key]] = item;
        return acc;
    }, {});
    
    const nhanVienLookup = createLookup(nhanVienData, 'MaNhanVien');
    const khachHangLookup = createLookup(khachHangData, 'MaKhachHang');
    const dichVuLookup = createLookup(dichVuData, 'MaDichVu');
    const kyNangLookup = createLookup(kyNangData, 'MaKyNang');


    // --- UI ELEMENTS ---
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const menuButton = document.getElementById('menu-button');
    const pageTitle = document.getElementById('page-title');
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    // --- NAVIGATION LOGIC ---
    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            navLinks.forEach(l => l.classList.remove('active', 'bg-blue-100', 'font-semibold'));
            link.classList.add('active', 'bg-blue-100', 'font-semibold');

            pages.forEach(page => {
                if (page.id === targetId) {
                    page.classList.remove('hidden');
                    page.classList.add('active');
                } else {
                    page.classList.add('hidden');
                    page.classList.remove('active');
                }
            });
            pageTitle.textContent = link.querySelector('span').textContent;
            
            if (window.innerWidth < 768) {
                sidebar.classList.add('-translate-x-full');
            }
        });
    });

    // --- PAGE INITIALIZATION ---
    function initTongQuan() {
        // KPI Cards
        document.getElementById('total-orders').textContent = donHangData.length;
        const totalRevenue = donHangData.reduce((sum, order) => sum + (order.TrangThaiDonHang === 'Đã hoàn thành' ? order.TongTien : 0), 0);
        document.getElementById('total-revenue').textContent = formatCurrency(totalRevenue);
        document.getElementById('active-staff').textContent = nhanVienData.length;
        const pendingOrders = donHangData.filter(order => order.TrangThaiDonHang === 'Chờ xác nhận').length;
        document.getElementById('pending-orders').textContent = pendingOrders;

        // Revenue Chart
        const monthlyRevenue = donHangData.reduce((acc, order) => {
            if (order.TrangThaiDonHang === 'Đã hoàn thành') {
                const month = new Date(order.NgayDatHang).getMonth(); // 0 = Jan, 1 = Feb, etc.
                acc[month] = (acc[month] || 0) + order.TongTien;
            }
            return acc;
        }, {});

        const revenueChartCtx = document.getElementById('revenueChart').getContext('2d');
        new Chart(revenueChartCtx, {
            type: 'line',
            data: {
                labels: ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'],
                datasets: [{
                    label: 'Doanh thu',
                    data: Array.from({ length: 12 }, (_, i) => monthlyRevenue[i] || 0),
                    borderColor: '#3B82F6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                           callback: function(value) {
                                return value / 1000000 + ' Tr';
                            }
                        }
                    }
                }
            }
        });

        // Popular Services Chart
        const serviceCounts = donHangData.reduce((acc, order) => {
            const serviceName = dichVuLookup[order.MaDichVu]?.TenDichVu || 'Không rõ';
            acc[serviceName] = (acc[serviceName] || 0) + 1;
            return acc;
        }, {});

        const sortedServices = Object.entries(serviceCounts).sort(([,a],[,b]) => b-a).slice(0, 5);
        
        const servicesChartCtx = document.getElementById('servicesChart').getContext('2d');
        new Chart(servicesChartCtx, {
            type: 'doughnut',
            data: {
                labels: sortedServices.map(s => s[0]),
                datasets: [{
                    label: 'Số đơn hàng',
                    data: sortedServices.map(s => s[1]),
                    backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    }

    function initLichLamViec() {
        const datePicker = document.getElementById('date-picker');
        const employeeFilter = document.getElementById('employee-filter');
        const canvas = document.getElementById('scheduleCanvas');
        const ctx = canvas.getContext('2d');
        const scheduleList = document.getElementById('schedule-list');

        // Populate employee filter
        nhanVienData.forEach(nv => {
            const option = document.createElement('option');
            option.value = nv.MaNhanVien;
            option.textContent = nv.HoTen;
            employeeFilter.appendChild(option);
        });

        // Set today's date
        const today = new Date('2025-06-10').toISOString().split('T')[0];
        datePicker.value = today;

        function drawSchedule() {
            const selectedDate = datePicker.value;
            const selectedEmployee = employeeFilter.value;
            
            const filteredSchedule = lichLamViecData.filter(item => {
                const dateMatch = item.NgayLamViec === selectedDate;
                const employeeMatch = selectedEmployee === 'all' || item.MaNhanVien == selectedEmployee;
                return dateMatch && employeeMatch;
            });
            
            // Render list details
            scheduleList.innerHTML = '';
            if (filteredSchedule.length === 0) {
                 scheduleList.innerHTML = `<li class="text-gray-500 italic">Không có lịch làm việc cho ngày này.</li>`;
            } else {
                filteredSchedule.forEach(item => {
                    const li = document.createElement('li');
                    li.className = 'p-3 bg-gray-50 rounded-lg flex justify-between items-center';
                    li.innerHTML = `
                        <div>
                            <p class="font-semibold text-gray-800">${nhanVienLookup[item.MaNhanVien]?.HoTen || 'N/A'}</p>
                            <p class="text-sm text-gray-600">${item.GioBatDau.slice(0,5)} - ${item.GioKetThuc.slice(0,5)}</p>
                        </div>
                        <span class="px-3 py-1 text-xs font-medium rounded-full ${
                            item.TrangThai === 'Đã Đặt' ? 'bg-blue-100 text-blue-800' :
                            item.TrangThai === 'Trống' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }">${item.TrangThai}</span>`;
                    scheduleList.appendChild(li);
                });
            }

            // Render canvas
            const parent = canvas.parentElement;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const startHour = 6;
            const endHour = 22;
            const totalHours = endHour - startHour;
            const hourWidth = canvas.width / totalHours;

            // Draw time labels
            ctx.font = '12px Inter';
            ctx.fillStyle = '#6B7280';
            for (let i = 0; i <= totalHours; i++) {
                const hour = startHour + i;
                const x = i * hourWidth;
                ctx.fillText(`${hour}:00`, x, canvas.height - 10);
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height - 30);
                ctx.strokeStyle = '#E5E7EB';
                ctx.stroke();
            }

            // Draw schedule bars
            const barHeight = 40;
            const yPositions = {};
            let currentY = 20;

            filteredSchedule.forEach(item => {
                const start = parseInt(item.GioBatDau.split(':')[0]) + parseInt(item.GioBatDau.split(':')[1]) / 60;
                const end = parseInt(item.GioKetThuc.split(':')[0]) + parseInt(item.GioKetThuc.split(':')[1]) / 60;

                const x = (start - startHour) * hourWidth;
                const width = (end - start) * hourWidth;
                
                let y;
                if (!yPositions[item.MaNhanVien]) {
                     yPositions[item.MaNhanVien] = currentY;
                     currentY += barHeight + 10;
                }
                y = yPositions[item.MaNhanVien];
                
                if (y > canvas.height - 60) return;

                ctx.fillStyle = item.TrangThai === 'Đã Đặt' ? 'rgba(96, 165, 250, 0.8)' : 
                                item.TrangThai === 'Trống' ? 'rgba(52, 211, 153, 0.8)' : 'rgba(248, 113, 113, 0.8)';
                ctx.fillRect(x, y, width, barHeight);
                
                ctx.fillStyle = '#FFFFFF';
                ctx.font = 'bold 12px Inter';
                const employeeName = nhanVienLookup[item.MaNhanVien]?.HoTen.split(' ').pop() || '';
                const timeText = `${item.GioBatDau.slice(0,5)}-${item.GioKetThuc.slice(0,5)}`;
                ctx.fillText(`${employeeName} (${timeText})`, x + 10, y + barHeight / 2 + 5);
            });
        }
        
        datePicker.addEventListener('change', drawSchedule);
        employeeFilter.addEventListener('change', drawSchedule);
        new ResizeObserver(drawSchedule).observe(canvas.parentElement);
        
        drawSchedule();
    }
    
    function initDonHang() {
        const tableBody = document.getElementById('orders-table-body');
        const searchInput = document.getElementById('order-search');

        function renderTable(data) {
            tableBody.innerHTML = '';
            data.forEach(order => {
                const row = document.createElement('tr');
                row.className = 'bg-white border-b hover:bg-gray-50';
                
                const statusColor = order.TrangThaiDonHang === 'Đã hoàn thành' ? 'bg-green-100 text-green-800' :
                                    order.TrangThaiDonHang === 'Đang xử lý' ? 'bg-yellow-100 text-yellow-800' :
                                    order.TrangThaiDonHang === 'Chờ xác nhận' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800';
                
                row.innerHTML = `
                    <td class="px-6 py-4 font-medium text-gray-900">#${order.MaDonHang}</td>
                    <td class="px-6 py-4">${khachHangLookup[order.MaKhachHang]?.HoTen || 'N/A'}</td>
                    <td class="px-6 py-4">${nhanVienLookup[order.MaNhanVien]?.HoTen || '<i class="text-gray-400">Chưa phân công</i>'}</td>
                    <td class="px-6 py-4">${dichVuLookup[order.MaDichVu]?.TenDichVu || 'N/A'}</td>
                    <td class="px-6 py-4">${order.NgayDatHang}</td>
                    <td class="px-6 py-4 font-semibold">${formatCurrency(order.TongTien)}</td>
                    <td class="px-6 py-4">
                        <span class="px-2 py-1 text-xs font-medium rounded-full ${statusColor}">${order.TrangThaiDonHang}</span>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }
        
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredData = donHangData.filter(order => 
                `#${order.MaDonHang}`.includes(searchTerm) ||
                (khachHangLookup[order.MaKhachHang]?.HoTen || '').toLowerCase().includes(searchTerm) ||
                (nhanVienLookup[order.MaNhanVien]?.HoTen || '').toLowerCase().includes(searchTerm) ||
                (dichVuLookup[order.MaDichVu]?.TenDichVu || '').toLowerCase().includes(searchTerm)
            );
            renderTable(filteredData);
        });

        renderTable(donHangData);
    }
    
    function initNhanVien() {
        const staffListContainer = document.getElementById('staff-list');
        staffListContainer.innerHTML = '';
        nhanVienData.forEach(staff => {
            const card = document.createElement('div');
            card.className = 'bg-white p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition duration-300';
            
            const staffSkills = kyNangNhanVienData.filter(s => s.MaNhanVien === staff.MaNhanVien)
                .map(s => kyNangLookup[s.MaKyNang]?.TenKyNang)
                .slice(0, 3) // Show max 3 skills
                .map(skillName => `<span class="bg-gray-200 text-gray-700 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">${skillName}</span>`)
                .join('');

            card.innerHTML = `
                <div class="flex flex-col items-center text-center">
                    <img src="${staff.Anh}" alt="${staff.HoTen}" class="w-24 h-24 rounded-full mb-4 object-cover shadow-md">
                    <h3 class="text-lg font-bold text-gray-900">${staff.HoTen}</h3>
                    <p class="text-sm text-blue-600 font-medium">${staff.ChucVu}</p>
                    <div class="mt-4 pt-4 border-t w-full">
                         <h4 class="font-semibold text-sm text-gray-600 mb-2">Kỹ năng chính</h4>
                         <div class="flex flex-wrap justify-center gap-2">
                            ${staffSkills || '<i class="text-gray-400">Chưa có kỹ năng</i>'}
                         </div>
                    </div>
                </div>
            `;
            staffListContainer.appendChild(card);
        });
    }

    function initDichVu() {
        const servicesListContainer = document.getElementById('services-list');
        servicesListContainer.innerHTML = '';
        dichVuData.forEach(service => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-sm overflow-hidden transform hover:shadow-xl transition duration-300';
            
            const icons = {
                1: 'fa-broom', 2: 'fa-utensils', 3: 'fa-baby', 4: 'fa-tshirt',
                5: 'fa-home', 6: 'fa-user-friends', 7: 'fa-briefcase', 8: 'fa-birthday-cake',
                9: 'fa-paw', 10: 'fa-tools', 11: 'fa-shopping-cart', 12: 'fa-key',
                13: 'fa-soap', 14: 'fa-couch', 15: 'fa-box-open', 16: 'fa-window-maximize',
                17: 'fa-snowflake', 18: 'fa-paint-roller', 19: 'fa-shipping-fast', 20: 'fa-user-tie'
            };
            const iconClass = icons[service.MaDichVu] || 'fa-hand-sparkles';
            
            card.innerHTML = `
                <div class="p-6">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                           <i class="fas ${iconClass} text-xl text-blue-600"></i>
                        </div>
                        <div>
                             <h3 class="text-lg font-bold text-gray-900">${service.TenDichVu}</h3>
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 mb-4 h-10">${service.MoTaDichVu}</p>
                    <div class="text-right">
                        <span class="text-xl font-bold text-blue-600">${formatCurrency(service.GiaCoBan)}</span>
                        <span class="text-sm text-gray-500">/${service.DonViTinh}</span>
                    </div>
                </div>
            `;
            servicesListContainer.appendChild(card);
        });
    }

    function initKyNang() {
        const tableBody = document.getElementById('skills-table-body');
        tableBody.innerHTML = '';
        kyNangData.forEach(skill => {
            const row = document.createElement('tr');
            row.className = 'bg-white border-b hover:bg-gray-50';
            row.innerHTML = `
                <td class="px-6 py-4 font-medium text-gray-900">${skill.MaKyNang}</td>
                <td class="px-6 py-4">${skill.TenKyNang}</td>
                <td class="px-6 py-4">${skill.MoTaKyNang}</td>
            `;
            tableBody.appendChild(row);
        });
    }
    
    // Initial call to load default page content
    initTongQuan();
    initLichLamViec();
    initDonHang();
    initNhanVien();
    initDichVu();
    initKyNang();
}); 