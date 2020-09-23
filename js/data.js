var abj = {};
var $master = {
	api: {
		item: {},
		creature: {},
		recipe_in: {},
		recipe_out: {}
	},
	local: {
		name: "",
		page: 0,
		page_qty: 10,
		array: [],
		array_backup: []
	}
};
$master.api.item = {
	"Bãi đáp B.S.S.S": {
		"name": "Bãi đáp B.S.S.S",
		"type": "Bệ DịCh Chuyển",
		"rarity": "Huyền Thoại",
		"description": "Thứ đã giúp bạn có cuộc sống như trong anime isekai",
		"icon": "bs_ss_assess_lander.png"
	},
	"Que": {
		"name": "Que",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Bạn nhận thấy rằng nếu Chạy cùng nó, nó sẽ làm vướng mắt bạn.",
		"icon": "stick.png"
	},
	"Cưa Cỏ gai": {
		"name": "Cưa Cỏ gai",
		"type": "Công cụ",
		"level": "Bậc 1",
		"rarity": "Ngẫu Nhiên",
		"description": "Cưa bậc 1. Một cây cưa làm từ Cỏ gai. Đây là loại cưa Chất lượng trung bình nhất bạn từng thấy, nhưng Cho phép bạn Chặt được Cây Khúc mộc và Cây Chuông gió!",
		"recipe": {
			"name": "BS SSSS SS5",
			"output_qty": 1,
			"type": "Bàn Chế tạo",
			"ingredients": [{
				"name": "Que",
				"qty": 4
			}, {
				"name": "Lưỡi Cỏ gai",
				"qty": 10
			}]
		},
		"icon": "sawgrassaw.png"
	},
	"Rìu cỏ gai": {
		"name": "Rìu cỏ gai",
		"type": "Vũ Khí",
		"level": "Cấp 2",
		"rarity": "Ngẫu Nhiên",
		"description": "Chàng trai hư này được Chứng nhận 100% hữu cơ. HỮU CƠ MỘT CÁCh ChẾT ChÓC.",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 15
			}, {
				"name": "Lưỡi Cỏ gai",
				"qty": 16
			}, {
				"name": "Lá Cỏ gai",
				"qty": 5
			}, {
				"name": "Xương Wompit",
				"qty": 6
			}]
		},
		"icon": "sawboard.png"
	},
	"Đá nhẵn": {
		"name": "Đá nhẵn",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Độ phẳng của viên đá này hư cấu tới nỗi bạn có thể Cho nó solo với tờ giấy",
		"icon": "flatstone.png"
	},
	"Búa đá nhẵn": {
		"name": "Búa đá nhẵn",
		"type": "Vũ khí",
		"level": "Cấp 3",
		"rarity": "Ngẫu Nhiên",
		"description": "Búa cấp 3. Một Chiếc búa công nghệ cao được làm từ những hòn đá nhẫn tốt nhất. Dùng để nghiền nát mọi thứ. THEO CÁCh CỦA BẠN!",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 21
			}, {
				"name": "Đá nhẵn",
				"qty": 19
			}, {
				"name": "Gân chân Wompit",
				"qty": 4
			}]
		},
		"icon": "flatstone_hammer.png"
	},
	"Cây Khúc mộc": {
		"name": "Cây Khúc mộc",
		"type": "Tài nguyên",
		"rarity": "Bình Thường",
		"description": "Cái cây này dường như được làm bởi gỗ. Bạn tự nghĩ rằng mọi người ở quê nhà sẽ dùng nó để làm gì.",
		"icon": "logtree.png",
		"drop": ["Mùn cưa", "Khúc gỗ", "Hạt giống Khúc mộc"]
	},
	"Sàn Gỗ": {
		"name": "Sàn Gỗ",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Nó có một mặt Bóng Độc đáo, và bạn sẽ thấy mảnh vụn khi đi Chân trần lên nó. Vì thế, đừng làm việc đó.",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 10
			}]
		},
		"icon": "wooden_floor.png"
	},
	"Tường gỗ": {
		"name": "Tường gỗ",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Tạo dựng những mối quan hệ tốt là tất cả mọi thứ cần thiết để dựng những bức tường. Tốt hơn trong công việc.",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 5
			}]
		},
		"icon": "wooden_wall.png"
	},
	"Cây Dâu độc": {
		"name": "Cây Dâu độc",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Quả mọng này màu tím, điều đó đồng nghĩa rằng nó có độc. Hoặc có thể là màu đỏ. Trong một số trường hợp, vài màu có nghĩa là có độc.",
		"icon": "bumpberry.png"
	},
	"Cỏ gai": {
		"name": "Cỏ gai",
		"type": "Tài nguyên",
		"rarity": "Bình Thường",
		"description": "Cây cỏ này siêu sắc và Chắc Chắn, nhưng linh hoạt. Và nó có vị khá giống kẹo dẻo nướng sương sương với một Chút dư vị của thịt bò.",
		"icon": "sawgrass.png"
	},
	"Vợt Glutterfly": {
		"name": "Vợt Glutterfly",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Glutterfly phát điên vì thứ này. Tiến hoá Glutterfly của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nhánh Chuông gió",
				"qty": 154
			}, {
				"name": "Cây Dâu độc",
				"qty": 12
			}, {
				"name": "Vỏ Kitin",
				"qty": 48
			}, {
				"name": "Tinh Chất Glutterfly [Già cỗi]",
				"qty": 5
			}]
		},
		"icon": "glutternet.png"
	},
	"Lưỡi Cỏ gai": {
		"name": "Lưỡi Cỏ gai",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Lưỡi đao làm từ Cỏ gai. Khi bạn Chà tay lên nó, bạn Chảy máu đầm đìa. Nhưng khi bạn Chà vào nó lần thứ HAI, bạn tiếp tục bị Chảy máu sml.",
		"icon": "sawgrass_blade.png"
	},
	"Lá Cỏ gai": {
		"name": "Lá Cỏ gai",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Một Chiếc Lá Cỏ gai mềm. Chà nó lên mặt đã lắm, dù nó dễ gây ra phát ban.",
		"icon": "sawgrass_leaf.png"
	},
	"Gân chân Wompit": {
		"name": "Gân chân Wompit",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Một cái gân siêu co giãn từ Chân của Wompit. Thậm Chí bạn có thể buộc tóc với nó, nếu bạn không ở trong bộ đồ không gian.",
		"icon": "wompit_sinew.png"
	},
	"Khúc gỗ": {
		"name": "Khúc gỗ",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Một mảnh gỗ tròn, lấy từ Cây Khúc mộc. Bạn Chưa từng thấy thứ gì như thế này!",
		"icon": "log.png"
	},
	"Mùn cưa": {
		"name": "Mùn cưa",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Một phụ phẩm từ việc Chế biến gỗ. Nếu tay bạn dính vào đống đó thì sẽ có cảm giác tuyệt vời. Mùi của Chúng cũng rất tuyệt!",
		"icon": "sawdust.png"
	},
	"Nấm mặt trời": {
		"name": "Nấm mặt trời",
		"type": "Tiêu hao",
		"rarity": "Bình Thường",
		"description": "Những cây nấm này thíCh mọc trong bùn, và vị của nó mặn mặn. Hồi 149 HP.",
		"icon": "sunshroom.png"
	},
	"Bàn cưa": {
		"name": "Bàn cưa",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Cái bàn làm việc với cái cưa vòng này sẽ giúp bạn cắt bất cứ loại gỗ nào một cáCh hoàn hảo!",
		"recipe": {
			"name": "BS SSSS SS5",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lưỡi Cỏ gai",
				"qty": 14
			}, {
				"name": "Khúc gỗ",
				"qty": 13
			}]
		},
		"icon": "sawmill.png"
	},
	"Máy đập đá": {
		"name": "Máy đập đá",
		"type": "Trạm Chế tạo",
		"rarity": "Nình thường",
		"description": "Đúng là một cáCh tiện lợi để tạo hình những cục đá thành những hình dạng khác!",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chết tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 27
			}, {
				"name": "Khúc gỗ",
				"qty": 29
			}, {
				"name": "Gân chân Wompit",
				"qty": 5
			}]
		},
		"icon": "stoneshaper.png"
	},
	"Tường đá": {
		"name": "Tường đá",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Truyền thuyết kể rằng bức Tường đá được sáng Chế bởi một người đàn ông đeo găng với điệu nhảy ngọt ngào.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 5
			}]
		},
		"icon": "stone_wall.png"
	},
	"Mũ da": {
		"name": "Mũ da",
		"type": "Mũ giáp",
		"level": "Cấp 3",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 3. Nó sẽ bảo vệ da đầu của bạn khỏi những cú Chạm \"thân thương\" nhất.",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 18
			}, {
				"name": "Xương Wompit",
				"qty": 11
			}]
		},
		"icon": "womphat.png"
	},
	"Quần gỗ": {
		"name": "Quần gỗ",
		"type": "Quần giáp",
		"level": "Cấp 1",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 1. Nó sẽ giữ Chân bạn ấm khi trời lạnh! Hừm. Cũng không hẳn. Nó làm từ gỗ :v.",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 9
			}, {
				"name": "Lá Cỏ gai",
				"qty": 3
			}]
		},
		"icon": "logboots.png"
	},
	"Giáp gỗ": {
		"name": "Giáp gỗ",
		"type": "Áo giáp",
		"level": "Cấp 1",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 1. Che Chắn lồng ngực của bạn với những tấm ván tuyệt vời giúp xương sườn của bạn không bị tổn thương!",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 15
			}, {
				"name": "Lá Cỏ gai",
				"qty": 5
			}]
		},
		"icon": "logChest.png"
	},
	"Găng tay gỗ": {
		"name": "Găng tay gỗ",
		"type": "Găng tay",
		"level": "Cấp 1",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 1. Bảo vệ những ngón tay mập mạp và béo ngậy của bạn bằng sức mạnh của gỗ!",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 12
			}, {
				"name": "Que",
				"qty": 6
			}]
		},
		"icon": "woodmitts.png"
	},
	"Móng Cỏ rồng": {
		"name": "Móng Cỏ rồng",
		"type": "Găng tay",
		"level": "Cấp 3",
		"rarity": "Huyền Thoại",
		"description": "Găng tay huyền thoại cấp 3. Đừng gãi mũi khi đang mang nhóc này.",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 52
			}, {
				"name": "Cỏ móng rồng",
				"qty": 1
			}, {
				"name": "Lá Cỏ gai",
				"qty": 18
			}]
		},
		"icon": "hydrablade_woodshankers.png"
	},
	"Vòng Hoa": {
		"name": "Vòng Hoa",
		"type": "Trang sức",
		"rarity": "Bình Thường",
		"description": "Giờ bạn có thể hưởng thụ hương Anh túc mọi lúc! Nhận 0.25% HP hồi phục mỗi giây!",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Anh túc",
				"qty": 16
			}, {
				"name": "Gân chân Wompit",
				"qty": 14
			}]
		},
		"icon": "baconband.png"
	},
	"Mũ Gỗ": {
		"name": "Mũ Gỗ",
		"type": "Mũ Giáp",
		"level": "Cấp 1",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 1. TA LÀ THẦN CỦA KHU RỪNG!",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 11
			}, {
				"name": "Que",
				"qty": 5
			}, {
				"name": "Mùn cưa",
				"qty": 4
			}]
		},
		"icon": "loghat.png"
	},
	"Cây Anh túc": {
		"name": "Cây Anh túc",
		"type": "Tiêu Hao",
		"rarity": "Bình Thường",
		"description": "Những bông hoa xinh đẹp này có hương thơm trêu ngươi. Hồi 81 HP.",
		"icon": "baconweed.png"
	},
	"Hạt giống Khúc mộc": {
		"name": "Hạt giống Khúc mộc",
		"type": "Hạt Giống",
		"rarity": "Tốt",
		"description": "Dưới điều kiện phù hợp, thứ này sẽ phát triển thành một Cây Khúc mộc sừng sững sau một thời gian nữa.",
		"icon": "logtree_seed.png"
	},
	"Hạt giống Cỏ gai": {
		"name": "Hạt giống Cỏ gai",
		"type": "Hạt Giống",
		"rarity": "Tốt",
		"description": "Nếu được trồng đúng loại Đất, nó sẽ mọc thành một cây Cỏ gai đáng yêu.",
		"icon": "sawgrass_seed.png"
	},
	"Cụm đá nhẵn": {
		"name": "Cụm đá nhẵn",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Nó trông có vẻ nặng. Hoá ra nó nặng thật.",
		"icon": "flatboulder.png",
		"drop": ["Sỏi đá vụn", "Đá nhẵn", "Bảo thạch vàng"]
	},
	"Sỏi đá vụn": {
		"name": "Sỏi đá vụn",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó sẽ cực kì hữu dụng Cho bất kì việc gì cần đến một đống đá nhỏ.",
		"icon": "flatstone_gravel.png"
	},
	"Cuốc Chim": {
		"name": "Cuốc Chim",
		"type": "Công cụ",
		"level": "Bậc 1",
		"rarity": "Ngẫu Nhiên",
		"description": "Cuốc Chim bậc 1. Chiếc Cuốc Chim này sẽ phá vỡ ngay cả những Cụm đá nhẵn cứng nhất! Hoặc Chỉ bằng một nhát đập nhẹ nhất.",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Que",
				"qty": 9
			}, {
				"name": "Xương Wompit",
				"qty": 8
			}, {
				"name": "Gân chân Wompit",
				"qty": 3
			}]
		},
		"icon": "pickaxe.png"
	},
	"Kiếm Cỏ gai": {
		"name": "Kiếm Cỏ gai",
		"type": "Vũ Khí",
		"level": "Cấp 1",
		"rarity": "Ngẫu Nhiên",
		"description": "Kiếm cấp 1. Một cây kiếm làm từ cỏ. Nó Chắc hẳn Chỉ hợp với mỗi bạn.",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "`",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 18
			}, {
				"name": "Lưỡi Cỏ gai",
				"qty": 20
			}]
		},
		"icon": "sawgrass_sword.png"
	},
	"Rìu Đá": {
		"name": "Rìu Đá",
		"type": "Vũ khí",
		"level": "Cấp 5",
		"rarity": "Ngẫu Nhiên",
		"description": "Rìu cấp 5. Bạn đã từng đọc cái này ở bản tin Thế Giới Tự Nhiên rồi. Nó có vẻ hiệu quả đấy.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Kitin",
				"qty": 13
			}, {
				"name": "Đá nhẵn",
				"qty": 30
			}]
		},
		"icon": "stonahawk.png"
	},
	"Xương Wompit": {
		"name": "Xương Wompit",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó có thể Chịu được rất nhiều cân nặng và áp lực, nhưng nó không thể Chịu được sự Chỉ tríCh.",
		"icon": "wompit_bone.png"
	},
	"Sàn đá": {
		"name": "Sàn đá",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Một sàn nhà đàn hồi hơn Cho người có thị hiếu tốt hơn.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 10
			}]
		},
		"icon": "flatstone_floor.png"
	},
	"Rương Vàng": {
		"name": "Rương Vàng",
		"type": "Rương",
		"rarity": "Tốt",
		"description": "Làm từ thứ gì đó có ánh kim và Chất lượng hảo hạng. Có lẽ cần Chìa để mở !",
		"icon": "golden_Chest.png"
	},
	"Thuốc Thiêu đốt": {
		"name": "Thuốc Thiêu đốt",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Đổ thứ này dọc theo phần Chết người của vũ khí của bạn khiến nó NÓNG ĐỎ LÊN! 3% tỉ lệ thiêu đốt mục tiêu khi đánh. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Cái Vạc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ sừng",
				"qty": 2
			}, {
				"name": "Ruột Satgat",
				"qty": 1
			}, {
				"name": "Sinh Vật Phù Du",
				"qty": 1
			}, {
				"name": "Tinh Chất Satgat [Nhạy cảm]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_scorChing.png"
	},
	"Bình hồi máu Nhẹ": {
		"name": "Bình hồi máu Nhẹ",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Uống thứ này khiến bạn cảm thấy yên bình như cơn gió thoảng mùa hạ. Hồi 453 HP.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 3
			}, {
				"name": "Cây Anh túc",
				"qty": 3
			}]
		},
		"icon": "mild_hp_potion.png"
	},
	"Cột DịCh Chuyển": {
		"name": "Cột DịCh Chuyển",
		"type": "Bệ dịCh Chuyển",
		"rarity": "Tốt",
		"description": "Đặt đèn hiệu này trên mặt Đất sẽ Cho phép bạn dịCh Chuyển đến nó từ bản đồ của bạn nếu trong phạm vi.",
		"icon": "warp_beacon.png"
	},
	"Tấm dịCh Chuyển": {
		"name": "Tấm dịCh Chuyển",
		"type": "Bệ dịCh Chuyển",
		"rarity": "Tối thượng",
		"description": "Hewgodooko bỏ thứ này nằm lăn lóc. Đúng là ngu ngốc!!!!!",
		"icon": "telepad.png"
	},
	"Cây Chuông gió": {
		"name": "Cây Chuông gió",
		"type": "Tài nguyên",
		"rarity": "Bình Thường",
		"description": " Cái cây này sẽ phát ra những âm thanh hài hước khi có gió thổi qua. Mỗi cây có một cao độ riêng!",
		"icon": "whistleroot.png",
		"drop": ["Bọ hàm kìm", "Nhánh Chuông gió", "Thỏ Cụt Tai"]
	},
	"Bọ hàm kìm": {
		"name": "Bọ hàm kìm",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường ",
		"description": "Sinh vật trông như mối này bị thu hút bởi âm thanh từ những Cây Chuông gió. Mặc dù hàm nó rất sắc, nhưng nó sẽ không cắn bạn đâu.",
		"icon": "whistle_borer.png"
	},
	"Nhánh Chuông gió": {
		"name": "Nhánh Chuông gió",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": " Nhánh cây lau này dài và rỗng. Nó có thể Chịu bẻ cong rất tốt ,nhưng không thể Chống lại vẻ đẹp cuốn hút và bắt mắt của bạn. CLGT?",
		"icon": "whistleroot_reed.png"
	},
	"Vòi Glidopus": {
		"name": "Vòi Glidopus",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": " Nó khoẻ và dẻo dai, như một cái ống nước làm vườn cũ. Hoặc có thể như một cái mới, nếu là một cái mới khoẻ và dẻo dai.",
		"icon": "glidopus_siphon.png"
	},
	"Mực Glidopus": {
		"name": "Mực Glidopus",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": " Glidopus giữ mực của Chúng trong Chai thuỷ tinh Cho an toàn. Một mùi thơm giống như xăng lấp đầy không khí khi bạn bật nút Chai.",
		"icon": "glidopus_ink.png"
	},
	"Bia Mộ": {
		"name": "Bia Mộ",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Hãy yên nghĩ.",
		"icon": "gravestone.png"
	},
	"Móng Chân Wompit": {
		"name": "Móng Chân Wompit",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": " Móng Chân này khá cứng và thô. Vị cũng không ngon Chút nào, nhưng theo một hướng tốt.",
		"icon": "wompit_toenail.png"
	},
	"Trái tim Wompit nguyên vẹn": {
		"name": "Trái tim Wompit nguyên vẹn",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": " Trái tim vẫn đập một lúc lâu sau khi bị táCh ra khỏi vật Chủ. Nó thật thú vị và điên rồ!",
		"icon": "intact_wompit_heart.png"
	},
	"Da Wompit": {
		"name": "Da Wompit",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": " Bạn vừa giết một con Wompit và lột da nó. Hi vọng bạn có lí do Chính đáng để bào Chữa Cho hành động này.",
		"icon": "wompit_leather.png"
	},
	"Ghế gỗ": {
		"name": "Ghế gỗ",
		"type": "Đồ Nội Thất",
		"rarity": "Bình Thường",
		"description": " Nếu bạn có đầu gối, đây sẽ là Chỗ tốt để ngồi. Nhưng vẫn trông... bắt mắt.",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Que",
				"qty": 6
			}, {
				"name": "Khúc gỗ",
				"qty": 13
			}]
		},
		"icon": "wooden_Chair.png"
	},
	"Bàn gỗ": {
		"name": "Bàn gỗ",
		"type": "Đồ Nội Thất",
		"rarity": "Bình Thường",
		"description": "Bàn: bạn có thể đặt đồ vật lên bàn, miễn là có giấy lót.",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Que",
				"qty": 6
			}, {
				"name": "Khúc gỗ",
				"qty": 13
			}]
		},
		"icon": "wooden_table.png"
	},
	"Tượng Ông Già": {
		"name": "Tượng Ông Già",
		"type": "Đồ Nội Thất",
		"rarity": "Bình Thường",
		"description": "Thiên hạ đồn là những ai vuốt nhẹ bộ râu vĩ đại của ông ấy sẽ gặp may mắn.",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 25
			}]
		},
		"icon": "old_man_statue.png"
	},
	"Keo cơ bản": {
		"name": "Keo cơ bản",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Nó dính và nhớp nháp, như keo vậy.",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mùn cưa",
				"qty": 1
			}, {
				"name": "Móng Chân Wompit",
				"qty": 1
			}]
		},
		"icon": "basic_glue.png"
	},
	"Bình Hóa Chất": {
		"name": "Bình Hóa Chất",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": " Cần kha khá hóa Chất để thí nghiệm với các vật liệu điên rồ. Thứ này sẽ rất hữu íCh!",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trái tim Wompit nguyên vẹn",
				"qty": 2
			}, {
				"name": "Da Wompit",
				"qty": 16
			}, {
				"name": "Vỏ Kitin",
				"qty": 9
			}, {
				"name": "Cây Dâu độc",
				"qty": 3
			}]
		},
		"icon": "Chemworks.png"
	},
	"Vỏ Kitin": {
		"name": "Vỏ Kitin",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": " Nó cực kì khó để phát âm. Nhưng cáCh nó bắt sáng thật sự tuyệt vời!",
		"icon": "glutterfly_Chitin.png"
	},
	"Đèn xanh lá": {
		"name": "Đèn xanh lá",
		"type": "Nguồn Sáng",
		"rarity": "Bình Thường",
		"description": " Đã tới lúc Chuyển ánh sáng thành màu xanh.",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 5
			}, {
				"name": "Dịch phát quang",
				"qty": 2
			}]
		},
		"icon": "glorCh.png"
	},
	"Dịch phát quang": {
		"name": "Dịch phát quang",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": " Có vẻ nó sẽ sáng hơn với mật độ nhiều hơn. Thọc ngón tay vào bạn thấy nó nóng và ngứa ran cùng lúc.",
		"icon": "glow_juice.png"
	},
	"Giáp da": {
		"name": "Giáp da",
		"type": "Áo Giáp",
		"level": "Cấp 3",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 3. Nếu bạn có dự định Chạy marathon thì nhớ mang theo băng cứu thương nhé.",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 11
			}, {
				"name": "Lá Cỏ gai",
				"qty": 6
			}, {
				"name": "Gân chân Wompit",
				"qty": 3
			}]
		},
		"icon": "wompvest.png"
	},
	"Quần da": {
		"name": "Quần da",
		"type": "Quần Giáp",
		"level": "Cấp 3",
		"rarity": "Ngẫu Nhiên",
		"description": " Quần cấp 3. Chiếc quần bó này thật sự phô ra những phần gợi cảm của bạn.",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 10
			}, {
				"name": "Móng Chân Wompit",
				"qty": 1
			}]
		},
		"icon": "wompants.png"
	},
	"Găng tay Da": {
		"name": "Găng tay Da",
		"type": "Găng tay",
		"level": "Cấp 3",
		"rarity": "Ngẫu Nhiên",
		"description": " Găng tay cấp 3. Không thứ gì làm ấm tay bạn bằng da thú!",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 13
			}, {
				"name": "Lá Cỏ gai",
				"qty": 7
			}]
		},
		"icon": "wompigloves.png"
	},
	"Thuốc súng": {
		"name": "Thuốc súng",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": " Nó sẽ hữu dụng hơn nếu bạn có một cây súng.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mực Glidopus",
				"qty": 1
			}, {
				"name": "Mùn cưa",
				"qty": 1
			}]
		},
		"icon": "gunpowda.png"
	},
	"Bom sỏi": {
		"name": "Bom sỏi",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": " Quả bom này khá mạnh. NHƯ MỘT CÚ ĐẤM MÓC VÀO CỔ! Gây 200% ST/giây thành STVL.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thuốc súng",
				"qty": 3
			}, {
				"name": "Sỏi đá vụn",
				"qty": 3
			}, {
				"name": "Da Wompit",
				"qty": 3
			}]
		},
		"icon": "gravelbomb.png"
	},
	"Bom hạt Cỏ gai": {
		"name": "Bom hạt Cỏ gai",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": " Không có gì sắc hơn Cỏ gai cả...trừ khi Hạt giống Cỏ gai bay vào mắt bạn. Gây 125% ST/giây thành STVL.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hạt giống Cỏ gai",
				"qty": 3
			}, {
				"name": "Lá Cỏ gai",
				"qty": 3
			}, {
				"name": "Mực Glidopus",
				"qty": 3
			}]
		},
		"icon": "sawgrass_seedbomb.png"
	},
	"Bom hạt Khúc mộc": {
		"name": "Bom hạt Khúc mộc",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": " Tại sao phải trồng cây xuống Đất khi bạn có thể trồng Chúng trên mặt? Gây 125% ST/giây thành STVL.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hạt giống Khúc mộc",
				"qty": 3
			}, {
				"name": "Khúc gỗ",
				"qty": 3
			}, {
				"name": "Mực Glidopus",
				"qty": 3
			}]
		},
		"icon": "logtree_seedbomb.png"
	},
	"Bếp lửa": {
		"name": "Bếp lửa",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Nó ấm và khá thoải mái. Có tí cacao nóng nữa thì tuyệt vời.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 29
			}, {
				"name": "Sỏi đá vụn",
				"qty": 7
			}, {
				"name": "Khúc gỗ",
				"qty": 31
			}]
		},
		"icon": "hearth.png"
	},
	"Bom thu hoạCh": {
		"name": "Bom thu hoạCh",
		"type": "Bom",
		"rarity": "Tốt",
		"description": " Phá được Cỏ gai, Cây Khúc mộc, và Cây Chuông gió. VỚI SỰ CỤC SÚC, PHÁ ĐƯỢC Cỏ gai, Cây Khúc mộc VÀ Cây Chuông gió!",
		"recipe": {
			"name": "BS SSSS SS5",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lưỡi Cỏ gai",
				"qty": 3
			}, {
				"name": "Nhánh Chuông gió",
				"qty": 3
			}]
		},
		"icon": "harvestbomb.png"
	},
	"Cửa gỗ": {
		"name": "Cửa gỗ",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Làm cửa thì đương nhiên tốt hơn tường rồi.",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 2
			}]
		},
		"icon": "wooden_poledoor.png"
	},
	"Sàn Cỏ gai": {
		"name": "Sàn Cỏ gai",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": " Sàn nhà giúp ngăn quái xuất hiện ở nhà bạn, dùng để bắc cầu cũng được!",
		"recipe": {
			"name": "BS SSSS SS5",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lưỡi Cỏ gai",
				"qty": 10
			}]
		},
		"icon": "thatChed_sawfloor.png"
	},
	"Sàn Chống thấm": {
		"name": "Sàn Chống thấm",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": " Sàn nhà giúp ngăn quái xuất hiện ở nhà bạn, dùng để bắc cầu cũng được!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Búi lông Wat",
				"qty": 10
			}]
		},
		"icon": "sp_watfur_floor_0.png"
	},
	"Sàn Cẩu tíCh": {
		"name": "Sàn Cẩu tíCh",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Ngươi nghĩ nó sẽ mềm và mịn? Ngươi nghĩ có Chuyện ngon ăn thế sao?",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Cẩu tíCh",
				"qty": 10
			}]
		},
		"icon": "sp_hairbark_floor_0.png"
	},
	"Sàn Vỏ xương": {
		"name": "Sàn Vỏ xương",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Nó khá cứng, dù các cạnh sắc liên tục cắt vào ngón Chân bạn.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ xương Satgat",
				"qty": 10
			}]
		},
		"icon": "sp_exofloor_0.png"
	},
	"Sàn Kì Lạ": {
		"name": "Sàn Kì Lạ",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Không rõ loại lông này tới từ đâu, nhưng nó tạo ra một cái thảm tuyệt vời!",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Chùm lông lạ",
				"qty": 10
			}]
		},
		"icon": "sp_strange_floor_0.png"
	},
	"Sàn Phong phát": {
		"name": "Sàn Phong phát",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Không rõ loại lông này tới từ đâu, nhưng nó tạo ra một cái thảm tuyệt vời!",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lõi Phong phát",
				"qty": 10
			}]
		},
		"icon": "sp_bluffluffloor_0.png"
	},
	"Sàn tua Throak": {
		"name": "Sàn tua Throak",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Không rõ loại lông này tới từ đâu, nhưng nó tạo ra một cái thảm tuyệt vời!",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xúc tu Throak",
				"qty": 10
			}]
		},
		"icon": "sp_throak_tentafloor_0.png"
	},
	"Bàn đẩy chỉ Nam": {
		"name": "Bàn đẩy chỉ Nam",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Đứng trên nó sẽ khiến bạn bị đẩy về hướng Nam!",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cục vàng",
				"qty": 1
			}, {
				"name": "Sợi trục Tĩnh điện",
				"qty": 1
			}, {
				"name": "Gai cột sống",
				"qty": 1
			}, {
				"name": "Tảo Phát Quang",
				"qty": 1
			}]
		},
		"icon": "sp_gogos_south_0.png"
	},
	"Bàn đẩy Chỉ Bắc": {
		"name": "Bàn đẩy Chỉ Bắc",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Đứng trên nó sẽ khiến bạn bị đẩy về hướng Bắc!",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cục vàng",
				"qty": 1
			}, {
				"name": "Sợi trục Tĩnh điện",
				"qty": 1
			}, {
				"name": "Gai cột sống",
				"qty": 1
			}, {
				"name": "Tảo Phát Quang",
				"qty": 1
			}]
		},
		"icon": "sp_gogos_north_0.png"
	},
	"Bàn đẩy Chỉ Đông": {
		"name": "Bàn đẩy Chỉ Đông",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Đứng trên nó sẽ khiến bạn bị đẩy về hướng Dông!",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cục vàng",
				"qty": 1
			}, {
				"name": "Sợi trục Tĩnh điện",
				"qty": 1
			}, {
				"name": "Gai cột sống",
				"qty": 1
			}, {
				"name": "Tảo Phát Quang",
				"qty": 1
			}]
		},
		"icon": "sp_gogos_east_0.png"
	},
	"Bàn đẩy Chỉ Tây": {
		"name": "Bàn đẩy Chỉ Tây",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Đứng trên nó sẽ khiến bạn bị đẩy về hướng Tây!",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cục vàng",
				"qty": 1
			}, {
				"name": "Sợi trục Tĩnh điện",
				"qty": 1
			}, {
				"name": "Gai cột sống",
				"qty": 1
			}, {
				"name": "Tảo Phát Quang",
				"qty": 1
			}]
		},
		"icon": "sp_gogos_west_0.png"
	},
	"Bàn đẩy mạnh chỉ Nam": {
		"name": "Bàn đẩy mạnh chỉ Nam",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Đứng trên nó sẽ khiến bạn bị đẩy RẤT MẠNH về hướng Nam!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 1
			}, {
				"name": "Lõi điện Gulanti",
				"qty": 1
			}, {
				"name": "Nước nhầy Slurb",
				"qty": 1
			}]
		},
		"icon": "sp_gomos_south_0.png"
	},
	"Bàn đẩy mạnh chỉ Bắc": {
		"name": "Bàn đẩy mạnh chỉ Bắc",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Đứng trên nó sẽ khiến bạn bị đẩy RẤT MẠNH về hướng Bắc!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 1
			}, {
				"name": "Lõi điện Gulanti",
				"qty": 1
			}, {
				"name": "Nước nhầy Slurb",
				"qty": 1
			}]
		},
		"icon": "sp_gomos_north_0.png"
	},
	"Bàn đẩy mạnh Chỉ Đông": {
		"name": "Bàn đẩy mạnh Chỉ Đông",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Đứng trên nó sẽ khiến bạn bị đẩy RẤT MẠNH về hướng Dông!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 1
			}, {
				"name": "Lõi điện Gulanti",
				"qty": 1
			}, {
				"name": "Nước nhầy Slurb",
				"qty": 1
			}]
		},
		"icon": "sp_gomos_east_0.png"
	},
	"Bàn đẩy mạnh Chỉ Tây": {
		"name": "Bàn đẩy mạnh Chỉ Tây",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Đứng trên nó sẽ khiến bạn bị đẩy RẤT MẠNH về hướng Tây!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 1
			}, {
				"name": "Lõi điện Gulanti",
				"qty": 1
			}, {
				"name": "Nước nhầy Slurb",
				"qty": 1
			}]
		},
		"icon": "sp_gomos_west_0.png"
	},
	"Chuồng thú đá": {
		"name": "Chuồng thú đá",
		"type": "Chuồng Thú",
		"rarity": "Tốt",
		"description": " Cung cấp nơi nghỉ ngơi thoải mái Cho thú nuôi của bạn. Cùng với một nhãn tên!",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lá Cỏ gai",
				"qty": 5
			}, {
				"name": "Đá nhẵn",
				"qty": 12
			}, {
				"name": "Bảo thạch vàng",
				"qty": 2
			}]
		},
		"icon": "stone_creature_bed.png"
	},
	"Máy bơm": {
		"name": "Máy bơm",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": " Cái Máy bơm này sẽ sản xuất vô hạn Bóng nước khi được đặt ở hồ trên Savanna.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 30
			}, {
				"name": "Trái tim Wompit nguyên vẹn",
				"qty": 3
			}, {
				"name": "Vòi Glidopus",
				"qty": 26
			}]
		},
		"icon": "water_pump.png"
	},
	"Bóng nước": {
		"name": "Bóng nước",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": " Nó phát ra những tiếng rít phiền phức khi bạn Chà tay lên nó.",
		"recipe": {
			"name": "Máy bơm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vòi Glidopus",
				"qty": 3
			}, {
				"name": "Lưỡi Cỏ gai",
				"qty": 3
			}]
		},
		"icon": "water_balloon.png"
	},
	"Đèn bảo thạCh": {
		"name": "Đèn bảo thạCh",
		"type": "Nguồn Sáng",
		"rarity": "Bình Thường",
		"description": " Chỉ những người có gu thời trang và có điều kiện mới có thể trả giá Cho sự sang trọng của Đèn bảo thạCh.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 8
			}, {
				"name": "Bảo thạch vàng",
				"qty": 1
			}]
		},
		"icon": "gem_lamp.png"
	},
	"Bảo thạch vàng": {
		"name": "Bảo thạch vàng",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": " Nếu bạn gửi nó trên mắt và nheo mắt một cái thật mạnh, bạn sẽ tự ý thức được và tự giác dừng lại.",
		"icon": "yellow_gem.png"
	},
	"Đai Chân Wompit": {
		"name": "Đai Chân Wompit",
		"type": "Vật Phẩm Tiến Hóa",
		"rarity": "Siêu Cấp",
		"description": " Wompit rất thíCh mặc nịt tất với cặp đùi thon thả của Chúng. Tiến hoá Wompit của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 149
			}, {
				"name": "Da Wompit",
				"qty": 107
			}, {
				"name": "Tinh Chất Wompit[Cứng cáp]Cứng Cáp",
				"qty": 12
			}]
		},
		"icon": "wompit_garter.png"
	},
	"Gương Choáng": {
		"name": "Gương Choáng",
		"type": "Thiết Bị",
		"rarity": "Tốt",
		"description": " Tạm thời làm Choáng đối thủ trong 2 giây bằng cáCh đập vào mặt Chúng cái gương hợp mốt này!",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 68
			}, {
				"name": "Bảo thạch vàng",
				"qty": 9
			}, {
				"name": "Keo cơ bản",
				"qty": 5
			}]
		},
		"icon": "stunning_mirror.png"
	},
	"Thuốc Kháng lửa": {
		"name": "Thuốc Kháng lửa",
		"type": "Tiêu Hao",
		"rarity": "Tốt",
		"description": " LẠY ChÚA. SAO NÓ LẠNH THẾ. NÓ THẬT LẠNH GIÁ. ĐỂ NÓ XA TÔI RA. Giảm ST lửa nhận vào 15%. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Cái Vạc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bọng mỡ",
				"qty": 1
			}, {
				"name": "Cây Thùa gai",
				"qty": 1
			}, {
				"name": "Thạch Throak",
				"qty": 1
			}, {
				"name": "Tinh Chất Throak [Độc ác]ộc Ác",
				"qty": 1
			}]
		},
		"icon": "elixir_of_fireproofing.png"
	},
	"Bóng da": {
		"name": "Bóng da",
		"type": "Đồ Ném Được",
		"rarity": "Bình Thường",
		"description": " Chơi Bóng da đã là trò tiêu khiển của mọi người ở nơi của  bạn trong nhiều thiên niên kỷ. Tại sao lại phá vỡ truyền thống cơ Chứ?",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 10
			}, {
				"name": "Keo cơ bản",
				"qty": 2
			}]
		},
		"icon": "leather_ball.png"
	},
	"Kính Bảo Hộ": {
		"name": "Kính Bảo Hộ",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": " Sức hút mạnh mẽ kéo dài dây thần kinh thị giác, Cho phép bạn đánh Chí mạng như một vị thần! Tăng 10% tỉ lệ đánh Chí mạng!",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mực Glidopus",
				"qty": 71
			}, {
				"name": "Keo cơ bản",
				"qty": 5
			}, {
				"name": "Bóng nước",
				"qty": 42
			}]
		},
		"icon": "safety_gogs.png"
	},
	"Ống tiêu": {
		"name": "Ống tiêu",
		"type": "Thiết Bị",
		"rarity": "Tốt",
		"description": " Một lực hút và đẩy đủ mạnh để đưa bạn đến nơi mình muốn! Giả sử rằng nói bạn muốn đến là nơi ĐẦU ĐỘC MỤC TIÊU VỚI 100% ST/GIÂY!",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nhánh Chuông gió",
				"qty": 93
			}, {
				"name": "Lá Cỏ gai",
				"qty": 26
			}, {
				"name": "Cây Dâu độc",
				"qty": 8
			}]
		},
		"icon": "blo-pipe.png"
	},
	"Bù Nhìn": {
		"name": "Bù Nhìn",
		"type": "Đồ Nội Thất",
		"rarity": "Bình Thường",
		"description": " Khá buồn là trên hành tinh này không có quạ, nên giờ nó khá vô dụng. Mà trông nó khá ổn đấy Chứ.",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trái tim Wompit nguyên vẹn",
				"qty": 1
			}, {
				"name": "Lưỡi Cỏ gai",
				"qty": 12
			}, {
				"name": "Lá Cỏ gai",
				"qty": 4
			}, {
				"name": "Que",
				"qty": 5
			}]
		},
		"icon": "scarecrow.png"
	},
	"Mũ Đá": {
		"name": "Mũ Đá",
		"type": "Mũ Giáp",
		"level": "Cấp 5",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 5. Giống như mũ giáp, nhưng có Chút giống pizza hơn.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Kitin",
				"qty": 7
			}, {
				"name": "Đá nhẵn",
				"qty": 17
			}, {
				"name": "Bảo thạch vàng",
				"qty": 3
			}]
		},
		"icon": "Chelm.png"
	},
	"Giáp đá": {
		"name": "Giáp đá",
		"type": "Áo Giáp",
		"level": "Cấp 5",
		"rarity": "Ngẫu Nhiên",
		"description": " Giáp ngực cấp 5. Bờ vai lớn khiến bạn ấn tượng hơn trong các cuộc gặp gỡ và trên suốt hành trình.",
		"recipe": {
			"name": "Máy Mập Đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Kitin",
				"qty": 10
			}, {
				"name": "Đá nhẵn",
				"qty": 23
			}]
		},
		"icon": "Charmor.png"
	},
	"Quần Đá": {
		"name": "Quần Đá",
		"type": "Quần Giáp",
		"level": "Cấp 5",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 5. Nhìn nó như cục thịt bò, mình nghĩ mình nên ăn nó luôn.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Kitin",
				"qty": 6
			}, {
				"name": "Đá nhẵn",
				"qty": 15
			}]
		},
		"icon": "Choots.png"
	},
	"Găng Đá": {
		"name": "Găng Đá",
		"type": "Găng tay",
		"level": "Cấp 5",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 5. Làm từ vỏ của một loài bọ với sức kẹp bá đạo.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Kitin",
				"qty": 8
			}, {
				"name": "Đá nhẵn",
				"qty": 19
			}]
		},
		"icon": "Chittens.png"
	},
	"Hoa Móng gà": {
		"name": "Hoa Móng gà",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Bông hoa thơm này có thể hái được từ Cây Móng gà. Khi để sát mắt, nó sẽ thiêu Cháy mắt bạn đấy.",
		"icon": "walker_blossom.png"
	},
	"Cây Móng gà": {
		"name": "Cây Móng gà",
		"type": "Tài Nguyên",
		"rarity": "Tốt",
		"description": "Những cái cây này trông như đang cố gắng để trốn thoát, nhưng Chúng không lừa ai cả.",
		"icon": "walkerroot.png",
		"drop": ["Hoa Móng gà"]
	},
	"Khối lam thạCh": {
		"name": "Khối lam thạCh",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Chất mềm lúc đầu này sẽ cực kì cứng theo thời gian. ",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hoa Móng gà",
				"qty": 1
			}, {
				"name": "Mực Glidopus",
				"qty": 1
			}]
		},
		"icon": "blastiQue.png"
	},
	"Mỏ Glidopus": {
		"name": "Mỏ Glidopus",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Glidopus giấu mỏ của Chúng sâu trong bụng, hoặc là thứ gì đó. Thật sự mà nói, điều này thật bí ẩn.",
		"icon": "glidopus_beak.png"
	},
	"Cưa Lưỡi Liềm": {
		"name": "Cưa Lưỡi Liềm",
		"type": "Công Cụ",
		"level": "Bậc 2",
		"rarity": "Bình Thường",
		"description": "Cưa bậc 2. Cạnh Lam thạCh răng cưa của Chiếc cưa này sẽ Chém xuyên qua những Cây Nắp ấm như dao đâm qua thứ gì đó mềm và xốp!",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khối lam thạCh",
				"qty": 3
			}, {
				"name": "Đá nhẵn",
				"qty": 15
			}, {
				"name": "Cưa Cỏ gai",
				"qty": 1
			}, {
				"name": "Bóng nước",
				"qty": 8
			}]
		},
		"icon": "blastiQue_saw.png"
	},
	"Pha lê Hoàng hôn": {
		"name": "Pha lê Hoàng hôn",
		"type": "Tài Nguyên",
		"rarity": "Tốt",
		"description": "Tinh thể này trông hoàn toàn ấn tượng, và có vị mặn ngọt. Có thể nó được làm từ đường. Hoặc muối. Chúng trông rất giống nhau.",
		"icon": "dusk_crystal.png",
		"drop": ["Bụi Pha lê", "Mảnh Pha lê"]
	},
	"Mảnh Pha lê": {
		"name": "Mảnh Pha lê",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Một Mảnh Pha lê Hoàng hôn hoàn hảo. Nó toả ra hào quang mạnh mẽ như những Chú Chó kéo xe.",
		"icon": "dusk_shard.png"
	},
	"Bụi Pha lê": {
		"name": "Bụi Pha lê",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Đây là những phụ phẩm từ những cố gắng yếu ớt của bạn trong việc khai thác Pha lê Hoàng hôn. Nếu bạn dùng mũi hít nó, nó sẽ khiến đồng tử bạn giãn ra.",
		"icon": "dusk_dust.png"
	},
	"Cây Cao su": {
		"name": "Cây Cao su",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Vỗ vào nó sẽ tạo ra tiếng trống. Với số lượng vừa đủ, Bạn có thể tạo nên một cộng đồng hippie đúng Chất.",
		"icon": "sQuee.png",
		"drop": ["Vỏ Gỗ Cao su", "Thùng Cao su", "Kén Cao su", "Hạt giống Cao su"]
	},
	"Vỏ Gỗ Cao su": {
		"name": "Vỏ Gỗ Cao su",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Đẹp, nhưng cứng tới kỳ lạ, vỏ của Cây Cao su. Chà tay lên đó sẽ mang lại cảm giác dễ Chịu. Có lẽ hơi quá dễ Chịu...",
		"icon": "sQuee_husk.png"
	},
	"Thùng Cao su": {
		"name": "Thùng Cao su",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Khi bạn bóp nó, một Chất lỏng trắng đục rỉ ra. Khi bạn liếm nó, bạn sẽ cực kì hối hận..",
		"icon": "sQuee_barrel.png"
	},
	"Xương hóa thạCh khổng lồ": {
		"name": "Xương hóa thạCh khổng lồ",
		"type": "Mảnh Thành Phần",
		"rarity": "Huyền Thoại",
		"description": "Cặp ngà này Cho thấy hộp sọ của con thú này thuộc về một loài có ngà.",
		"icon": "giant_fossilized_skull.png"
	},
	"Hóa ThạCh Đại Cốt": {
		"name": "Hóa ThạCh Đại Cốt",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Bạn thắc mắc cái xương Chân này à của loài nào. Có lẽ là loài nào đó khổng lồ.",
		"icon": "giant_fossilized_femur.png"
	},
	"Thuốc tăng tốc nhẹ": {
		"name": "Thuốc tăng tốc nhẹ",
		"type": "Tiêu Hao",
		"rarity": "Tốt",
		"description": "Nó sẽ đi THẲNG đến đùi bạn.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 3
			}, {
				"name": "Bọ hàm kìm",
				"qty": 3
			}]
		},
		"icon": "mild_speed_potion.png"
	},
	"Đuốc Pha lê": {
		"name": "Đuốc Pha lê",
		"type": "Đuốc",
		"rarity": "Tốt",
		"description": "Trong lúc tối tăm nhất, thiết bị này sẽ giữ Cho xung quanh bạn được Chiếu sáng. Trong lúc quang đãng nhất, nó hoàn toàn vô dụng.",
		"icon": "crystal_flare.png"
	},
	"Chậu Anh túc": {
		"name": "Chậu Anh túc",
		"type": "Chậu Cây",
		"rarity": "Bình Thường",
		"description": "Truyền thuyết nói rằng nếu bạn đặt một Chậu Anh túc trở lại, Tiên Anh túc sẽ đánh cắp răng của bạn. Nhưng điều đó thật ngớ ngẩn ... phải không vậy?",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 5
			}, {
				"name": "Cây Anh túc",
				"qty": 1
			}]
		},
		"icon": "potted_baconweed.png"
	},
	"Sữa Wompit": {
		"name": "Sữa Wompit",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Với thái độ đúng đắn, bạn có thể vắt sữa bất kì thứ gì. Và việc này tới từ một con Wompit đã thuần hoá!",
		"recipe": {
			"name": "Wompit",
			"output_qty": 1,
			"type": "Thú Nuôi",
			"ingredients": [{
				"name": "Lưỡi Cỏ gai",
				"qty": 2
			}, {
				"name": "Lá Cỏ gai",
				"qty": 1
			}]
		},
		"icon": "wompit_milk.png"
	},
	"Phấn cánh Glutterfly": {
		"name": "Phấn cánh Glutterfly",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Thu hoạCh một cáCh cẩn thận từ đôi cánh đập dữ dội của một con Glutterfly đã thuần hóa. Hoăc phấn sẽ bay tứ tung, bám vào mọi thứ và rất khó lấy lại được.",
		"recipe": {
			"name": "Glutterfly",
			"output_qty": 1,
			"type": "Thú Nuôi",
			"ingredients": [{
				"name": "Cây Dâu độc",
				"qty": 1
			}, {
				"name": "Cây Anh túc",
				"qty": 2
			}]
		},
		"icon": "glutterfly_wingdust.png"
	},
	"Nhựa nhầy Tartil": {
		"name": "Nhựa nhầy Tartil",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Một quả bóng nhầy từ các mảnh của Tartil. Nó có vị hơi giống hạnh nhân và sữa đặc có đường. Khá giống bơ. Thứ này Chắc Chắn sẽ làm nên một cái bánh bông lan bơ tuyệt vời.",
		"icon": "tartil_pitCh.png"
	},
	"Lưỡi Tartil": {
		"name": "Lưỡi Tartil",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Nó được bao phủ bởi đầy bọng dịCh, thứ sẽ rỉ ra Chất nhờn gây phê khi vỡ. Mặc dù với lớp màng bọc, thật khó để cưỡng lại.",
		"icon": "tartil_tongue.png"
	},
	"Hổ PháCh": {
		"name": "Hổ PháCh",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Những khối Hổ PháCh cổ được tìm thấy trong cơ thể lũ Tartil. Bạn có thể thấy bọ bị mắc kẹt bên trong.",
		"icon": "petrified_amber.png"
	},
	"Bàn đá": {
		"name": "Bàn đá",
		"type": "Đồ Nội Thất",
		"rarity": "Bình Thường",
		"description": "Chủ động mời kháCh dùng bữa tối với Chiếc Bàn đá cứng này.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 40
			}]
		},
		"icon": "stone_table.png"
	},
	"Ghế Đá": {
		"name": "Ghế Đá",
		"type": "Đồ Nội Thất",
		"rarity": "Bình Thường",
		"description": "Nó khá cứng nếu ngồi lúc đầu, nhưng dễ Chịu ngay sau đó.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 40
			}]
		},
		"icon": "stone_stool.png"
	},
	"Hạt giống Cao su": {
		"name": "Hạt giống Cao su",
		"type": "Hạt Giống",
		"rarity": "Tốt",
		"description": "Với sự Chăm sóc bằng cả tấm lòng, bạn có thể tự canh tác khu vườn Cây Cao su của bạn!",
		"icon": "sQuee_seed.png"
	},
	"Kén Cao su": {
		"name": "Kén Cao su",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Cái kén này được tìm thấy bên trong một Cây Cao su. Nó cười khúc khíCh và dội lại tiếng nhạc.",
		"icon": "squocoon.png"
	},
	"Cây Trụ thảo": {
		"name": "Cây Trụ thảo",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Cây này không có rễ, nhưng đế cực kỳ dính và khó táCh khỏi những thứ khác một khi nó bám vào.",
		"icon": "straddlebark.png"
	},
	"Cây Nọc Độc": {
		"name": "Cây Nọc Độc",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Loài cây có mùi hăng này mọc thành từng mảng lớn. Nó sản sinh ra những túi khí kì lạ.",
		"icon": "gassak.png",
		"drop": ["Túi khí độc", "Túi Nọc độc đôi", "Bọ ăn khí", "Bom bi"]
	},
	"Cây Sen cạn": {
		"name": "Cây Sen cạn",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Mỗi ngày nó sẽ mọc ra một Chùm quả phát sáng mới, và nở ra vào ban đêm. Những quả mọng rực rỡ tới mức có thể nhìn thấy từ không gian!",
		"icon": "night_glotus.png",
		"drop": ["Quả Sen cạn"]
	},
	"Cây Bội thảo": {
		"name": "Cây Bội thảo",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Một loài cây nhỏ, yếu ớt và Chỉ có duy nhất một búp. Mặc dù Chỉ là cây, nó dường như sợ hãi mọi thứ.",
		"icon": "bulbi.png"
	},
	"Túi khí độc": {
		"name": "Túi khí độc",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Được hái từ Cây Nọc Độc, nhưng túi sủi bọt này nồng nặc mùi Ch4.",
		"icon": "gassak_gas_sack.png"
	},
	"Quả Sen cạn": {
		"name": "Quả Sen cạn",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Những quả mọng phát quang sinh học này khi cầm lên sẽ ấm tay và phát ra khúc ngân nga trầm lắng.",
		"icon": "glotus_berries.png"
	},
	"Túi Nọc độc đôi": {
		"name": "Túi Nọc độc đôi",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Hai Túi khí độc ghép làm một, có lẽ là ở hông. Chúng không thể táCh rời.",
		"icon": "gassak_doublesack.png"
	},
	"Bọ ăn khí": {
		"name": "Bọ ăn khí",
		"type": "Mảnh Thành Phần",
		"rarity": "Siêu Cấp",
		"description": "Loài bọ nhỏ này phát triển mạnh với loại khí sinh ra bên trong Túi khí độc. Nó trông rất thảm khi bạn phá hoại nhà và gia đình nó.",
		"icon": "gassakmeister.png"
	},
	"Đèn Dầu Tartil": {
		"name": "Đèn Dầu Tartil",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Hợp Chất cực kì dễ bay hơi này được tổng hợp trong bụng một con Tartil đã thuần hoá. Vì thế, việc tríCh xuất phải cực kì cẩn thận.",
		"recipe": {
			"name": "Tartil",
			"output_qty": 1,
			"type": "Thú Nuôi",
			"ingredients": [{
				"name": "Túi Nọc độc đôi",
				"qty": 1
			}, {
				"name": "Cây Bội thảo",
				"qty": 1
			}, {
				"name": "Hóa ThạCh Đại Cốt",
				"qty": 2
			}]
		},
		"icon": "tartil_firedamp.png"
	},
	"Ấu trùng Glidopus": {
		"name": "Ấu trùng Glidopus",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Nếu bạn đối xử tốt với một Glidopus đã thuần hoá, nó sẽ tặng bạn đứa con đầu lòng. Và toàn bộ lứa con sau này.",
		"recipe": {
			"name": "Glidopus",
			"output_qty": 1,
			"type": "Thú Nuôi",
			"ingredients": [{
				"name": "Nhánh Chuông gió",
				"qty": 2
			}, {
				"name": "Nấm mặt trời",
				"qty": 1
			}]
		},
		"icon": "glidopus_larva.png"
	},
	"Cánh Wat": {
		"name": "Cánh Wat",
		"type": "Mảnh Thành Phần.",
		"rarity": "Bình Thường",
		"description": "Wat là một loại cánh, phải không? Chính xác, nó là một loại cánh là Wat. Nó sẽ không ngừng rung động. Wat.",
		"icon": "wat_wing.png"
	},
	"Móng Wat": {
		"name": "Móng Wat",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Những ngón tay của Wat ngon nức tiếng vì được Chiên trong bơ và sôcôla. Chúng cũng tuyệt để gẩy bụi mắt!",
		"icon": "watfinger.png"
	},
	"Búi lông Wat": {
		"name": "Búi lông Wat",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Bạn đã cẩn thận táCh thứ lông này từ mặt của một con Wat bằng cáCh đâm nó tới Chết. Tốt hơn là nó phải thật đáng giá!",
		"icon": "wat_fur_tuft.png"
	},
	"Phân Wat": {
		"name": "Phân Wat",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Đây dường như là phân của một con Wat đã thuần hoá. Nó khá tởm. Bạn cũng không hơn gì..",
		"recipe": {
			"name": "Wat",
			"output_qty": 1,
			"type": "Thú Nuôi",
			"ingredients": [{
				"name": "Quả Sen cạn",
				"qty": 2
			}, {
				"name": "Cây Trụ thảo",
				"qty": 1
			}]
		},
		"icon": "wuano.png"
	},
	"Máy tiện Cao su": {
		"name": "Máy tiện Cao su",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Trạm Chế tạo này có thể giải quyết mọi phẩm Chất xấu! Và nó quay tròn!",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Gỗ Cao su",
				"qty": 24
			}, {
				"name": "Khối lam thạCh",
				"qty": 5
			}, {
				"name": "Bóng nước",
				"qty": 15
			}]
		},
		"icon": "squathe.png"
	},
	"Giáp gỗ Cao su": {
		"name": "Giáp gỗ Cao su",
		"type": "Áo Giáp",
		"level": "Cấp 7",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 7. Đôi khi bạn cảm thấy giống như một con ngựa đua. Đây Chỉ là một trong số những lần như thế.",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Gỗ Cao su",
				"qty": 10
			}, {
				"name": "Thùng Cao su",
				"qty": 4
			}, {
				"name": "Nhánh Chuông gió",
				"qty": 17
			}, {
				"name": "Khối lam thạCh",
				"qty": 3
			}]
		},
		"icon": "sQuest.png"
	},
	"Găng tay Cao su": {
		"name": "Găng tay Cao su",
		"type": "Găng tay",
		"level": "Cấp 7",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 7. Hai lòng bàn tay bạn đang bị dính bởi một Chất siêu dính.",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Gỗ Cao su",
				"qty": 11
			}, {
				"name": "Thùng Cao su",
				"qty": 4
			}, {
				"name": "Vòi Glidopus",
				"qty": 12
			}]
		},
		"icon": "squittens.png"
	},
	"Quần Cao su": {
		"name": "Quần Cao su",
		"type": "Quần Giáp",
		"level": "Cấp 7",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 7. Chúng khá bó nên bạn có thể thấy các bắp Chân gợn lên qua Chất liệu này.",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khối lam thạCh",
				"qty": 3
			}, {
				"name": "Vòi Glidopus",
				"qty": 14
			}]
		},
		"icon": "squaps.png"
	},
	"Mũ Cao su": {
		"name": "Mũ Cao su",
		"type": "Mũ Giáp",
		"level": "Cấp 7",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 7. Việc bao bọc hoàn toàn sẽ giữ Cho cái não của bạn nguyên vẹn.",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khối lam thạCh",
				"qty": 4
			}, {
				"name": "Vỏ Gỗ Cao su",
				"qty": 15
			}, {
				"name": "Thùng Cao su",
				"qty": 5
			}]
		},
		"icon": "squask.png"
	},
	"Sàn Cao su": {
		"name": "Sàn Cao su",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Siêu thấm và Chạm vào rất thíCh, Sàn Cao su có thể làm thành một ngôi nhà trong những hầm ngục ẩm ướt nhất!",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thùng Cao su",
				"qty": 10
			}]
		},
		"icon": "sQuee_flooring.png"
	},
	"Búa Cao su": {
		"name": "Búa Cao su",
		"type": "Vũ Khí",
		"level": "Cấp 7",
		"rarity": "Ngẫu Nhiên",
		"description": "Búa cấp 7. Lấp đầy Thùng Cao su bằng Khối lam thạCh sẽ tạo nên một cây búa cực kì khó dùng. May thay, Chỉ mình bạn làm việc đó.",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Gỗ Cao su",
				"qty": 17
			}, {
				"name": "Thùng Cao su",
				"qty": 6
			}, {
				"name": "Khối lam thạCh",
				"qty": 4
			}]
		},
		"icon": "sQueebop.png"
	},
	"Hố câu Savanna": {
		"name": "Hố câu Savanna",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": " Quần thể cá này khá dễ hoảng loạn.",
		"icon": "savanna_fishing.png",
		"drop": ["Cá đuôi quỷ", "Cá đầu búa", "Rong biển", "Ốc sên cuộn", "Rìu Cá rồng"]
	},
	"Cần Câu Cơ Bản": {
		"name": "Cần Câu Cơ Bản",
		"type": "Công Cụ",
		"level": "Bậc 1",
		"rarity": "Thường",
		"description": "Cần câu bậc 1. Lùa cá mắc vào lưỡi câu bóng bẩy, Chết Chóc của bạn!",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Kén Cao su",
				"qty": 2
			}, {
				"name": "Hổ PháCh",
				"qty": 8
			}, {
				"name": "Que",
				"qty": 10
			}]
		},
		"icon": "basic_fishing_pole.png"
	},
	"Cá đuôi quỷ": {
		"name": "Cá đuôi quỷ",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": " Nó dường như nhìn bạn bằng một ánh mắt quỷ quái.",
		"icon": "deviltailed_slapper.png"
	},
	"Cá đầu búa": {
		"name": "Cá đầu búa",
		"type": "Tiêu Hao",
		"rarity": "Bình Thường",
		"description": " Đầu nó to đùng và cặp má phúng phính. Nó có vẻ lo lắng về điều này. Hồi 436 HP.",
		"icon": "fatheaded_slurper.png"
	},
	"Rong biển": {
		"name": "Rong biển",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": " Chỉ là một miếng Rong biển ngoài hành tinh Bình Thường. Nó cực kì xơ và dai.",
		"icon": "pond_shoot.png"
	},
	"Ốc sên cuộn": {
		"name": "Ốc sên cuộn",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Nó có một cơ quan phụ mỏng manh, thứ mà thỉnh thoảng sẽ ló ra khỏi vỏ để thăm dò xung quanh... Và nó có mùi như hương thảo khô.",
		"icon": "ball_snail.png"
	},
	"Tường Tranh": {
		"name": "Tường Tranh",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Hoàn hảo để giữ lũ quái tránh xa!",
		"recipe": {
			"name": "BS SSSS SS5",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lưỡi Cỏ gai",
				"qty": 5
			}, {
				"name": "Que",
				"qty": 5
			}]
		},
		"icon": "thatChed_wall.png"
	},
	"Rìu Cá rồng": {
		"name": "Rìu Cá rồng",
		"type": "Vũ Khí",
		"level": "Cấp 11",
		"rarity": "Tối Thượng",
		"description": "Rìu cấp 11. Nó không vui về việc bị bắt, nhưng bạn có thể đập đồ bằng nó.",
		"icon": "wobblygong.png"
	},
	"Cây Nha đam": {
		"name": "Cây Nha đam",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Các sinh vật gần đó bị mê hoặc bởi loài cây nhỏ bé này.",
		"icon": "kibweed.png"
	},
	"Bình Nitơ": {
		"name": "Bình Nitơ",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Hỗn hợp này đốt tay bạn khi bạn cầm nó. Cầm lâu thêm tí thì nó nổ. Căn bản là, đừng Chạm vào nó.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 1
			}, {
				"name": "Túi khí độc",
				"qty": 1
			}, {
				"name": "Sữa Wompit",
				"qty": 1
			}]
		},
		"icon": "nitro.png"
	},
	"Bong bóng Glidopus": {
		"name": "Bong bóng Glidopus",
		"type": "Vật Phẩm Tiến Hóa",
		"rarity": "Siêu Cấp",
		"description": "Thứ bản sao hoàn hảo của Glidopus này có thể dễ dàng đánh lừa bất kì con Glidopus thật nào. Tiến hoá Glidopus của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mực Glidopus",
				"qty": 106
			}, {
				"name": "Bóng nước",
				"qty": 62
			}, {
				"name": "Cây Bội thảo",
				"qty": 11
			}, {
				"name": "Tinh Chất Glidopus [Lục]",
				"qty": 13
			}]
		},
		"icon": "glidopus_love_balloon.png"
	},
	"Thùng phóng xạ": {
		"name": "Thùng phóng xạ",
		"type": "Vật Phẩm Tiến Hóa",
		"rarity": "Siêu Cấp",
		"description": "Một cái thùng VUUỪA đủ lượng hoá Chất để ảnh hưởng tới Tartil ở bất kì dạng nào! Tiến hoá Tartil của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thùng Cao su",
				"qty": 37
			}, {
				"name": "Lưỡi Tartil",
				"qty": 15
			}, {
				"name": "Quả Sen cạn",
				"qty": 34
			}, {
				"name": "Tinh Chất Tartil [Nhớp nháp]",
				"qty": 11
			}]
		},
		"icon": "tartil_barrel.png"
	},
	"Dây Biển": {
		"name": "Dây Biển",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Với sức mạnh của cỏ dại, bạn có thể nối mọi thứ vào với nhau!",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Rong biển",
				"qty": 1
			}, {
				"name": "Nhựa nhầy Tartil",
				"qty": 1
			}]
		},
		"icon": "sea_rope.png"
	},
	"Vảy ngọc": {
		"name": "Vảy ngọc",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Cứng như vỏ ốc và cực kì bóng loáng. Bạn có thể nghĩ tới vài người nổi tiếng ở quê nhà, những người không muốn một ít thứ này.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ốc sên cuộn",
				"qty": 1
			}, {
				"name": "Quả Sen cạn",
				"qty": 1
			}]
		},
		"icon": "pearl_scale.png"
	},
	"Pháo": {
		"name": "Pháo",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Biến mọi thứ thành biển lửa. Sao? Ý kiến gì không? Gây 200% ST/giây thành ST Lửa và STVL.",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Túi khí độc",
				"qty": 3
			}, {
				"name": "Thùng Cao su",
				"qty": 3
			}]
		},
		"icon": "firecracker.png"
	},
	"Lọ Độc Trộn": {
		"name": "Lọ Độc Trộn",
		"type": "Trang sức",
		"rarity": "Tốt",
		"description": "Sau khi trộn một đống loại độc với nhau, ta có một lọ độc siêu to khổng lồ! Tăng 20% ST độc.",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bọ ăn khí",
				"qty": 2
			}, {
				"name": "Khối lam thạCh",
				"qty": 1
			}, {
				"name": "Phấn cánh Glutterfly",
				"qty": 1
			}, {
				"name": "Cây Dâu độc",
				"qty": 3
			}]
		},
		"icon": "sp_jar_of_joom_0.png"
	},
	"Bom độc": {
		"name": "Bom độc",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Không thứ gì thíCh một mùi hương độc và Chết Chóc dưới gầm bàn vào buổi sáng cả. Gây 250% ST/giây thành STVL và độc.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Phấn cánh Glutterfly",
				"qty": 3
			}, {
				"name": "Cá đầu búa",
				"qty": 3
			}, {
				"name": "Vỏ Gỗ Cao su",
				"qty": 3
			}]
		},
		"icon": "poison_bomb.png"
	},
	"Đèn An Toàn": {
		"name": "Đèn An Toàn",
		"type": "Trang sức",
		"level": "Cấp 7",
		"rarity": "Siêu Cấp",
		"description": "Với Chiếc đèn đẹp đẽ này ở ngay cạnh, bạn đột nhiên muốn nghịCh lửa. Nhận thêm 20% kháng lửa.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vảy ngọc",
				"qty": 10
			}, {
				"name": "Đèn Dầu Tartil",
				"qty": 4
			}, {
				"name": "Bảo thạch vàng",
				"qty": 13
			}]
		},
		"icon": "davy_lamp.png"
	},
	"Súng phun lửa": {
		"name": "Súng phun lửa",
		"type": "Thiết Bị",
		"rarity": "Siêu Cấp",
		"description": "Không có mùi của sự Cháy bất kể ngày hay đêm. Gây 100% ST/giây thành ST Lửa trong một khu vực.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bình Nitơ",
				"qty": 3
			}, {
				"name": "Đèn Dầu Tartil",
				"qty": 4
			}, {
				"name": "Hổ PháCh",
				"qty": 34
			}]
		},
		"icon": "flamethrower.png"
	},
	"Thanh dược": {
		"name": "Thanh dược",
		"type": "Tiêu Hao",
		"rarity": "Tốt",
		"description": "Nó có vị hạt điều. Nó thanh lọc 1.378 Chất độc ra khỏi cơ thể bạn (+1.378 HP)",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 3
			}, {
				"name": "Hoa Móng gà",
				"qty": 3
			}]
		},
		"icon": "stony_antidote.png"
	},
	"Hỏa Dược": {
		"name": "Hỏa Dược",
		"type": "Tiêu Hao",
		"rarity": "Tốt",
		"description": "Chà nhóc xấu tính này khắp vùng da mềm của bạn! Nó sẽ làm tan biến 1,378 ST Lửa.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 3
			}, {
				"name": "Túi khí độc",
				"qty": 3
			}]
		},
		"icon": "stony_burn_salve.png"
	},
	"Thuốc Phát quang": {
		"name": "Thuốc Phát quang",
		"type": "Tiêu Hao",
		"rarity": "Tốt",
		"description": "Chà thứ này lên cơ thể Cho bạn một ánh sáng lành mạnh! Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 6
			}, {
				"name": "Quả Sen cạn",
				"qty": 2
			}, {
				"name": "Dịch phát quang",
				"qty": 2
			}, {
				"name": "Tinh Chất Glutterfly [Già cỗi]ià Cỗi",
				"qty": 1
			}]
		},
		"icon": "elixir_of_luminescence.png"
	},
	"Mồi câu": {
		"name": "Mồi câu",
		"type": "Hạt Giống",
		"rarity": "Tốt",
		"description": "Thả thứ tuyệt phẩm này vào nước ở Savanna sẽ thu hút hàng đàn cá đến!",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bọ ăn khí",
				"qty": 1
			}, {
				"name": "Rong biển",
				"qty": 3
			}, {
				"name": "Ấu trùng Glidopus",
				"qty": 1
			}]
		},
		"icon": "fish_food.png"
	},
	"Bình Hồi Máu Bậc I": {
		"name": "Bình Hồi Máu Bậc I",
		"type": "Tiêu Hao",
		"rarity": "Tốt",
		"description": "Được làm từ những con Cá đầu búa Chất lượng nhất, lọ thuốc này sẽ Chữa lành mọi khó Chịu của bạn, kể cả những thứ khiến bạn như sắp Chết. Hồi 638 HP.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 3
			}, {
				"name": "Cá đầu búa",
				"qty": 3
			}]
		},
		"icon": "stony_health_potion.png"
	},
	"Gươm Vảy ngọc": {
		"name": "Gươm Vảy ngọc",
		"type": "Vũ Khí",
		"level": "Cấp 9",
		"rarity": "Ngẫu Nhiên",
		"description": "Kiếm cấp 9. Hình dáng giống cái móc lấy cảm hứng từ xuất xứ của nó!",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vảy ngọc",
				"qty": 3
			}, {
				"name": "Dây Biển",
				"qty": 2
			}, {
				"name": "Lưỡi Tartil",
				"qty": 3
			}]
		},
		"icon": "pearlscale_sword.png"
	},
	"Mũ Vảy ngọc": {
		"name": "Mũ Vảy ngọc",
		"type": "Mũ Giáp",
		"level": "Cấp 9",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 9. Nhọn, cứng cáp, và nhìn quý tộc như C...á.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vảy ngọc",
				"qty": 2
			}, {
				"name": "Lưỡi Tartil",
				"qty": 2
			}, {
				"name": "Hổ PháCh",
				"qty": 6
			}, {
				"name": "Dây Biển",
				"qty": 2
			}]
		},
		"icon": "pearlhat.png"
	},
	"Quần Vảy ngọc": {
		"name": "Quần Vảy ngọc",
		"type": "Quần Giáp",
		"level": "Cấp 9",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 9. Ánh bóng loáng của Chúng thật sự làm nổi bật rõ cặp đùi của bạn.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vảy ngọc",
				"qty": 2
			}, {
				"name": "Lưỡi Tartil",
				"qty": 2
			}, {
				"name": "Hổ PháCh",
				"qty": 5
			}]
		},
		"icon": "pearlpants.png"
	},
	"Găng tay Vảy ngọc": {
		"name": "Găng tay Vảy ngọc",
		"type": "Găng tay",
		"level": "Cấp 9",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 9. Tay bạn Chưa bao giờ có vảy như vậy.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vảy ngọc",
				"qty": 2
			}, {
				"name": "Rong biển",
				"qty": 2
			}, {
				"name": "Dây Biển",
				"qty": 2
			}]
		},
		"icon": "pearlgloves.png"
	},
	"Giáp Vảy ngọc": {
		"name": "Giáp Vảy ngọc",
		"type": "Áo Giáp",
		"level": "Cấp 9",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 9. Nó bảo vệ xương ức khỏi các cú đâm, và nó trông thật vi diệu!",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vảy ngọc",
				"qty": 2
			}, {
				"name": "Lưỡi Tartil",
				"qty": 2
			}, {
				"name": "Hổ PháCh",
				"qty": 5
			}, {
				"name": "Dây Biển",
				"qty": 2
			}]
		},
		"icon": "pearlplate.png"
	},
	"Rìu Chiến cánh bướm": {
		"name": "Rìu Chiến cánh bướm",
		"type": "Vũ Khí",
		"level": "Cấp 11",
		"rarity": "Huyền Thoại",
		"description": "Rìu Huyền Thoại cấp 11.Rất nhiều thời gian, tình yêu, máu, mồ hôi và Hổ PháCh đã được cống hiến vào thứ này. THẬT ĐÁNG GIÁ.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Pha lê cánh bướm",
				"qty": 1
			}, {
				"name": "Bình Nitơ",
				"qty": 3
			}, {
				"name": "Khối lam thạCh",
				"qty": 16
			}]
		},
		"icon": "the_butterfly.png"
	},
	"Rương gỗ": {
		"name": "Rương gỗ",
		"type": "Rương",
		"rarity": "Bình Thường",
		"description": "RƯƠNG BẰNG CÂY LÀ TỐT NHẤT ĐẤY.",
		"icon": "wooden_Chest.png"
	},
	"Giường đá": {
		"name": "Giường đá",
		"type": "Đồ Nội Thất",
		"rarity": "Bình Thường",
		"description": "Một Chỗ đẹp để Chợp mắt nhanh một lúc. Huyền thoại nói rằng khi bạn đang ngủ, toàn bộ cơ thể bạn sẽ hồi phục.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 20
			}, {
				"name": "Lá Cỏ gai",
				"qty": 8
			}]
		},
		"icon": "stone_bed.png"
	},
	"Mai Zug": {
		"name": "Mai Zug",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Có vẻ như bạn có thể cạy cái mai một cáCh thận trọng khỏi con Zug bằng việc đập hoặc đâm nó đến Chết. ĐÓ LÀ KHOA HỌC!",
		"icon": "zug_shell.png"
	},
	"Bugi phóng điện": {
		"name": "Bugi phóng điện",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Khi những con Zug đủ lớn, Chúng sẽ tự Chế tạo những Chiếc bugi, và tự cấy vào vỏ của Chúng. Đó là nghi thức truyền thống thể hiện sự kế thừa văn hoá. Bạn sẽ không thể hiểu nổi Chúng đâu.",
		"icon": "zug_sparkplug.png"
	},
	"Xương bánh Chè Zug": {
		"name": "Xương bánh Chè Zug",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Mấy con Zug có những cái xương bánh Chè phức tạp không thể tin nổi, nó cạnh tranh trực tiếp với một tá thứ khác, như xương bánh Chè của con người.",
		"icon": "zug_kneecap.png"
	},
	"Da Zug nhiễm điện": {
		"name": "Da Zug nhiễm điện",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Khi một con Zug đã thuần hoá ăn quá no, nó sẽ phải thay da. Và giật điện bạn mỗi khi Chạm vào!",
		"recipe": {
			"name": "Zug",
			"output_qty": 1,
			"type": "Thú Nuôi",
			"ingredients": [{
				"name": "Cá đầu búa",
				"qty": 2
			}, {
				"name": "Bụi Pha lê",
				"qty": 1
			}]
		},
		"icon": "charged_zug_molt.png"
	},
	"Cuốc Móng Vuốt": {
		"name": "Cuốc Móng Vuốt",
		"type": "Công Cụ",
		"level": "Bậc 2",
		"rarity": "Bình Thường",
		"description": "Cuốc Chim bậc 2. Ép dập Móng Wat thành Mai Zug dường như là ý hay ngay lúc này. VÀ NÓ VẪN SẼ LÀM! Thứ này không thể phá được Pha lê Hoàng hôn!",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Móng Wat",
				"qty": 2
			}, {
				"name": "Mai Zug",
				"qty": 16
			}, {
				"name": "Cuốc Chim",
				"qty": 1
			}, {
				"name": "Vảy ngọc",
				"qty": 2
			}]
		},
		"icon": "shellfinger_pick.png"
	},
	"Lò nung Pha lê": {
		"name": "Lò nung Pha lê",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Pha lê Hoàng hôn có thể Chịu một nhiệt độ cực lớn khiến Chúng hoàn hảo để TÍCh TRỮ MỘT NHIỆT LƯỢNG KHỔNG LỒ!",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 5
			}, {
				"name": "Bình Nitơ",
				"qty": 1
			}, {
				"name": "Mai Zug",
				"qty": 24
			}, {
				"name": "Cánh Wat",
				"qty": 8
			}]
		},
		"icon": "crystal_kiln.png"
	},
	"Lăng Kính Pha lê": {
		"name": "Lăng Kính Pha lê",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Khi Chuyển hoá thành hình lăng trụ và bị lấp đầy bởi vô số linh hồn Glidopus con, Pha lê Hoàng hôn nhất định sẽ trở thành một khối pha lê quái đản!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 1
			}, {
				"name": "Ấu trùng Glidopus",
				"qty": 1
			}]
		},
		"icon": "dusk_prism.png"
	},
	"Đèn plasma": {
		"name": "Đèn plasma",
		"type": "Vật Phẩm Tiến Hóa",
		"rarity": "Siêu Cấp",
		"description": "Lũ Zug bị thu hút bởi ái lực của bất cứ thứ gì có điện. Quả cầu plasma thật sự gây ấn tượng. Tiến hoá Zug của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 26
			}, {
				"name": "Bugi phóng điện",
				"qty": 17
			}, {
				"name": "Tinh Chất Zug [Ngoại cỡ]goại Cỡ",
				"qty": 13
			}, {
				"name": "Xương bánh Chè Zug",
				"qty": 74
			}]
		},
		"icon": "zuglaball.png"
	},
	"Búa cánh dơi": {
		"name": "Búa cánh dơi",
		"type": "Vật Phẩm Tiến Hóa",
		"rarity": "Siêu Cấp",
		"description": "Wat nổi tiếng với tình yêu dành Cho thể thao! Tiến hóa Wat của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cánh Wat",
				"qty": 43
			}, {
				"name": "Tinh Chất Wat [Siêu cường]",
				"qty": 8
			}, {
				"name": "Móng Wat",
				"qty": 15
			}, {
				"name": "Bụi Pha lê",
				"qty": 9
			}]
		},
		"icon": "wat_bat.png"
	},
	"Hạt giống Pha lê": {
		"name": "Hạt giống Pha lê",
		"type": "Hạt Giống",
		"rarity": "Tốt",
		"description": "Bằng việc kết hợp Pha lê Hoàng hôn với một vài thứ linh tinh khác, bạn đã có thể \"trồng\" được Pha lê Hoàng hôn!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bụi Pha lê",
				"qty": 1
			}, {
				"name": "Bóng nước",
				"qty": 1
			}]
		},
		"icon": "dusk_seed.png"
	},
	"Biển viết được": {
		"name": "Biển viết được",
		"type": "Biển Hiệu",
		"rarity": "Bình Thường",
		"description": "Một cái biển mà bạn có thể viết được! Với nó, bạn có thể đánh dấu khu vực trên bản đồ. ĐÓ LÀ MỘT CUỘC CÁCh MẠNG LỚN!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 1
			}, {
				"name": "Quả Sen cạn",
				"qty": 1
			}]
		},
		"icon": "writable_sign.png"
	},
	"Thuốc Cường tráng": {
		"name": "Thuốc Cường tráng",
		"type": "Tiêu Hao",
		"rarity": "Tốt",
		"description": "Mọi người đều biết rằng bắp tay càng lớn, lực đập đồ càng mạnh. Tăng 5% sát thương gây ra. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Cái Vạc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bọng mỡ",
				"qty": 1
			}, {
				"name": "Rận hút máu",
				"qty": 1
			}, {
				"name": "Đỉa",
				"qty": 1
			}, {
				"name": "Tinh Chất Snorble [Cháy nắng]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_bulging_biceps.png"
	},
	"Sàn Pha lê": {
		"name": "Sàn Pha lê",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Nó là một trong những thứ cứng nhất, hiếm nhất Savanna. Vậy nên... cáCh nào tốt hơn để dùng nó thay vì ĐI QUA LẠI TRÊN NÓ?",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 10
			}]
		},
		"icon": "crystal_floor.png"
	},
	"Rìu Pha lê": {
		"name": "Rìu Pha lê",
		"type": "Vũ Khí",
		"level": "Cấp 11",
		"rarity": "Ngẫu Nhiên",
		"description": "Rìu cấp 11. Rìu Pha lê cực kì sắc khi nó vỡ thành từng mảnh. Khá tuyệt Cho một phát ĐÂM!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mai Zug",
				"qty": 22
			}, {
				"name": "Mảnh Pha lê",
				"qty": 5
			}, {
				"name": "Búi lông Wat",
				"qty": 13
			}]
		},
		"icon": "crystal_axe.png"
	},
	"Mũ Pha lê": {
		"name": "Mũ Pha lê",
		"type": "Mũ Giáp",
		"level": "Cấp 11",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 11. Những tia lửa kíCh thíCh não của bạn giúp bạn suy nghĩ thông thoáng hơn!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 3
			}, {
				"name": "Bugi phóng điện",
				"qty": 2
			}, {
				"name": "Búi lông Wat",
				"qty": 9
			}, {
				"name": "Da Zug nhiễm điện",
				"qty": 1
			}]
		},
		"icon": "duskhelm.png"
	},
	"Giáp Pha lê": {
		"name": "Giáp Pha lê",
		"type": "Áo Giáp",
		"level": "Cấp 11",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 11. Đồ pha lê thật tuyệt, nó phản Chiếu lên bề mặt từng đường cong của bạn.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 3
			}, {
				"name": "Mai Zug",
				"qty": 14
			}, {
				"name": "Cây Trụ thảo",
				"qty": 1
			}, {
				"name": "Búi lông Wat",
				"qty": 8
			}]
		},
		"icon": "duskjacket.png"
	},
	"Quần Pha lê": {
		"name": "Quần Pha lê",
		"type": "Quần giáp",
		"level": "Cấp 11",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 11. Nó khá cứng, nhưng bạn tin rằng bạn có thể khiến nó dùng được.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 3
			}, {
				"name": "Xương bánh Chè Zug",
				"qty": 6
			}, {
				"name": "Búi lông Wat",
				"qty": 7
			}]
		},
		"icon": "duskpants.png"
	},
	"Búa Thanos": {
		"name": "Búa Thanos",
		"type": "Vũ Khí",
		"level": "Cấp 11",
		"rarity": "Ngẫu Nhiên",
		"description": "Búa cấp 11. Nếu bạn là slamma, hãy cẩn thận với jamma. Một sự cân bằng hoàn hảo.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "`",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 3
			}, {
				"name": "Cây Trụ thảo",
				"qty": 1
			}, {
				"name": "Móng Wat",
				"qty": 2
			}]
		},
		"icon": "sp_weapon_slamjamma_0.png"
	},
	"Găng tay Pha lê": {
		"name": "Găng tay Pha lê",
		"type": "Găng tay",
		"level": "Cấp 11",
		"rarity": "Ngẫu nhiên",
		"description": "Găng tay cấp 11. Thêm một lớp da Wat sẽ giúp bạn ấm đến tận cùi Chỏ!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 3
			}, {
				"name": "Cánh Wat",
				"qty": 5
			}, {
				"name": "Búi lông Wat",
				"qty": 9
			}]
		},
		"icon": "duskmitts.png"
	},
	"Tường Pha lê": {
		"name": "Tường Pha lê",
		"type": "Kiến trúc",
		"rarity": "Ngẫu nhiên",
		"description": "Những bức Tường Pha lê này rất... NHẠY ÂM. Bạn có thể nghe giọng bản thân vọng lại khi đứng gần nó.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 5
			}]
		},
		"icon": "crystal_wall.png"
	},
	"Cửa Pha lê": {
		"name": "Cửa Pha lê",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Cái cửa vuông này khiến mọi thứ an toàn hơn, nhưng CẨN THẬN CẲNG ChÂN BẠN.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 2
			}]
		},
		"icon": "crystal_door.png"
	},
	"Chậu Nha Đam": {
		"name": "Chậu Nha Đam",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Luôn là tốt khi tíCh trữ một kho Nha đam tự tái sinh để giữ Cho vật nuối của bạn luôn vui vẻ.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Nha đam",
				"qty": 1
			}, {
				"name": "Khúc gỗ",
				"qty": 8
			}]
		},
		"icon": "potted_kibweed.png"
	},
	"Chậu Nấm mặt trời": {
		"name": "Chậu Nấm mặt trời",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Hãy Chắc Chắn rằng hãy đặt Chúng trong bóng râm! Ah, tôi đang đùa với ai đây? Không hề có bóng râm nào trên hành tinh này cả. Cứ đặt Chúng ở đâu tuỳ bạn.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nấm mặt trời",
				"qty": 3
			}, {
				"name": "Đá nhẵn",
				"qty": 8
			}]
		},
		"icon": "potted_sunshroom.png"
	},
	"Chậu Bội thảo": {
		"name": "Chậu Bội thảo",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Sẽ luôn là hữu íCh nếu dự trữ Bội thảo ở xung quanh. Bạn biết đấy... Cho mục đíCh y tế.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Bội thảo",
				"qty": 1
			}, {
				"name": "Mảnh Pha lê",
				"qty": 2
			}]
		},
		"icon": "potted_bulbi.png"
	},
	"Bóng Độc": {
		"name": "Bóng Độc",
		"type": "Trang sức",
		"rarity": "Tốt",
		"description": "Bạn có thể lấy nó cũng như có thể dọn nó ra! Cung cấp 5% tỉ lệ kháng và gây ST Độc lên mục tiêu.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 58
			}, {
				"name": "Dịch phát quang",
				"qty": 16
			}, {
				"name": "Phấn cánh Glutterfly",
				"qty": 3
			}, {
				"name": "Bóng nước",
				"qty": 27
			}]
		},
		"icon": "glorb.png"
	},
	"Ốp la phẫn nộ": {
		"name": "Ốp la phẫn nộ",
		"type": "Thức ăn sinh vật",
		"rarity": "Bình Thường",
		"description": "Thú cưng của bạn sẽ rất thíCh món siêu cay nhưng hấp dẫn này, Chúng sẽ rơi vào trạng thái đồ sát! Tăng 15% ST thú cưng trong 20 phút.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Dâu độc",
				"qty": 1
			}, {
				"name": "Cây Nha đam",
				"qty": 1
			}, {
				"name": "Tinh Chất Wompit[Cứng cáp][Cứng cáp]",
				"qty": 1
			}]
		},
		"icon": "anger_omelet.png"
	},
	"Chậu Dâu độc": {
		"name": "Chậu Dâu độc",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Dâu độc khá là hiếm. Vài Chậu cây này xung quanh nhà sẽ là ý hay!",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Dâu độc",
				"qty": 1
			}, {
				"name": "Đá nhẵn",
				"qty": 8
			}]
		},
		"icon": "potted_bumpberry.png"
	},
	"Cây Đậu mụn xanh": {
		"name": "Cây Đậu mụn xanh",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Vỏ của những quả hạt kín phát triển trên cái cây nhiều nhánh này Chứa đầy một loại Chất nhầy thơm, thứ sẽ Cháy dữ dội khi bạn Chà khắp người.",
		"icon": "blegh.png",
		"drop": ["Đậu mụn xanh"]
	},
	"Cây Ngưng mạCh": {
		"name": "Cây Ngưng mạCh",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Nhìn thì nó như một cái cây, nhưng thực ra nó đang kết nối với hệ mạCh của Bawg.",
		"icon": "artree.png",
		"drop": ["Bọng mỡ", "MạCh Bawg", "Rận hút máu", "Hạt giống Ngưng mạCh"]
	},
	"Cây Thùa gai": {
		"name": "Cây Thùa gai",
		"type": "Tiêu Hao",
		"rarity": "Bình Thường",
		"description": "Một loại cây lai giữa Cây Thùa gai và móng vuốt, loại sinh vật có vị taco này hồi 1,560 HP.",
		"icon": "clossom.png"
	},
	"Huyết khối": {
		"name": "Huyết khối",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Thứ này TRƯƠNG PHỒNG lên với rất nhiều Chất lỏng trong đấy! Nó mà nổ là dọn cực lắm đấy. ",
		"icon": "thrombyte.png"
	},
	"Cây Hồ thảo": {
		"name": "Cây Hồ thảo",
		"type": "Tiêu Hao",
		"rarity": "Bình Thường",
		"description": "Sinh vật kí sinh này rút mòn sự sống của Bawg. ĐÃ TỚI LÚC TRẢ GIÁ! Hồi 2,234 HP khi ăn. ",
		"icon": "pyn.png"
	},
	"Con nhộng": {
		"name": "Con nhộng",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Bất cứ khi nào bạn đứng cạnh Cây Nắp ấm với một thứ ngoe nguẩy này trong tay, cái Cây Nắp ấm trông có vẻ rất thíCh thú. ",
		"icon": "bloo.png"
	},
	"Cây Cự cốt": {
		"name": "Cây Cự cốt",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Những Cây Cự cốt này có vẻ khiến Bawg cảm thấy đau đớn. Bạn sẽ làm điều có íCh khi loại bỏ Chúng.",
		"icon": "bone_spur.png",
		"drop": ["Sáp cây Cự cốt", "Vỏ sừng", "Cục vàng", "Hạt giống Cự cốt"]
	},
	"Cây Tĩnh điện": {
		"name": "Cây Tĩnh điện",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Cây Tĩnh điện là một nhánh cây của tế bào thần kinh bằng cáCh nào đó nhô ra từ phần thịt của Bawg. Nó phát ra tiếng tanh táCh với điện!",
		"icon": "nurva.png",
		"drop": ["Sợi trục Tĩnh điện", "Mô cáCh điện", "Gai cột sống", "Hạt giống Tĩnh điện"]
	},
	"Cây Cẩu tíCh": {
		"name": "Cây Cẩu tíCh",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Chỉ là một mẩu tóc thông thường, cỡ con người và không thể Bình Thường hơn. ",
		"icon": "bawg_hair.png",
		"drop": ["Nhánh cây Cẩu tíCh", "Vỏ Cẩu tíCh", "Chấy", "Hạt Cẩu tíCh"]
	},
	"Rễ bụt mọc": {
		"name": "Rễ bụt mọc",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Loài cây này phát triển sâu bên trong mô của Bawg. Ở góc độ nào đó, Chúng rất giống khoai tây. Nhưng ở một góc độ khác, Chúng Chẳng giống khoai tây Chút nào.",
		"icon": "tuber.png",
		"drop": ["Khúc cây Bụt mọc"]
	},
	"Cây Téo": {
		"name": "Cây Téo",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Loại cây/sinh vật hình ngón tay này mọc Chi Chít những bọng mụn màu đỏ có vị như quả anh đào. Chúng luôn ngần ngại khi sắp được Chọn.",
		"icon": "pikkaye.png",
		"drop": ["Quả Téo"]
	},
	"Mũ xương khổng lồ": {
		"name": "Mũ xương khổng lồ",
		"type": "Mũ Giáp",
		"level": "Cấp 12",
		"rarity": "Huyền Thoại",
		"description": "Mũ giáp cấp 12. Sau khi cố gắng tìm Chiếc đầu lâu lớn nhất xung quanh, bạn đã gắn kết Chúng lại thành thứ mà mọi người Cho là... một Chiếc mũ tuyệt vời.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xương hóa thạCh khổng lồ",
				"qty": 1
			}, {
				"name": "Đèn Dầu Tartil",
				"qty": 4
			}, {
				"name": "Vảy ngọc",
				"qty": 10
			}]
		},
		"icon": "giantbone_helm.png"
	},
	"Vụn xương": {
		"name": "Vụn xương",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Mảnh vật Chất lớn này Chắc Chắn có thể tìm thấy trong da thịt của Bawg. Lấy Chúng ra khiến Bawg cảm thấy dễ Chịu hơn.",
		"icon": "splinter.png"
	},
	"Actiso": {
		"name": "Actiso",
		"type": "Tiêu Hao",
		"rarity": "Bình Thường",
		"description": "Cái cây bé bỏng này ngập tràn vị hoa quả. MMMMM! Hồi 591 Máu.",
		"icon": "tusker.png"
	},
	"Cây Nắp ấm": {
		"name": "Cây Nắp ấm",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Những gã bé nhỏ này thíCh đi theo đàn, và Chúng luôn luôn đói. Cho Chúng ăn, Chúng sẽ trả ơn bạn bằng một thứ gì đó!",
		"icon": "jollyChomp.png",
		"drop": ["Đá Cây Nắp ấm", "Thịt Nắp ấm", "Chất dính Nắp ấm", "Thỏ Cụt Tai", "Hạt giống Nắp ấm"]
	},
	"Vỏ xương Satgat": {
		"name": "Vỏ xương Satgat",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Sau khi bị lấy ra một cáCh ép buộc khỏi cơ thể Satgat, bộ khung xương sáng lên một lúc và tạo ra âm thanh vo ve lớn. Nó khiến bạn cảm thấy khó Chịu.",
		"icon": "satgat_exoskeleton.png"
	},
	"Ruột Satgat": {
		"name": "Ruột Satgat",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Liếm hai đầu ruột sẽ bị giật điện đấy. Cơ mà ngon. Không biết làm sao để cảm nhận vị khi đang tê lưỡi nhỉ??",
		"icon": "satgat_Chemoreceptors.png"
	},
	"Lụa Satgat": {
		"name": "Lụa Satgat",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Thu hoạCh từ Satgat đã thuần hóa. Nó mềm cực kì, mềm đến mức bạn có thể làm một Chiếc quần lót đắt tiền từ nó!",
		"recipe": {
			"name": "Satgat",
			"output_qty": 1,
			"type": "Thú Nuôi",
			"ingredients": [{
				"name": "Đỉa",
				"qty": 1
			}, {
				"name": "Bọng mỡ",
				"qty": 1
			}, {
				"name": "Da Snorble",
				"qty": 2
			}]
		},
		"icon": "satgat_silk.png"
	},
	"Thịt Satgat": {
		"name": "Thịt Satgat",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Mặc dù lũ Satgat có vỏ rất cứng, thịt của Chúng rất mềm và mịn. Giống như những con sò, Chỉ đáng yêu hơn thôi.",
		"icon": "satgat_flesh.png"
	},
	"Túi khí Snorble": {
		"name": "Túi khí Snorble",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Khi bạn vắt kiệt nó, nó đột ngột phát ra một tiếng nghe như tiếng đánh rắm. Nó sẽ rất tuyệt để trêu người khác, Chỉ khi bạn không phải con người duy nhất trên hành tinh này.",
		"icon": "snorble_airsak.png"
	},
	"Polymer Snorble": {
		"name": "Polymer Snorble",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Lũ Snorble dùng thứ này như 1 loại tiền tệ. Nếu bạn đối xử tốt với một con Snorble đã thuần hoá, Chúng sẽ Cho bạn một ít!",
		"recipe": {
			"name": "Snorble",
			"output_qty": 1,
			"type": "Pet",
			"ingredients": [{
				"name": "Khúc cây Bụt mọc",
				"qty": 1
			}, {
				"name": "Tơ Huyết khối",
				"qty": 2
			}]
		},
		"icon": "snorble_mucusak.png"
	},
	"Da Snorble": {
		"name": "Da Snorble",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Nó thật sự lởm Chởm ở một mặt nhưng mặt còn lại thì thô và ẩm ướt. Có một Chút không thuận lợi ở cả 2 mặt, thật sự là vậy.",
		"icon": "snorble_skin.png"
	},
	"Lưỡi Snorble": {
		"name": "Lưỡi Snorble",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Lưỡi Snorble là một thứ rất nhạy cảm, bởi bên trong nó Chứa phần não thứ 3 của Snorble. Khi bạn Chọc vào nó, nó sẽ cố gắng rụt lại",
		"icon": "snorble_uvula.png"
	},
	"Dãi Throak": {
		"name": "Dãi Throak",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "This sticky substance is extremely smelly, and it would probably kill you if you covered yourself with it and set yourself on fire.",
		"icon": "throak_fluoros.png"
	},
	"Thạch Throak": {
		"name": "Thạch Throak",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Quả bóng Chất nhầy này được Chiết ra từ cơ thể của một con Throak đã thuần hoá. Nó không ngừng rung rinh!",
		"recipe": {
			"name": "Throak",
			"output_qty": 1,
			"type": "Pet",
			"ingredients": [{
				"name": "Đậu mụn xanh",
				"qty": 1
			}, {
				"name": "Myelar",
				"qty": 2
			}]
		},
		"icon": "throak_jelly.png"
	},
	"Tuyến trùng Throak": {
		"name": "Tuyến trùng Throak",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Tuyến trùng này Chứa một lượng lớn Chất hoá học dùng để đóng băng các thứ, làm Chậm Chúng một cáCh kinh khủng. Nếu bạn liếm nó, lưỡi bạn sẽ dính vào nó.",
		"icon": "throak_nematocyte.png"
	},
	"Throak Polyp": {
		"name": "Throak Polyp",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Nó dường như là một phiên bản nhỏ của Throak. Nó trong Chẳng đáng yêu Chút nào.",
		"icon": "throak_polyp.png"
	},
	"Xúc tu Throak": {
		"name": "Xúc tu Throak",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Nó trông có vẻ như vẫn sống dù đã bị đứt lìa khỏi cơ thể con Throak. Nó cứ gần như là một sinh vật sống riêng biệt vậy.",
		"icon": "throak_tentacle.png"
	},
	"Đá Cây Nắp ấm": {
		"name": "Đá Cây Nắp ấm",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "JollyChomps eat these hard stones and use them to grind up whatever they eat. They even use the stones to somehow convert food into other useful materials!",
		"icon": "jolly_gastrolith.png"
	},
	"Chất dính Nắp ấm": {
		"name": "Chất dính Nắp ấm",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Nắp ấm có khả năng phun ra bóng dính, nhớt để đuổi những kẻ săn mồi. Nhưng nó hiếm khi hoạt động.",
		"icon": "jolly_fulmar.png"
	},
	"Hạt giống Nắp ấm": {
		"name": "Hạt giống Nắp ấm",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Cây Nắp ấm tí hon này giống như một đứa bé. Chúng phải mất đi đôi mắt của Chúng bằng cáCh nào đó. Việc này thật vô nghĩa, nhưng đó là việc Chúng phải làm.",
		"icon": "jollybab.png"
	},
	"Thịt Nắp ấm": {
		"name": "Thịt Nắp ấm",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Thứ tuyệt phẩm này được nôn ra từ miệng của Cây Nắp ấm trong điều kiện thíCh hợp. Nó có mùi và vị như trái cây!",
		"icon": "jolly.png"
	},
	"Tơ Huyết khối": {
		"name": "Tơ Huyết khối",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Cường hoá Bơm Huyết khối với vài nguyên liệu từ Bawg Cho phép bạn Chiết táCh ra loại sợi dai này. Mặn thật đấy!",
		"recipe": {
			"name": "Bơm Huyết khối",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Con nhộng",
				"qty": 3
			}, {
				"name": "Mỡ Vomma",
				"qty": 3
			}]
		},
		"icon": "thrombyte_fibrin.png"
	},
	"Khúc cây Bụt mọc": {
		"name": "Khúc cây Bụt mọc",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Sinh vật nhỏ bé nào mọc lên từ lỗ Chân lông của Bawg. Nó trông có vẻ không vui khi bị di Chuyển khỏi nhà của nó, nhưng bạn không quan tâm.",
		"icon": "extracted_tuber.png"
	},
	"Tảo Phát Quang": {
		"name": "Tảo Phát Quang",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Thứ sinh vật này bằng cáCh nào đó có thể sống trong axit của Bawg. Nó biến axit thành Chất phát quang sinh học, và dụ những Sinh Vật Phù Du bất cẩn để ăn thịt.",
		"icon": "luminalgae.png"
	},
	"Ống san hô": {
		"name": "Ống san hô",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Có những sinh vật nhỏ bé sống trong đây. Chúng không thíCh rời khỏi môi trường axit của Bawg, nhưng bạn lại không quan tâm đến điều đó.",
		"icon": "coral_tubes.png"
	},
	"Xương cá đầu búa": {
		"name": "Xương cá đầu búa",
		"type": "Tiêu Hao",
		"rarity": "Bình Thường",
		"description": "Axít từ Bawg đã thanh lọc ra tinh Chất hồi phục từ con Cá đầu búa này. Hồi 2,234 HP!",
		"icon": "skeletonized_fathead.png"
	},
	"Đỉa": {
		"name": "Đỉa",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Ma cà rồng tự bám mình vào bất cứ thứ gì nhưng không thể tự nhúng mình xuống nước. Răng nanh làm Chúng rất khó gỡ ra. May thay, Chúng đang kẹt.",
		"icon": "vampry.png"
	},
	"Sinh Vật Phù Du": {
		"name": "Sinh Vật Phù Du",
		"type": "Mảnh Thành Phần",
		"rarity": "Siêu Cấp",
		"description": "Sinh vật này Chỉ sống, trôi nổi và bị ăn. Một cuộc sống thật ngu ngốc.",
		"icon": "plonktan.png"
	},
	"Sợi trục Tĩnh điện": {
		"name": "Sợi trục Tĩnh điện",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Sợi trục dài, mảnh của Cây Tĩnh điện. Nó dẫn điện cực kì tốt, nhưng cực kì tệ để nướng bánh.",
		"icon": "nurvaxon.png"
	},
	"Gai cột sống": {
		"name": "Gai cột sống",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Nhánh Cây Tĩnh điện thường Chọc vào mắt những sinh vật lai vãng gần nó. Nếu bạn nhìn gần quá nó sẽ Chọc vào mắt bạn. Bạn không biết nó sẽ làm gì đâu.",
		"icon": "dendrite_sPine.png"
	},
	"Mô cáCh điện": {
		"name": "Mô cáCh điện",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Thứ mô xốp này có thể được táCh ra từ các Cây Tĩnh điện, và nó mang lại khả năng cáCh điện tuyệt vời!",
		"icon": "myelar.png"
	},
	"Hạt giống Tĩnh điện": {
		"name": "Hạt giống Tĩnh điện",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Hạt nhỏ này có thể bị kẹt vào thịt của Bawg và phát triển thành một Cây Tĩnh điện mới. Thật kì quặc khi bạn nghĩ về \"Chuyện đó\". Bớt nghĩ bậy bạ đi ",
		"icon": "nurva_seed.png"
	},
	"Rìu Cá tím": {
		"name": "Rìu Cá tím",
		"type": "Vũ khí",
		"level": "Cấp 21",
		"rarity": "Tối Thượng",
		"description": "Rìu cấp 21. Bạn không biết phải giữ nó bằng gì. Nó rất sắc, tới nỗi không có gì có thể Chạm vào nó.",
		"icon": "jackagong.png"
	},
	"Râu Bamli": {
		"name": "Râu Bamli",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Bộ râu huyền thoại của một con Bamli. Khi bạn Chăm Chú nhìn, nó sẽ phản Chiếu lại hình ảnh của linh hồn bạn.",
		"icon": "bamstache.png"
	},
	"Sừng Bamli": {
		"name": "Sừng Bamli",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Bạn lấy cái sừng này ra từ đầu của con Bamli bằng vũ lực. Nó thật kinh khủng. Đồ quái vật.",
		"icon": "bamli_horn.png"
	},
	"Bóng khí Bamli": {
		"name": "Bóng khí Bamli",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Để hỗ trợ trong khi bay, Bamli bơm căng bóng khí của nó lên. Khi bóng khí đã đủ căng, nó trở nên trôi nổi trong không khí và bay vút lên như một con đại bàng oai hùng.",
		"icon": "bamli_flightbladder.png"
	},
	"Hormone lạ": {
		"name": "Hormone lạ",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Những con Bamli đã thuần hoá sản sinh ra rất nhiều hormone này. Nhưng ta hoàn toàn không biết Chúng dùng làm gì.",
		"recipe": {
			"name": "Bamli",
			"output_qty": 1,
			"type": "Pet",
			"ingredients": [{
				"name": "Sáp cây Cự cốt",
				"qty": 1
			}, {
				"name": "Cây Hồ thảo",
				"qty": 3
			}]
		},
		"icon": "painsulin.png"
	},
	"Vomma con": {
		"name": "Vomma con",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Một con Vomma con bí ẩn. Nó cố gắng xé nát cánh tay của bạn bất kì khi nào bạn nựng nó. Đứa bé thật đáng yêu.",
		"icon": "vompole.png"
	},
	"Mỡ Vomma": {
		"name": "Mỡ Vomma",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Vomma được bao phủ bởi những thớ thịt. Mục đíCh Chính của Chúng có vẻ là Chỉ để trang trí. Vomma cái rất thíCh những con đực 'nhiều thịt'.",
		"icon": "vlap.png"
	},
	"Bóng gelatin": {
		"name": "Bóng gelatin",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Domesticated Vomma produce these tasty balls of gelatin on a regular basis. They remind you a lot of tapioka.",
		"recipe": {
			"name": "Vomma",
			"output_qty": 1,
			"type": "Pet",
			"ingredients": [{
				"name": "Con nhộng",
				"qty": 2
			}, {
				"name": "Actiso",
				"qty": 1
			}]
		},
		"icon": "boba.png"
	},
	"Ch*m Vomma": {
		"name": "Ch*m Vomma",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Đây là nơi những con Vomma con được tạo ra. Bạn không Chắc tại sao lại cảm thấy bị ép buộc nhặt nó lên và mang nó đi xung quanh.",
		"icon": "vomma_babymaker.png"
	},
	"Hố câu Bawg": {
		"name": "Hố câu Bawg",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Thứ gì đó đang Chuyển động dưới làn axít...",
		"icon": "bawg_fishing.png",
		"drop": ["Đỉa", "Xương cá đầu búa", "Ống san hô", "Sinh Vật Phù Du", "Tảo Phát Quang", "Rìu Cá tím"]
	},
	"MạCh Bawg": {
		"name": "MạCh Bawg",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "MạCh này mang một Chất lỏng xanh đi xung quanh trong cơ thể Bawg. Nó thật sự co giãn và cực kì đàn hồi. Bạn có lẽ có thể quất thứ gì đó với nó!",
		"icon": "blube.png"
	},
	"Rận hút máu": {
		"name": "Rận hút máu",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Nhóc tí nị này bám vào MạCh Bawg và hút máu. Việc đó khá thô bỉ, nhưng có vẻ nhóc đó không bận tâm.",
		"icon": "blood_louse.png"
	},
	"Bọng mỡ": {
		"name": "Bọng mỡ",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Gãy ra từ một nhánh của Cây Ngưng mạCh, cái túi Chảy xệ này Chứa đầy mỡ trong đấy.",
		"icon": "sagtatoe.png"
	},
	"Hạt giống Ngưng mạCh": {
		"name": "Hạt giống Ngưng mạCh",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Bằng việc cắm thứ này vào Đất ở Bawg, bạn đã thúc đẩy quá trình tăng trưởng của Cây Ngưng mạCh. Thứ mà sau này bị bạn đập tơi bời ấy.",
		"icon": "artree_seed.png"
	},
	"Đậu mụn xanh": {
		"name": "Đậu mụn xanh",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Sau khi bứt thứ này ra từ Chòm hạt của Cây Đậu mụn xanh xấu xa, bạn đã có thể quan sát bên trên nó gần hơn. Và bạn kết luận rằng nó gồ ghề.",
		"icon": "bleghpod.png"
	},
	"Vỏ Cẩu tíCh": {
		"name": "Vỏ Cẩu tíCh",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Giống như vỏ cây, vỏ từ những sợi lông khổng lồ của Bawg rất cứng và khô. Chúng có vẻ dễ Cháy, nhưng có lẽ mùi sẽ rất kinh khủng.",
		"icon": "hairbark.png"
	},
	"Nhánh cây Cẩu tíCh": {
		"name": "Nhánh cây Cẩu tíCh",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Bawg Chắc Chắn Chưa bao giờ được nghe về Dầu dưỡng tóc.",
		"icon": "split_end.png"
	},
	"Quả Téo": {
		"name": "Quả Téo",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Thứ này được tặng Cho bạn Cho bạn từ một Cây Téo thân thiện. Phải, đúng là vậy đấy. Dành Cho bạn.",
		"icon": "ayeayes.png"
	},
	"Chấy": {
		"name": "Chấy",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Thứ này được Chôn sâu trong một búi tóc khổng lồ. Chỉ nhìn nó thôi đã làm bạn cảm thấy ngứa ngáy",
		"icon": "hair_louse.png"
	},
	"Cục vàng": {
		"name": "Cục vàng",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Bằng cáCh nào đó, những Cây Cự cốt khổng lồ sẽ nhận thấy của Bawg có thể phát triển những mảnh vàng bên trong Chúng. Bạn nên điều tra Chúng nhiều hơn, để phục vụ khoa học.",
		"icon": "spur_gold.png"
	},
	"Vỏ sừng": {
		"name": "Vỏ sừng",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Bạn đã có thể táCh thứ này ra khỏi một Cây Cự cốt. Nó rất cứng, hình Vỏ sò và bóng loáng. Sẽ rất tuyệt nếu dùng nó để Chế tạo xe.",
		"icon": "grenamel.png"
	},
	"Sáp cây Cự cốt": {
		"name": "Sáp cây Cự cốt",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Bạn đã cố gắng táCh thứ này ra khỏi gốc nền của Cây Cự cốt trước khi phá huỷ nó. Giống kiểu như nha sĩ vậy.",
		"icon": "spur_gum.png"
	},
	"Lông mi Wojack": {
		"name": "Lông mi Wojack",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Thì ra đây là cáCh Wojack di Chuyển dưới Đất. Nó sẽ không ngừng ngọ nguậy.",
		"icon": "wojack_cilia.png"
	},
	"Giác mạc Wojack": {
		"name": "Giác mạc Wojack",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Dù dành nhiều thời gian dưới lòng Đất, Wojack có nhẫn cầu rất nhạy bén.",
		"icon": "wojack_cornea.png"
	},
	"Cánh hoa Wojack": {
		"name": "Cánh hoa Wojack",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Nó là răng, móng, sừng hay là cánh hoa? Thế giới có lẽ sẽ không bao giờ biết. Nhưng nó có mùi thú vị.",
		"icon": "wojack_petal.png"
	},
	"Hương liệu Wojack": {
		"name": "Hương liệu Wojack",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Thứ này lấy từ hương liệu... không... là nội tạng của một con Wojack đã thuần hoá. Khi bạn ngửi nó, mắt bạn sẽ đổi màu.",
		"recipe": {
			"name": "Wojack",
			"output_qty": 1,
			"type": "Pet",
			"ingredients": [{
				"name": "Con nhộng",
				"qty": 2
			}, {
				"name": "Đậu mụn xanh",
				"qty": 1
			}]
		},
		"icon": "wojack_spice.png"
	},
	"Vòi Wojack": {
		"name": "Vòi Wojack",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Vòi Wojack đã đứt lìa. Dù sao thì nó cũng không dùng đến mà.",
		"icon": "wojack_sucker.png"
	},
	"Tinh thể Năng lượng": {
		"name": "Tinh thể Năng lượng",
		"type": "Mảnh Thành Phần",
		"rarity": "Tối Thượng",
		"description": "Một nguồn năng lượng cực kỳ tiềm năng và đa dụng!",
		"icon": "sp_concentrated_juice_0.png"
	},
	"Bay Pha lê": {
		"name": "Bay Pha lê",
		"type": "Công cụ",
		"level": "Bậc 1",
		"rarity": "Bình Thường",
		"description": "Bay bậc 1. Cái bay này rất tiện Cho việc trồng cây và nhổ nhũng thứ cứng đầu khỏi mặt Đất",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 5
			}, {
				"name": "Mỡ Vomma",
				"qty": 20
			}, {
				"name": "Búi lông Wat",
				"qty": 13
			}]
		},
		"icon": "dusk_trowel.png"
	},
	"Cuốc Chim Thùa gai": {
		"name": "Cuốc Chim Thùa gai",
		"type": "Công cụ",
		"level": "Bậc 3",
		"rarity": "Bình Thường",
		"description": "Cuốc Chim bậc 3. Cây Cuốc Chim này mạnh khủng khiếp, do được làm từ các xúc tu và nhiều loại cây!",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Thùa gai",
				"qty": 2
			}, {
				"name": "Xúc tu Throak",
				"qty": 19
			}, {
				"name": "Cuốc Móng Vuốt",
				"qty": 1
			}, {
				"name": "Mô cáCh điện",
				"qty": 17
			}]
		},
		"icon": "clikkax.png"
	},
	"Cưa râu trắng": {
		"name": "Cưa râu trắng",
		"type": "Công cụ",
		"level": "Bậc 4",
		"rarity": "Bình Thường",
		"description": "Cưa bậc 4. Râu của Bamli rất cứng và nhám, đến mức có thể Chặt được Cây Cự cốt và Vỏ Cẩu tíCh! Và nhiều thứ khác nữa!",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Sừng Bamli",
				"qty": 32
			}, {
				"name": "Râu Bamli",
				"qty": 8
			}, {
				"name": "Tơ Huyết khối",
				"qty": 5
			}, {
				"name": "Cưa răng Wojack",
				"qty": 1
			}]
		},
		"icon": "sawstaChe.png"
	},
	"Cần câu Vỏ xương": {
		"name": "Cần câu Vỏ xương",
		"type": "Công cụ",
		"level": "Bậc 2",
		"rarity": "Bình Thường",
		"description": "Cần câu bậc 2. Cần câu này được làm từ các nguyên liệu bền nhất từ Bawg, nên nó có thể Chịu một Chút axít.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Quả Téo",
				"qty": 8
			}, {
				"name": "MạCh Bawg",
				"qty": 9
			}, {
				"name": "Cần Câu Cơ Bản",
				"qty": 1
			}, {
				"name": "Vỏ xương Satgat",
				"qty": 12
			}]
		},
		"icon": "exopole.png"
	},
	"Cưa răng Wojack": {
		"name": "Cưa răng Wojack",
		"type": "Công cụ",
		"level": "Bậc 3",
		"rarity": "Bình Thường",
		"description": "Cưa bậc 3. Thực vật ở Bawg dường như rất đàn hồi để bạn thành thạo việc Chế tạo Cưa Lưỡi Liềm, nhưng thứ bé nhỏ này nên làm nó.",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cưa Lưỡi Liềm",
				"qty": 1
			}, {
				"name": "Splinter",
				"qty": 12
			}, {
				"name": "Vòi Wojack",
				"qty": 10
			}, {
				"name": "Thịt Nắp ấm",
				"qty": 8
			}]
		},
		"icon": "jacksaw.png"
	},
	"Bom nước": {
		"name": "Bom nước",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Bằng việc nhồi thêm đồ vào quả Bóng nước, bạn đã có thể ném quả Bóng nước với lực KINH KHỦNG KHIẾP vào hạt giống. Chúng thíCh thứ này mà, phải không?",
		"recipe": {
			"name": "Máy bơm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nhánh Chuông gió",
				"qty": 3
			}, {
				"name": "Bóng nước",
				"qty": 3
			}]
		},
		"icon": "waterbomb.png"
	},
	"Cửa tàu": {
		"name": "Cửa tàu",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Cửa từ con tàu đấy!",
		"icon": "ship_door.png"
	},
	"Tường tàu không gian": {
		"name": "Tường tàu không gian",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Nó Chỉ là cái tường từ con tàu của bạn!",
		"icon": "ship_wall.png"
	},
	"Bảng Điều Khiển hỏng": {
		"name": "Bảng Điều Khiển hỏng",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Bảng điều khiển này đã hỏng và giờ nó RẤT NGUY HIỂM",
		"icon": "broken_console.png"
	},
	"Cờ lê không gian": {
		"name": "Cờ lê không gian",
		"type": "Thiết bị",
		"rarity": "Bình Thường",
		"description": "Đây là thứ tuyệt vời để dọn dẹp các mảnh tàu vỡ, và làm Choáng sinh vật ở khoảng cáCh xa!",
		"icon": "space_wrenCh.png"
	},
	"Cửa tàu hỏng": {
		"name": "Cửa tàu hỏng",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Cánh cửa này đã bị vỡ, và giờ nó phóng điện ra mọi nơi!",
		"icon": "broken_ship_door.png"
	},
	"Thành tàu hư hại": {
		"name": "Thành tàu hư hại",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Một mảnh tường từ tàu của bạn. Nó đã nát bươm luôn rồi.",
		"icon": "damaged_ship_wall.png"
	},
	"Quỷ lùn giữ cửa": {
		"name": "Quỷ lùn giữ cửa",
		"type": "Đồ Nội Thất",
		"rarity": "Bình Thường",
		"description": "Có vẻ ông ta đang nhìn vào linh hồn bạn một cáCh lạnh lùng, với đôi mắt cá Chết.",
		"icon": "the_g-gnome.png"
	},
	"Đèn trên tàu": {
		"name": "Đèn trên tàu",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Nó khiến con tàu của bạn trông hư ảo!",
		"icon": "ship_lanturn.png"
	},
	"Động cơ tàu": {
		"name": "Động cơ tàu",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Động cơ, thứ vận hành B.S. S.S. Assess.",
		"icon": "ship_engine.png"
	},
	"Búa sịp đỏ": {
		"name": "Búa sịp đỏ",
		"type": "Vũ khí",
		"level": "Cấp 13",
		"rarity": "Ngẫu Nhiên",
		"description": "Búa cấp 13. Khi kết hợp sức mạnh của Mỡ Vomma, những phần khác của Cây Nắp ấm nữa sẽ tạo thành 1 món đập nhau cực tốt.",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mỡ Vomma",
				"qty": 21
			}, {
				"name": "Đá Cây Nắp ấm",
				"qty": 4
			}, {
				"name": "Chất dính Nắp ấm",
				"qty": 2
			}]
		},
		"icon": "vlammer.png"
	},
	"Kiếm càng gai": {
		"name": "Kiếm càng gai",
		"type": "Vũ khí",
		"level": "Cấp 15",
		"rarity": "Ngẫu nhiên",
		"description": "Kiếm cấp 15. Cánh hoa của Wojack nhọn một cáCh dị thường. Bạn tưởng tượng khi đâm Chúng vào ai đó, họ hẳn sẽ rất thốn.",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Sợi trục Tĩnh điện",
				"qty": 5
			}, {
				"name": "Gai cột sống",
				"qty": 2
			}, {
				"name": "Cánh hoa Wojack",
				"qty": 14
			}, {
				"name": "Thịt Nắp ấm",
				"qty": 8
			}]
		},
		"icon": "petalprod.png"
	},
	"Rìu Xúc Tu": {
		"name": "Rìu Xúc Tu",
		"type": "Vũ khí",
		"level": "Cấp 17",
		"rarity": "Ngẫu nhiên",
		"description": "Rìu cấp 17. Bạn nghĩ rằng những thứ mềm như xúc tu sẽ tạo nên một cây rìu tồi tệ. Bạn đã lầm rồi.",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xúc tu Throak",
				"qty": 25
			}, {
				"name": "Cây Thùa gai",
				"qty": 3
			}, {
				"name": "Dãi Throak",
				"qty": 10
			}]
		},
		"icon": "tentaclax.png"
	},
	"Búa Túi Khí": {
		"name": "Búa Túi Khí",
		"type": "Vũ khí",
		"level": "Cấp 19",
		"rarity": "Ngẫu nhiên",
		"description": "Búa cấp 19. Đã tới lúc bạn Cho lũ Snorble nếm mùi túi khí của Chúng.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Thùa gai",
				"qty": 3
			}, {
				"name": "Túi khí Snorble",
				"qty": 8
			}, {
				"name": "Đèn dọc",
				"qty": 12
			}]
		},
		"icon": "sakslapper.png"
	},
	"Kiếm san hô": {
		"name": "Kiếm san hô",
		"type": "Vũ khí",
		"level": "Cấp 21",
		"rarity": "Ngẫu nhiên",
		"description": "Kiếm cấp 21. Thứ vũ khí này có thể cắt xuyên qua những vật Chất rắn Chắc nhất .... À thì, Chắc là vậy.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ống san hô",
				"qty": 2
			}, {
				"name": "Đỉa",
				"qty": 2
			}, {
				"name": "Vỏ xương Satgat",
				"qty": 12
			}, {
				"name": "Tơ Huyết khối",
				"qty": 5
			}]
		},
		"icon": "exord.png"
	},
	"Kẻ Gầm Thét": {
		"name": "Kẻ Gầm Thét",
		"type": "Vũ khí",
		"level": "Cấp 23",
		"rarity": "Ngẫu nhiên",
		"description": "Rìu cấp 23. Bằng cáCh khai thác sức mạnh của Bamli, bạn đã rèn được cây rìu có thể đánh gục TẤT CẢ NHỮNG AI CẢN ĐƯỜNG BẠN! Hầu hết thôi.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cục vàng",
				"qty": 2
			}, {
				"name": "Vỏ sừng",
				"qty": 6
			}, {
				"name": "Sáp cây Cự cốt",
				"qty": 2
			}, {
				"name": "Sừng Bamli",
				"qty": 33
			}]
		},
		"icon": "grumbler.png"
	},
	"Xô Bamli": {
		"name": "Xô Bamli",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Vì một vài lý do, lũ Bamli bị ám ảnh một cáCh bất thường bởi những thứ có hình cái xô. Tiến hoá Bamli của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mào Bamli",
				"qty": 65
			}, {
				"name": "Cây Hồ thảo",
				"qty": 32
			}, {
				"name": "Cục vàng",
				"qty": 10
			}, {
				"name": "Tinh Chất Bamli [Xảo quyệt]",
				"qty": 22
			}]
		},
		"icon": "bambukket.png"
	},
	"Gối da Wompit": {
		"name": "Gối da Wompit",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Chiếc gối bọc da này sẽ thực sự gắn kết các căn phòng lại với nhau!",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 27
			}]
		},
		"icon": "leather_throwpillow.png"
	},
	"Gối phát quang": {
		"name": "Gối phát quang",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường ",
		"description": "Nó không Chỉ nhìn rất thoải mái, mà nó còn phát ra ánh sáng khiến bạn buồn nôn!",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 9
			}, {
				"name": "Mùn cưa",
				"qty": 4
			}, {
				"name": "Dịch phát quang",
				"qty": 4
			}]
		},
		"icon": "glow_pillow.png"
	},
	"Wompit nhồi bông": {
		"name": "Wompit nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Sau khi dành nhiều thời gian với lũ Wompit, bạn có thể dựng lại một con Wompit với kĩ năng độn xác của mình !",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 9
			}, {
				"name": "Xương Wompit",
				"qty": 6
			}, {
				"name": "Hạt giống Khúc mộc",
				"qty": 14
			}]
		},
		"icon": "stuffed_wompit.png"
	},
	"Glidopus nhồi bông": {
		"name": "Glidopus nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Thứ trông như Glidopus Chết này sẽ khiến phòng kháCh của bạn nổi bật hơn, hoặc điều tương tự nhưng ngược lại.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vòi Glidopus",
				"qty": 9
			}, {
				"name": "Cưa Lưỡi Liềm",
				"qty": 2
			}, {
				"name": "Mỏ Glidopus",
				"qty": 2
			}, {
				"name": "Mực Glidopus",
				"qty": 9
			}]
		},
		"icon": "stuffed_glidopus.png"
	},
	"Glutterfly nhồi bông": {
		"name": "Glutterfly nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nếu bạn đặt con Glutterfly nhồi bông này ở đâu đó một cáCh có Chiến lược, nó sẽ trông rất đáng sợ.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Kitin",
				"qty": 6
			}, {
				"name": "Dịch phát quang",
				"qty": 4
			}, {
				"name": "Đá nhẵn",
				"qty": 14
			}]
		},
		"icon": "stuffed_glutterfly.png"
	},
	"Ghế Da": {
		"name": "Ghế Da",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Bạn sẽ ngồi rất thoải mái nếu có đầu gối.",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 14
			}, {
				"name": "Lá Cỏ gai",
				"qty": 7
			}]
		},
		"icon": "leather_bagChair.png"
	},
	"Gối đệm phát sáng": {
		"name": "Gối đệm phát sáng",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Chỉ ngồi trên Chiếc ghế này thôi có thể khiến một số Chỗ trên cơ thể bạn nhiễm phóng xạ. Phóng xạ, thật đáng sợ.",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 7
			}, {
				"name": "Mùn cưa",
				"qty": 3
			}, {
				"name": "Lá Cỏ gai",
				"qty": 4
			}, {
				"name": "Dịch phát quang",
				"qty": 3
			}]
		},
		"icon": "glowy_bagChair.png"
	},
	"Cuộn BS": {
		"name": "Cuộn BS",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Với khả năng VIẾT TRÊN GIẤY THÔ, giờ bạn có thể truyền đạt tình yêu của mình thông qua Cục Chuyển phát. Làm tốt lắm!",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 9
			}, {
				"name": "Mực Glidopus",
				"qty": 7
			}, {
				"name": "Bọ hàm kìm",
				"qty": 2
			}]
		},
		"icon": "bureau_scroll.png"
	},
	"Găng tay Cao bồi": {
		"name": "Găng tay Cao bồi",
		"type": "Găng tay",
		"level": "Cấp 13",
		"rarity": "Ngẫu nhiên",
		"description": "Găng tay cấp 13. Bao bọc tay bạn trong Thịt Nắp ấm của Vomma khiến bạn thấy ấm áp, an toàn và vững vàng.",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thịt Nắp ấm",
				"qty": 7
			}, {
				"name": "Đá Cây Nắp ấm",
				"qty": 3
			}, {
				"name": "Mỡ Vomma",
				"qty": 14
			}]
		},
		"icon": "armvlaps.png"
	},
	"Giáp Cao bồi": {
		"name": "Giáp Cao bồi",
		"type": "Áo giáp",
		"level": "Cấp 13",
		"rarity": "ngẫu nhiên",
		"description": "Giáp ngực cấp 13. Bạn cảm thấy ấm áp và mềm mại khi khoác trên mình bộ đồ oai nghiêm từ Thịt Nắp ấm.",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Cây Nắp ấm",
				"qty": 3
			}, {
				"name": "Thịt Nắp ấm",
				"qty": 6
			}, {
				"name": "Mỡ Vomma",
				"qty": 13
			}, {
				"name": "Chất dính Nắp ấm",
				"qty": 2
			}]
		},
		"icon": "vlest.png"
	},
	"Quần Cao bồi": {
		"name": "Quần Cao bồi",
		"type": "Quần giáp",
		"level": "Cấp 13",
		"rarity": "Ngẫu nhiên",
		"description": "Quần cấp 13. Những vết xẻ này được phô ra ở phía sau, Cho bạn cảm giác thoáng mát, dễ Chịu.",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thịt Nắp ấm",
				"qty": 5
			}, {
				"name": "Mỡ Vomma",
				"qty": 11
			}, {
				"name": "Con nhộng",
				"qty": 4
			}]
		},
		"icon": "vlapChaps.png"
	},
	"Mũ Cao bồi": {
		"name": "Mũ Cao bồi",
		"type": "Mũ giáp",
		"level": "Cấp 13",
		"rarity": "Ngẫu nhiên",
		"description": "Mũ giáp cấp 13. Bạn nghĩ nó ngầu? Có thể là vậy, có thể không.",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cánh Wat",
				"qty": 7
			}, {
				"name": "Mỡ Vomma",
				"qty": 19
			}, {
				"name": "Thịt Nắp ấm",
				"qty": 9
			}]
		},
		"icon": "vlapface_hat.png"
	},
	"Kính Nắp ấm": {
		"name": "Kính Nắp ấm",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Sử dụng khả năng cô đặc của Chất dính Nắp ấm, bạn có thể Chế tạo những thứ tinh xảo tới nỗi muốn mù mắt khi nghĩ về Chúng.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mỡ Vomma",
				"qty": 23
			}, {
				"name": "Chất dính Nắp ấm",
				"qty": 3
			}, {
				"name": "Thịt Nắp ấm",
				"qty": 11
			}, {
				"name": "Lăng Kính Pha lê",
				"qty": 1
			}]
		},
		"icon": "jollyscope.png"
	},
	"Túi trứng Vomma giả": {
		"name": "Túi trứng Vomma giả",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Đặt Túi trứng Vomma giả này xuống sẽ có phép màu xảy ra! Tiến hoá Vomma của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mỡ Vomma",
				"qty": 131
			}, {
				"name": "Vomma con",
				"qty": 87
			}, {
				"name": "Actiso",
				"qty": 40
			}, {
				"name": "Tinh Chất Vomma [Nóng nảy]",
				"qty": 14
			}]
		},
		"icon": "fauxsack.png"
	},
	"Sàn siêu thấm": {
		"name": "Sàn siêu thấm",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Sàn nhà phát ra tiếng \"phạCh phạCh\" khó tả khi đặt Chân lên nó, nhưng thế lại khá hay.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vòi Glidopus",
				"qty": 10
			}]
		},
		"icon": "siphon_floor.png"
	},
	"Sàn Kitin": {
		"name": "Sàn Kitin",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Sự bóng loáng của loại sàn này khiến bạn muón lăn vòng vòng trên nó, và nếu muốn thì thử ngay đi.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Kitin",
				"qty": 10
			}]
		},
		"icon": "Chitin_floor.png"
	},
	"Sàn Cự cốt": {
		"name": "Sàn Cự cốt",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Không có gì giống với xương của một sinh vật ngoài hành tinh để thật sự tạo điểm nhấn Cho căn phòng.",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xương Wompit",
				"qty": 10
			}, {
				"name": "Da Wompit",
				"qty": 10
			}]
		},
		"icon": "bone_floor.png"
	},
	"Rương đá": {
		"name": "Rương đá",
		"type": "Rương",
		"rarity": "Bình Thường",
		"description": "Cái rương to đùng này có thể Chứa bất cứ thứ gì! Trừ tình yêu. Không gì có thể Chứa đựng được tình yêu cả.",
		"icon": "stone_Chest.png"
	},
	"Mũ xác ướp": {
		"name": "Mũ xác ướp",
		"type": "Mũ giáp",
		"level": "Cấp 17",
		"rarity": "Ngẫu nhiên",
		"description": "Mũ giáp cấp 17. Nhìn vào nó khiến bạn nghĩ rằng không biết mình có thể tháo nó ra sau khi đội không. Tin tốt là nó khá sành điệu đấy, hoặc là bạn lo lắng qua thôi.",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xúc tu Throak",
				"qty": 17
			}, {
				"name": "Lông mi Wojack",
				"qty": 3
			}, {
				"name": "Ch*m Vomma",
				"qty": 3
			}, {
				"name": "Mô cáCh điện",
				"qty": 15
			}]
		},
		"icon": "throak_headguard.png"
	},
	"Giáp xác ướp": {
		"name": "Giáp xác ướp",
		"type": "Áo giáp",
		"level": "Cấp 17",
		"rarity": "Ngẫu nhiên",
		"description": "Giáp ngực cấp 17. Những cái giác hút trên xúc tu của Throak liên tục xoa bóp lưng bạn. Rất dễ Chịu..",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xúc tu Throak",
				"qty": 20
			}, {
				"name": "Bóng gelatin",
				"qty": 1
			}, {
				"name": "Gai cột sống",
				"qty": 2
			}]
		},
		"icon": "tentavest.png"
	},
	"Găng tay xác ướp": {
		"name": "Găng tay xác ướp",
		"type": "Găng tay",
		"level": "Cấp17",
		"rarity": "Ngẫu nhiên",
		"description": "Găng tay cấp 17. Các xúc tu phản ứng với các Chuyển động của bạn và làm bạn cảm thấy mạnh mẽ và tuyệt vời hơn 30%.",
		"recipe": {
			"name": "Khung cưởi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xúc tu Throak",
				"qty": 25
			}, {
				"name": "Throak Polyp",
				"qty": 5
			}]
		},
		"icon": "coiled_tentagloves.png"
	},
	"Quần xác ướp": {
		"name": "Quần xác ướp",
		"type": "Quần giáp",
		"level": "Cấp 17",
		"rarity": "Ngẫu nhiên",
		"description": "Quần cấp 17. Bằng cáCh gắn lông mi vào Chân, bạn cảm thấy như đang lướt đi trên mặt Đất. Nghe vô lý nhưng lại rất thuyết phục.",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xúc tu Throak",
				"qty": 13
			}, {
				"name": "Lông mi Wojack",
				"qty": 2
			}, {
				"name": "Gai cột sống",
				"qty": 2
			}]
		},
		"icon": "tentaclaps.png"
	},
	"Mũ cáCh điện": {
		"name": "Mũ cáCh điện",
		"type": "Mũ giáp",
		"level": "Cấp 15",
		"rarity": "Ngẫu nhiên",
		"description": "Mũ giáp cấp 15. Bản Chất cáCh điện của Mô cáCh điện giữ Cho mặt bạn luôn nóng hổi, như một viên marshmallow nướng quá lửa. Khá là thốn đấy.",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mô cáCh điện",
				"qty": 19
			}, {
				"name": "Đậu mụn xanh",
				"qty": 3
			}, {
				"name": "Vòi Wojack",
				"qty": 13
			}]
		},
		"icon": "myelar_faceholder.png"
	},
	"Quần cáCh điện": {
		"name": "Quần cáCh điện",
		"type": "Quần giáp",
		"level": "Cấp 15",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 15. Bên trong sự trơn nhớt này... là sự trơn nhớt hơn nữa. Khi bước đi, nó nghe giống như ai đó ngậm đầy mayonaise trong miệng.",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mô cáCh điện",
				"qty": 16
			}, {
				"name": "Cánh hoa Wojack",
				"qty": 14
			}]
		},
		"icon": "myelants.png"
	},
	"Giáp cách điện": {
		"name": "Giáp cách điện",
		"type": "Áo giáp",
		"level": "Cấp 15",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 15. Sự co bóp của Mô cáCh điện khiến bạn vô cùng khó thở, nhưng bạn vẫn thấy nên mặc thì hơn.",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mô cáCh điện",
				"qty": 25
			}, {
				"name": "Cánh hoa Wojack",
				"qty": 23
			}]
		},
		"icon": "myelirt.png"
	},
	"Găng tay cáCh điện": {
		"name": "Găng tay cáCh điện",
		"type": "Găng tay",
		"level": "Cấp 15",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 15. Với sức mạnh từ Vòi Wojack, bạn có thể cầm bất cứ thứ gì!",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vòi Wojack",
				"qty": 9
			}, {
				"name": "Mô cáCh điện",
				"qty": 14
			}, {
				"name": "Vụn xương",
				"qty": 11
			}]
		},
		"icon": "myelar_armsheaths.png"
	},
	"Khung cửi vi sinh": {
		"name": "Khung cửi vi sinh",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Bằng cáCh đan nhanh tất cả các loại nội tạng mảnh xoắn lại, bạn đã cố gắng để tạo ra một Trạm Chế tạo hoàn hảo!",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xúc tu Throak",
				"qty": 27
			}, {
				"name": "Cây Thùa gai",
				"qty": 3
			}, {
				"name": "Sợi trục Tĩnh điện",
				"qty": 7
			}, {
				"name": "Gai cột sống",
				"qty": 3
			}]
		},
		"icon": "bioloom.png"
	},
	"Cái Vạc": {
		"name": "Cái Vạc",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Đậu mụn xanh được nghiền dập và kéo sợi để tạo ra một vật Chứa hoàn hảo!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đậu mụn xanh",
				"qty": 4
			}, {
				"name": "Vụn xương",
				"qty": 23
			}, {
				"name": "Thịt Nắp ấm",
				"qty": 15
			}]
		},
		"icon": "cauldron.png"
	},
	"Bay Vụn xương": {
		"name": "Bay Vụn xương",
		"type": "Công cụ",
		"level": "Bậc 2",
		"rarity": "Bình Thường",
		"description": "Bay bậc 2. Cứng cáp hơn người tiền nhiệm của nó, Bay Vụn xương có thể nhấc mọi thứ khỏi mặt Đất!",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vụn xương",
				"qty": 12
			}, {
				"name": "Throak Polyp",
				"qty": 4
			}, {
				"name": "Gai cột sống",
				"qty": 2
			}, {
				"name": "Bay Pha lê",
				"qty": 1
			}]
		},
		"icon": "splintrowel.png"
	},
	"Cụm cáp xúc tu": {
		"name": "Cụm cáp xúc tu",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Throak non thường mất kiểm soát những xúc tu của Chúng. Nhưng không phải với thứ này! Tiến hoá Throak của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xúc tu Throak",
				"qty": 157
			}, {
				"name": "Throak Polyp",
				"qty": 29
			}, {
				"name": "Mô cáCh điện",
				"qty": 137
			}, {
				"name": "Tinh Chất Throak [Độc ác]",
				"qty": 15
			}]
		},
		"icon": "thrackle.png"
	},
	"Xà phòng Wojack": {
		"name": "Xà phòng Wojack",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Mặc dù trông Chúng ghê tởm, Nhưng lũ Wojack bị ám ảnh bởi sự sạCh sẽ! Tiến hoá Wojack của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tinh Chất Wojack [Bết dính]",
				"qty": 15
			}, {
				"name": "Cánh hoa Wojack",
				"qty": 118
			}, {
				"name": "Lông mi Wojack",
				"qty": 25
			}, {
				"name": "Vụn xương",
				"qty": 99
			}]
		},
		"icon": "wojack_soap.png"
	},
	"Lò rèn Năng lượng": {
		"name": "Lò rèn Năng lượng",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Cái máy này sẽ giúp bạn khai thác sức mạnh của tinh thể nên bạn có thể sửa đổi trang bị!",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tinh thể Năng lượng",
				"qty": 48
			}, {
				"name": "Mô cáCh điện",
				"qty": 19
			}, {
				"name": "Da Zug nhiễm điện",
				"qty": 1
			}]
		},
		"icon": "sp_juiceforge_0.png"
	},
	"Mũ Rùa": {
		"name": "Mũ Rùa",
		"type": "Mũ giáp",
		"level": "Cấp19",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 19. Nó sẽ khiến lũ quái tin rằng bạn là một con Snorble, hoặc là một tên khùng đang đội vỏ Snorble lên đầu.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Snorble",
				"qty": 10
			}, {
				"name": "Túi khí Snorble",
				"qty": 6
			}, {
				"name": "Quả Téo",
				"qty": 7
			}, {
				"name": "Bọng mỡ",
				"qty": 3
			}]
		},
		"icon": "snelm.png"
	},
	"Giáp Rùa": {
		"name": "Giáp Rùa",
		"type": "Áo giáp",
		"level": "Cấp19",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 19. Các túi khí bảo vệ làn da ngực tuyệt vời của bạn khỏi các thiệt hại sắp tới, cộng thêm một Chút hương liệu từ Wojack sẽ tẩy sạCh da Chết tới từng lỗ Chân lông. Đúng là hàng công nghệ cao!",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Snorble",
				"qty": 9
			}, {
				"name": "Túi khí Snorble",
				"qty": 5
			}, {
				"name": "MạCh Bawg",
				"qty": 7
			}, {
				"name": "Hương liệu Wojack",
				"qty": 1
			}]
		},
		"icon": "snest.png"
	},
	"Găng tay Rùa": {
		"name": "Găng tay Rùa",
		"type": "Găng tay",
		"level": "Cấp 19",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 19. Túi khí Snorble khá mềm mượt ở bên trong. Nó giống như một đôi găng tay thật sự!",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Snorble",
				"qty": 10
			}, {
				"name": "Túi khí Snorble",
				"qty": 5
			}, {
				"name": "MạCh Bawg",
				"qty": 8
			}]
		},
		"icon": "snittens.png"
	},
	"Quần Rùa": {
		"name": "Quần Rùa",
		"type": "Quần giáp",
		"level": "Cấp 19",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 19. Đôi Chân bạn sẽ cảm thấy biết ơn bạn khi ngập trong dịCh thơm của những Quả Téo... Ahhhhh... đây là đâu ?",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Snorble",
				"qty": 11
			}, {
				"name": "Quả Téo",
				"qty": 8
			}]
		},
		"icon": "snoots.png"
	},
	"Mũ Xuất kíCh": {
		"name": "Mũ Xuất kíCh",
		"type": "Mũ giáp",
		"level": "Cấp 21",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 21. Trông rất nhọn và có vẻ đau nhưng bạn phải hi sinh vì nó trông rất ngầu.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ xương Satgat",
				"qty": 11
			}, {
				"name": "Tảo Phát Quang",
				"qty": 1
			}, {
				"name": "Tơ Huyết khối",
				"qty": 5
			}, {
				"name": "Rận hút máu",
				"qty": 1
			}]
		},
		"icon": "exohead_facemask.png"
	},
	"Giáp Xuất kích": {
		"name": "Giáp Xuất kích",
		"type": "Áo giáp",
		"level": "Cấp 21",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 21. Dù trông có vẻ đồ sộ, nó thực sự khá nhẹ. Nó thậm Chí còn tuân theo khí động lực học!",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ xương Satgat",
				"qty": 10
			}, {
				"name": "Tảo Phát Quang",
				"qty": 1
			}, {
				"name": "Tơ Huyết khối",
				"qty": 4
			}, {
				"name": "Thạch Throak",
				"qty": 1
			}]
		},
		"icon": "exoChest.png"
	},
	"Găng tay Xuất kíCh": {
		"name": "Găng tay Xuất kíCh",
		"type": "Găng tay",
		"level": "Cấp 21",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 21. Bằng việc bao phủ cánh tay của bạn với Vỏ xương Satgat, và giờ bạn trông như.... cái lá ấy.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ xương Satgat",
				"qty": 8
			}, {
				"name": "Tảo Phát Quang",
				"qty": 1
			}, {
				"name": "Tơ Huyết khối",
				"qty": 4
			}, {
				"name": "Chất dính Nắp ấm",
				"qty": 2
			}]
		},
		"icon": "exosleeves.png"
	},
	"Quần Xuất kíCh": {
		"name": "Quần Xuất kíCh",
		"type": "Quần giáp",
		"level": "Cấp 21",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 21. Mặc dù bên ngoài nhìn thế thôi, nhưng thật ra bên trong rất êm và ấm. Nó sẽ bảo vệ phần quan trọng nhất của bạn.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ xương Satgat",
				"qty": 8
			}, {
				"name": "Tảo Phát Quang",
				"qty": 1
			}, {
				"name": "Tơ Huyết khối",
				"qty": 4
			}]
		},
		"icon": "exoots.png"
	},
	"Bình hồi máu Pha lê Hoàng hôn": {
		"name": "Bình hồi máu Pha lê Hoàng hôn",
		"type": "Tiêu Hao",
		"rarity": "Tốt",
		"description": "Khi được nấu thật nhẹ nhàng, Cá đầu búa Cho ra một Chất lỏng thơm ngon, thứ sẽ hồi 1,609 HP.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 3
			}, {
				"name": "Cá đầu búa",
				"qty": 3
			}]
		},
		"icon": "dusky_healing_potion.png"
	},
	"Đai Snorble": {
		"name": "Đai Snorble",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Snorble có nhận thức rất tốt về an toàn bản thân. Vì thế Chúng đã tiến hoá với những túi khí khổng lồ trên cơ thể. Tiến hoá Snorble của bạn thành dạng SIÊU CẤP.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tinh Chất Snorble [Cháy nắng]",
				"qty": 9
			}, {
				"name": "Da Snorble",
				"qty": 90
			}, {
				"name": "Khúc cây Bụt mọc",
				"qty": 7
			}, {
				"name": "MạCh Bawg",
				"qty": 73
			}]
		},
		"icon": "snorbelt.png"
	},
	"Bánh phô mai mốc": {
		"name": "Bánh phô mai mốc",
		"type": "Thức ăn sinh vật",
		"rarity": "Bình Thường",
		"description": "Nhồi đầy một trái Đậu mụn xanh với Chất dính Nắp ấm? Ý hay đấy! Cường hoá 15% tỉ lệ đánh Chí mạng của pet trong 20 phút.",
		"recipe": {
			"name": "Cái Vạc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đậu mụn xanh",
				"qty": 1
			}, {
				"name": "Chất dính Nắp ấm",
				"qty": 1
			}, {
				"name": "Tinh Chất Wojack [Bết dính]",
				"qty": 1
			}]
		},
		"icon": "bleghmar_treat.png"
	},
	"Bơm Huyết khối": {
		"name": "Bơm Huyết khối",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Bằng cáCh đặt cái bơm này lên Huyết khối, bạn có thể khai thác mọi thứ hữu íCh nằm ở bên trong!",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Túi khí Snorble",
				"qty": 9
			}, {
				"name": "MạCh Bawg",
				"qty": 14
			}, {
				"name": "Quả Téo",
				"qty": 12
			}, {
				"name": "Sinh Vật Phù Du",
				"qty": 1
			}]
		},
		"icon": "thrombopump.png"
	},
	"Mặt nạ quyến rũ": {
		"name": "Mặt nạ quyến rũ",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Satgat tự ý thức được về khuôn mặt đần độn của mình, vì thế Chúng luôn cố gắng để đảm bảo Che đi khuôn mặt Chúng! Tiến hoá Satgat của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ xương Satgat",
				"qty": 101
			}, {
				"name": "Sinh Vật Phù Du",
				"qty": 4
			}, {
				"name": "Tinh Chất Satgat [Nhạy cảm]",
				"qty": 8
			}, {
				"name": "Ruột Satgat",
				"qty": 8
			}]
		},
		"icon": "attractive_mask.png"
	},
	"Cái Đe Cứng": {
		"name": "Cái Đe Cứng",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Râu của Bamli cực kì mạnh, bạn có thể dùng nó để BẺ CONG MỌI THỨ THEO Ý THÍCh! Nó cũng rất hấp dẫn.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tơ Huyết khối",
				"qty": 7
			}, {
				"name": "Vỏ sừng",
				"qty": 8
			}, {
				"name": "Râu Bamli",
				"qty": 12
			}, {
				"name": "Cục vàng",
				"qty": 2
			}]
		},
		"icon": "granvil.png"
	},
	"Biển gỗ": {
		"name": "Biển gỗ",
		"type": "Biển hiệu",
		"rarity": "Bình Thường",
		"description": "Bạn đã Chế biến tấm gỗ nên giờ bạn có thể viết và tẩy trên nó! Giờ bạn có thể đánh nhãn một phần của bản đồ.",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 1
			}, {
				"name": "Que",
				"qty": 1
			}]
		},
		"icon": "wooden_writable_sign.png"
	},
	"Quần Cơ khí": {
		"name": "Quần Cơ khí",
		"type": "Quần giáp",
		"level": "Cấp 23",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 23. Sức mạnh từ Sừng Bamli cổ đại Cho phép bạn nhảy qua những vật nhỏ trong một phạm vi nhất định hoặc hơn thế! HIYOOOO!",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Sừng Bamli",
				"qty": 33
			}, {
				"name": "Vỏ sừng",
				"qty": 6
			}]
		},
		"icon": "grenoots.png"
	},
	"Mũ Cơ khí": {
		"name": "Mũ Cơ khí",
		"type": "Mũ giáp",
		"level": "Cấp 23",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 23. Có gì tốt hơn một khuôn mặt đầy lông Chứ. Một khuôn mắt đầy lông và râu?",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Sừng Bamli",
				"qty": 30
			}, {
				"name": "Vỏ sừng",
				"qty": 5
			}, {
				"name": "Vỏ Cẩu tíCh",
				"qty": 26
			}, {
				"name": "Râu Bamli",
				"qty": 7
			}]
		},
		"icon": "grenamel_staChemask.png"
	},
	"Giáp Cơ khí": {
		"name": "Giáp Cơ khí",
		"type": "Áo giáp",
		"level": "Cấp 23",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 23. Đôi khi, bạn Chỉ cần bao bọc toàn bộ thân mình trong bộ xương đã tôi luyện của một con quái thú cổ đại. Đây là một trong những lần như vậy.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Sừng Bamli",
				"qty": 27
			}, {
				"name": "Vỏ sừng",
				"qty": 5
			}, {
				"name": "Sáp cây Cự cốt",
				"qty": 2
			}, {
				"name": "Cục vàng",
				"qty": 1
			}]
		},
		"icon": "grestplate.png"
	},
	"Găng tay Cơ khí": {
		"name": "Găng tay Cơ khí",
		"type": "Găng tay",
		"level": "Cấp 23",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 23. Vỏ sừng khiến việc bảo vệ tay trở nên thú vị, đồng nghĩa rằng bạn không cần quan tâm việc dùng khuỷu tay, ngón tay hay bất cứ gì khác..",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Sừng Bamli",
				"qty": 29
			}, {
				"name": "Vỏ sừng",
				"qty": 5
			}, {
				"name": "Vỏ Cẩu tíCh",
				"qty": 25
			}]
		},
		"icon": "grenamel_armpads.png"
	},
	"Bình hồi máu Carbon": {
		"name": "Bình hồi máu Carbon",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Nó là BĂNG LẠNH! Hồi 52,087 máu.",
		"recipe": {
			"name": "Nồi áp suất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 3
			}, {
				"name": "Rễ nổi Nấm bè",
				"qty": 3
			}]
		},
		"icon": "karboan_healing_potion.png"
	},
	"Bình hồi máu Tre gai": {
		"name": "Bình hồi máu Tre gai",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Nó hơi ngọt, giống một loại sinh tố nào đó. Hồi 125,060 HP.",
		"recipe": {
			"name": "Nồi áp suất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ống Tre gai",
				"qty": 3
			}, {
				"name": "Mối Thợ",
				"qty": 3
			}]
		},
		"icon": "pipey_healing_potion.png"
	},
	"Thuốc Huyễn vực": {
		"name": "Thuốc Huyễn vực",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Uống loại bia này khiến bạn muốn đập phá đồ đạc! 2% tỉ lệ Choáng mục tiêu khi đánh mỗi giây. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Nồi áp suất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đế Hoa quả tạ",
				"qty": 6
			}, {
				"name": "Cây Đậu bắp",
				"qty": 2
			}, {
				"name": "Đỉa điện từ",
				"qty": 1
			}, {
				"name": "Tinh Chất Glaser [Quý tộc]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_concussions.png"
	},
	"Bình hồi máu Đậu mụn xanh": {
		"name": "Bình hồi máu Đậu mụn xanh",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Hãy thành thực ở đây; Bạn Chỉ cần quẳng hết nguyên liệu vào cái lọ và xem Chúng kết hợp với nhau. Hồi 2,221 Máu.",
		"recipe": {
			"name": "Cái Vạc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đậu mụn xanh",
				"qty": 3
			}, {
				"name": "Actiso",
				"qty": 3
			}]
		},
		"icon": "blegh_healing_potion.png"
	},
	"Thuốc Giật điện": {
		"name": "Thuốc Giật điện",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Bạn nghĩ rằng Chẳng cần thiết phải gọi sét làm gì... nhưng bạn đã làm. 3% tỉ lệ gây Choáng mục tiêu ở gần khi đánh. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Nồi áp suất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 5
			}, {
				"name": "Chất nhầy độc",
				"qty": 2
			}, {
				"name": "Chùy Gai",
				"qty": 3
			}, {
				"name": "Tinh Chất Gallum [Vôi hoá]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_shocking.png"
	},
	"Bình hồi máu Vỏ sừng": {
		"name": "Bình hồi máu Vỏ sừng",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Như người ta thường nói: Có qua có lại ... Đôi khi bạn uống nước ép Chấy, thi đôi khi Chúng cũng sẽ hút máu bạn. Hồi 9,670 HP.",
		"recipe": {
			"name": "Cái Vạc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ sừng",
				"qty": 3
			}, {
				"name": "Vỏ Cẩu tíCh",
				"qty": 3
			}, {
				"name": "Vomma con",
				"qty": 3
			}]
		},
		"icon": "grenamel_healing_potion.png"
	},
	"Cây Lược mao": {
		"name": "Cây Lược mao",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Những cành cây dài  lởm Chởm thường cào xước da của những con thú đi ngang. Chắc nó dùng lông thú để đan nón.",
		"icon": "furgrasp.png",
		"drop": ["Nhánh Lược mao", "Lá Lược mao", "Chùm lông lạ", "Hạt giống Lược mao"]
	},
	"Trứng Xoắn ốc": {
		"name": "Trứng Xoắn ốc",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Không Chắc con gì đã đẻ quả trứng này. Nhưng Chắc Chắn rằng trong này Chứa đầy dinh dưỡng, giống như mấy con ngựa giấy có kẹo ở trong ấy.",
		"icon": "spiregg.png",
		"drop": ["Lòng xanh Trứng Xoắn ốc", "Vỏ trứng Xoắn ốc", "Lòng đỏ Trứng Xoắn ốc"]
	},
	"Cây Hoa quả tạ": {
		"name": "Cây Hoa quả tạ",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Bông hoa của cây này nặng tới phát rồ. Phần hoa sẽ leo lên đến cuống hoa, sau đó giã xuống băng để nó vỡ thành các khối, cái mà sau đó cây sẽ hấp thụ.",
		"icon": "smashblossom.png",
		"drop": ["Nhụy Hoa quả tạ", "Đế Hoa quả tạ", "Cánh Hoa quả tạ", "Bọ Lục Bảo", "Hạt giống Hoa quả tạ"]
	},
	"MạCh Băng áp": {
		"name": "MạCh Băng áp",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Nước ở bên trong tràn ra Cho đến khi bị đóng băng hoàn toàn tạo ra 1 lớp phủ. Khi lớp phủ băng đã ở yên thì MạCh Băng áp tạo ra 1 áp lực kinh khủng ở bên trong và Chỉ dịu bớt khi lớp phủ bị cạy ra.",
		"icon": "geysir.png",
		"drop": ["Cục bùn", "Kim cương", "Thỏ Cụt Tai"]
	},
	"Hố câu Tundra": {
		"name": "Hố câu Tundra",
		"type": "Tài Nguyên",
		"rarity": "Bình Thường",
		"description": "Có cái gì đó khuấy động dưới làn nước lạnh cóng này.",
		"icon": "tundra_sChool.png",
		"drop": ["Cá đuối băng", "Bụi san hô", "Sên hải nhiệt", "Mực Lông", "Búa Cá sấu"]
	},
	"Cá đuối băng": {
		"name": "Cá đuối băng",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Sinh vật giống cá này bám vào những tảng băng và hòa mình vào nó. Nó có thể nói được nhiều thứ tiếng, nhưng bạn không hiểu bất kì thứ gì.",
		"icon": "ice_skate.png"
	},
	"Mực Lông": {
		"name": "Mực Lông",
		"type": "Mảnh Thành Phần",
		"rarity": "Bình Thường",
		"description": "Một con Mực Lông lá, thíCh nghi tốt để bơi trong môi trường cực lạnh của Tundra. Nó dường như thông minh vượt bậc.",
		"icon": "sQueti.png"
	},
	"Sên hải nhiệt": {
		"name": "Sên hải nhiệt",
		"type": "Mảnh Thành Phần",
		"rarity": "Tốt",
		"description": "Những sinh vật giống sên này sống ở các khe nứt nước nóng sâu dưới đáy biển. Nó cứ run mình không ngừng Cho đến khi bạn kéo nó ra khỏi nước.",
		"icon": "ventsleeper.png"
	},
	"Bụi san hô": {
		"name": "Bụi san hô",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Cái tơ cứng của nó rất mềm mại. Nó nhắc bạn nhớ tới khi còn làm một hầu gái cầm theo cái Chổi lông đi khắp nơi.",
		"icon": "coralduster.png"
	},
	"Búa Cá sấu": {
		"name": "Búa Cá sấu",
		"type": "Vũ khí",
		"level": "Cấp 29",
		"rarity": "Tối Thượng",
		"description": "Búa cấp 29. Con cá này không có hộp sọ và dạ dày nằm trên đầu. Vì thế nó nuốt rất nhiều viên đá nhỏ để bảo vệ bộ não siêu siêu nhỏ của Chúng.",
		"icon": "bonkagong.png"
	},
	"Cây Song Chi": {
		"name": "Cây Song Chi",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Những cái cây này mọc thành cặp, và Chúng đều rất nhút nhát. Sẽ là sáng suốt nếu không để Chúng lừa. Hồi 7,103 HP.",
		"icon": "conjoined_perp.png"
	},
	"Cây Kiên thảo": {
		"name": "Cây Kiên thảo",
		"type": "Tài nguyên",
		"rarity": "Bình Thường",
		"description": "Thứ này thật là sắc và nhọn. Nó dường như là một Cây Kiên thảo xinh xắn.",
		"icon": "hard_core.png"
	},
	"Cây Đậu bắp": {
		"name": "Cây Đậu bắp",
		"type": "Tiêu hao",
		"rarity": "Bình Thường",
		"description": "Khi vắt nó sẽ tỏa ra mùi rất kinh khủng. Bạn cũng nghe thấy âm thanh ầm ầm quanh đó, phục hồi 7,268 HP.",
		"icon": "parapod.png"
	},
	"Cây Phong phát": {
		"name": "Cây Phong phát",
		"type": "Tài nguyên",
		"rarity": "Bình Thường",
		"description": "Thay vì mọc lá cái cây này mọc rất nhiều tóc. Cái mái tóc sản sinh năng lượng Cho cây nhờ gió. Nó làm bạn nhớ đến một người họ hàng xa.",
		"icon": "bluff.png",
		"drop": ["Hạt Cây Phong phát", "Lõi Phong phát"]
	},
	"Cây Chùy gai": {
		"name": "Cây Chùy gai",
		"type": "Tài nguyên",
		"rarity": "Bình Thường",
		"description": "Cái cây này động đậy khi có tạo vật nguy hiểm tới gần, nhưng Chưa bao giờ bật rễ. Bạn sẽ đoán rằng nó là một sinh vật hiền hoà.",
		"icon": "flailtree.png",
		"drop": ["Chùy Gai", "Vỏ Chuỳ gai", "Hạt giống Chùy gai"]
	},
	"Quặng Tinh thể Năng lượng": {
		"name": "Quặng Tinh thể Năng lượng",
		"type": "Tài nguyên",
		"rarity": "Tối Thượng",
		"description": "Một số dung dịCh của hành tinh này đã kết tinh và đâm xuyên qua các tầng địa Chất. Ếy, THIÊN NHIÊN TRAO TẶNG ĐẤY!",
		"icon": "sp_juice_crystal_cluster_0.png",
		"drop": ["Tinh thể Năng lượng"]
	},
	"Bụi tre gai": {
		"name": "Bụi tre gai",
		"type": "Tài nguyên",
		"rarity": "Bình Thường",
		"description": "Không Chắc đây là một loại san hô, thực vật, động vật, hoặc thứ gì ở giữa cả. Âm thanh nó tạo ra như gió thổi rít qua ống làm bạn nhớ tới một Chiếc đại phong cầm lâu đời ở nhà thờ!",
		"icon": "pipedirt.png",
		"drop": ["Ống Tre gai", "Rêu rỉ sét", "Hạt giống Tre gai"]
	},
	"Tinh thể xanh lá": {
		"name": "Tinh thể xanh lá",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Một khối tinh thể xanh là nhô ra từ vùng tinh thể vỡ vụn của Tundra. Nó phát ra âm thanh và rung lên khi cảm nhận được bạn đang ở gần.",
		"icon": "crystine.png"
	},
	"Tổ mối": {
		"name": "Tổ mối",
		"type": "Tài nguyên",
		"rarity": "Bình Thường",
		"description": "Đầy những con mối! Chúng xây tổ bằng máu, mồ hôi, nước mắt, và một Chút keo sinh học từ khớp Chân. Dù vậy, cái tổ vẫn có thể bị xới tung lên bằng một cây xẻng.",
		"icon": "magmite_mound.png",
		"drop": ["Mối Thợ", "Lụa xanh", "Mối vương", "Mối Chúa"]
	},
	"Nấm Bè": {
		"name": "Nấm Bè",
		"type": "Tài nguyên",
		"rarity": "Bình Thường",
		"description": "Những Chiếc túi có lẽ Chứa đầy Heli hoặc cái gì đó. Nó trôi nổi nhẹ nhàng trên mặt nước ở Tundra.",
		"icon": "flungus.png",
		"drop": ["Rễ nổi Nấm bè", "Khối Nấm Bè", "Não Nấm bè", "Hạt giống Nấm Bè"]
	},
	"Tường Hewgodooko": {
		"name": "Tường Hewgodooko",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Một trong những cái tường ở thành trì của Hewgodooko ở Savanna. Nó khá là cứng đấy.",
		"icon": "hewgodooko_wall.png"
	},
	"Cửa Hewgodooko": {
		"name": "Cửa Hewgodooko",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Thứ này Chế ra bằng gì vậy?",
		"icon": "hewgodooko_door.png"
	},
	"Cây Băng tảo": {
		"name": "Cây Băng tảo",
		"type": "Tiêu hao",
		"rarity": "Bình Thường",
		"description": "Một cụm Tảo Phát Quang đã thíCh nghi với việc phát triển trên băng. Bạn sẽ bị dính lưỡi nếu liếm nó. Hồi 16,906 HP.",
		"icon": "icequill.png"
	},
	"Cây Bọt đồng": {
		"name": "Cây Bọt đồng",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Loài cây này phát triển như một miếng bọt biển hoàn hảo làm từ đồng. Nó sẽ siêu hữu íCh khi bạn rửa bát.",
		"icon": "coppersponge.png"
	},
	"Sâu hồng nhan": {
		"name": "Sâu hồng nhan",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Ấu trùng này có vẻ kì lạ sau khi ra khỏi kén. Có vẻ nó đến từ sâu trong lòng Đất...",
		"icon": "depressurized_larva.png"
	},
	"Đỉa điện từ": {
		"name": "Đỉa điện từ",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Sinh vật nhỏ bé này sử dụng công nghệ điện từ hiện đại để tìm ra cái cổ gần nhất và bóp nghẹt nó. Có thể làm quà Cho tụi nít mà bạn ghét.",
		"icon": "fanged_strangler.png"
	},
	"Nấm phát quang": {
		"name": "Nấm phát quang",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Nó phát sáng giữa một dải màu để dụ con mồi của nó. Khi mục tiêu đã đến gần, nó Chỉ ở đấy và không làm gì, vì nó là một cây nấm :v.",
		"icon": "boreole.png"
	},
	"Chất nhầy cam": {
		"name": "Chất nhầy cam",
		"type": "Mảnh thành phần",
		"rarity": "Siêu Cấp",
		"description": "Chất nhầy cam bị rỉ ra từ những vết nứt từ tảng pha lê xanh của Tundra. Nó đã bị đông lại... Và có mùi như con mực.",
		"icon": "liquideon.png"
	},
	"Cây Thố thảo": {
		"name": "Cây Thố thảo",
		"type": "Tiêu hao",
		"rarity": "Bình Thường",
		"description": "Mặc dù trông nó giống một Chú thỏ đáng yêu, nó Chỉ là lớp nguỵ trang Cho phần rễ. Ngoại trừ việc nó kêu lên khi bạn ăn nó. Đó cũng Chỉ là nguỵ trang. Hồi 40,293 HP.",
		"icon": "bunnion.png"
	},
	"Hạt Cây Phong phát": {
		"name": "Hạt Cây Phong phát",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Bạn đã đập Cây Phong phát một lực vừa đủ để Cho hạt rơi ra ngay lập tức! Nó dường như bất khả thi về mặt vật lý, nhưng bạn đã làm được.",
		"icon": "bluffollicle.png"
	},
	"Lõi Phong phát": {
		"name": "Lõi Phong phát",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó thật mềm mại, bạn có thể hình dung số lượng sợi của nó thuộc hàng tỷ tỷ tỷ ...... Nó có thể dùng để làm thành một Chiếc giường đẹp, hoặc Chỉ đủ một Chiếc áo khoác",
		"icon": "bluffluff.png"
	},
	"Nhụy Hoa quả tạ": {
		"name": "Nhụy Hoa quả tạ",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Cái thứ này xuất hiện để Chuẩn bị diễn hành động không thể diễn tả bằng lời sự của lãng mạn giữa thực vật.",
		"icon": "smashblossom_pistil.png"
	},
	"Cánh Hoa quả tạ": {
		"name": "Cánh Hoa quả tạ",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Thứ này nặng khoảng 0,3 tới 1,2 nghìn pound. Hoặc kilogram. Nó rất khó hiểu, vì thế rất khó xác định.",
		"icon": "smashblossom_petal.png"
	},
	"Đế Hoa quả tạ": {
		"name": "Đế Hoa quả tạ",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Cái đế cây này Chắc Chắn sẽ Chịu được một cú giã.",
		"icon": "smashblossom_trunk.png"
	},
	"Bọ Lục Bảo": {
		"name": "Bọ Lục Bảo",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Nó khá bồn Chồn. Nó Chỉ có thể dịu đi bởi tiếng đập nhịp nhàng, mạnh mẽ của một Cây Hoa quả tạ.",
		"icon": "emerald_smashborer.png"
	},
	"Chùy Gai": {
		"name": "Chùy Gai",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó có một tay cầm tiện lợi, gần như được tạo ra để Cho bạn có thể ném một mình. Khi bạn nhìn Chằm Chằm cây Chuỳ gai, bạn cảm thấy như có bướm bay trong bụng. Nó có nghĩa là vậy.",
		"icon": "flailpod.png"
	},
	"Vỏ Chuỳ gai": {
		"name": "Vỏ Chuỳ gai",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Vỏ Chuỳ gai cực kì Chắc khoẻ và đàn hồi.",
		"icon": "blackbark.png"
	},
	"Hạt giống Chùy gai": {
		"name": "Hạt giống Chùy gai",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Hạt của cây Chuỳ gai. Chúng rất hung hăng và gắt gỏng. Tốt hơn hết nên Chôn nó và để nó tự vượt qua.",
		"icon": "flaycorn.png"
	},
	"Nhánh Lược mao": {
		"name": "Nhánh Lược mao",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Cây Lược mao dùng phần phụ này để bứt nhưng búi lông... từ thứ gì đó.",
		"icon": "furgrasp_antler.png"
	},
	"Lá Lược mao": {
		"name": "Lá Lược mao",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Những Chiếc lá đã xơ, trông như Chúng được dệt bởi người tí hon với những ngón tay bé xíu. Hoặc cũng có thể là bởi những con khỉ bé xíu.",
		"icon": "furgrasp_foliage.png"
	},
	"Hạt giống Lược mao": {
		"name": "Hạt giống Lược mao",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Sau khi giết Cha Chúng, thứ bạn ít nhất phải làm là trồng cái hạt này xuống. Đừng trở thành một kẻ tàn ác.",
		"icon": "furgrasp_seed.png"
	},
	"Chùm lông lạ": {
		"name": "Chùm lông lạ",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Cây Lược mao Chắc hẳn đã bứt Chùm lông này từ thứ gì đó... khá kì lạ...",
		"icon": "strange_tuft.png"
	},
	"Rễ nổi Nấm bè": {
		"name": "Rễ nổi Nấm bè",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nấm Bè dùng những cái rễ này để giữ Cho mình lơ lửng trên cao bằng cáCh nào đó. Nó có vẻ giống như ma thuật, nên có lẽ là vậy, giống thuyết 'Dao cạo của Occam' (Wikipedia).",
		"icon": "flungus_airoot.png"
	},
	"Não Nấm bè": {
		"name": "Não Nấm bè",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Dựa trên kíCh cỡ và sự phức tạp của bộ não, Nấm Bè có lẽ là sinh vật thông minh nhất trong vũ trụ. Nhưng Chúng lại không thể di Chuyển hay nói!",
		"icon": "flungus_brain.png"
	},
	"Hạt giống Nấm Bè": {
		"name": "Hạt giống Nấm Bè",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Nấm kí sinh trên ong và để lại nấm con. Trồng thứ này vào Đất trồng sẽ mọc lên cây nấm, ở bất kì tỉ lệ nào!",
		"icon": "flungus_sporebee.png"
	},
	"Khối Nấm Bè": {
		"name": "Khối Nấm Bè",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Thứ này đã tránh bị xé xác bởi những đòn tấn công bạo lực của bạn. Trực giác máCh bảo rằng nó sợ bạn, và nó rất ngon.",
		"icon": "flungus_pod.png"
	},
	"Lòng xanh Trứng Xoắn ốc": {
		"name": "Lòng xanh Trứng Xoắn ốc",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó nhớp và dính, y như lòng trắng từ một quả trứng. Ơ, khoan... nó ChÍNH XÁC LÀ NHỮNG GÌ BẠN NGHĨ.",
		"icon": "spiregg_goop.png"
	},
	"Lòng đỏ Trứng Xoắn ốc": {
		"name": "Lòng đỏ Trứng Xoắn ốc",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó có rất nhiều Chất dinh dưỡng, như mỡ, Cholesterol, và rất nhiều loại độc! Nó trông có vẻ khá hợp với bạn.",
		"icon": "spiregg_yolk.png"
	},
	"Vỏ trứng Xoắn ốc": {
		"name": "Vỏ trứng Xoắn ốc",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Cái vỏ này là thứ cứng nhất mà bạn thấy từ khi bạn bắt đầu nhìn nó vài giây trước.",
		"icon": "spiregg_shell.png"
	},
	"Mối vương": {
		"name": "Mối vương",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Nó yêu cầu bạn phải cúi đầu trước nó và hôn vào phần phụ của nó.",
		"icon": "magmite_king.png"
	},
	"Mối Thợ": {
		"name": "Mối Thợ",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Con bọ nhỏ bé này sẽ bổ vào gáy bạn nếu rời mắt khỏi nó Chỉ một giây. Tốt hơn hết, bạn hãy cố gắng cẩn thận.",
		"icon": "magmite_worker.png"
	},
	"Lụa xanh": {
		"name": "Lụa xanh",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Thứ vật Chất này cứng hơn bất cứ thứ gì bạn từng biết. Lũ Mối xây tổ gần nơi có những thứ này với hy vọng có thể khai thác được thứ này, nhưng tới giờ vẫn Chưa thể làm được.",
		"icon": "lonsdaleite.png"
	},
	"Dầu": {
		"name": "Dầu",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Bạn không thể tưởng tượng được là thứ này sẽ hữu íCh Cho việc gì.",
		"icon": "oil.png"
	},
	"Ống Tre gai": {
		"name": "Ống Tre gai",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó Chỉ là một cái ống, làm từ một số thành phần thực vật hữu cơ. Nó sẽ mềm dần theo thời gian.",
		"icon": "pipedirt_pipe.png"
	},
	"Rêu rỉ sét": {
		"name": "Rêu rỉ sét",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Loại rêu này phải làm điều gì đó để tạo ra các ống mà bạn luôn thấy nhô ra từ Chúng. NHƯNG LÀ THỨ GÌ? Khoa học sẽ không bao giờ biết.",
		"icon": "rustmoss.png"
	},
	"Kim cương": {
		"name": "Kim cương",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Áp lực ở bên trong MạCh Băng áp CỰC KÌ MẠNH, nó có thể biến tất cả mọi thứ thành Kim cương! Bao gồm tất những gì nó đã từng!",
		"icon": "diamond.png"
	},
	"Cục bùn": {
		"name": "Cục bùn",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Khi bị Chà xuống, khối cầu này làm lộ ra một lượng lớn kim loại quý!",
		"icon": "geysir_slurry.png"
	},
	"Thỏ Cụt Tai": {
		"name": "Thỏ Cụt Tai",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Thứ nhỏ bé kì lạ này THẬT SỰ có thể Chạy rất nhanh. Bất cứ khi nào. Mà nó không làm vậy. BẠN KHÔNG THỂ SAI NÓ LÀM GÌ CẢ.",
		"icon": "spood_beast.png"
	},
	"Bàn Hewgo Đơn Giản": {
		"name": "Bàn Hewgo Đơn Giản",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Chiếc bàn này làm bởi Hewgodooko với đôi tay trần. Hoặc hắn có thể làm nó nó bằng cáCh nào đó. Lazer, có thể lắm Chứ. Một tia lazer.",
		"icon": "basic_hewgotable.png"
	},
	"Ghế Hewgo Đơn Giản": {
		"name": "Ghế Hewgo Đơn Giản",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Chiếc ghế này được tìm thấy ở một trong những căn cứ của Hewgodooko. Tạo tác thủ công rất tinh tế. Có khi Hewgodooko đã từng là một thợ mộc cao tay, cơ mà.... tại sao hắn ta làm ghế trong khi có thể trôi nổi Chứ?",
		"icon": "basic_hewgoChair.png"
	},
	"Đèn Hewgo": {
		"name": "Đèn Hewgo",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Cái đèn này sáng vĩnh viễn, có thể nó sử dụng một dạng nguồn năng lượng ma thuật nào đó... mà Chỉ Hewgodooko biết.",
		"icon": "hewgolamp.png"
	},
	"Rương kho báu": {
		"name": "Rương kho báu",
		"type": "Rương",
		"rarity": "Bình Thường",
		"description": "Hewgodooko có một vài cái rương lớn. Nó sẽ có íCh trong những hoạt động sử dụng rương Bình Thường.",
		"icon": "basic_hewgoChest.png"
	},
	"Đèn Hewgo xanh mòng két": {
		"name": "Đèn Hewgo xanh mòng két",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Một cái đèn từ căn cứ của Hewgodooko, thứ đang ở trên sàn. Nó có màu xanh mòng két tuyệt đẹp. Màu này khiến bạn liên tưởng tới màu kem đánh răng, đại dương hoặc thứ gì đó tương tự.",
		"icon": "teal_hewgolantern.png"
	},
	"Đèn Hewgo lục": {
		"name": "Đèn Hewgo lục",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Cái đèn này màu xanh, và bạn ước gì nó có thể trở nên xanh hơn nữa. Câu trả lời là có... có thể sẽ được? Không đời nào đâu.",
		"icon": "turbo_green_hewgolantern.png"
	},
	"Đèn Hewgo vàng": {
		"name": "Đèn Hewgo vàng",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Đèn màu vàng. Vàng, như màu như bầu trời vào một buổi trưa hè.",
		"icon": "yella_hewgolantern.png"
	},
	"Đèn Hewgo cam": {
		"name": "Đèn Hewgo cam",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Cây đèn này phát ra một ánh cam pha đỏ trầm lắng. Nó gợi nhớ về đôi mắt bốc lửa của con quỷ mà bạn từng yêu.",
		"icon": "rudorange_hewgolantern.png"
	},
	"Đèn Hewgo đỏ thẫm": {
		"name": "Đèn Hewgo đỏ thẫm",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "MÀU ĐỎ THẪM CỦA CÁI Đèn Hewgo NÀY THẬT ĐÁNG KINH NGẠC! Nó thật sự đỏ thẫm.",
		"icon": "magentamazing_hewgolantern.png"
	},
	"Đèn Hewgo tím": {
		"name": "Đèn Hewgo tím",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Màu của cái đèn này khá là giống màu áo của người bạn tù ở Trái Đất. Đó đã là quá khứ rồi.",
		"icon": "perp_purp_hewgolantern.png"
	},
	"Đèn Hewgo lam": {
		"name": "Đèn Hewgo lam",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Đèn nài phét da én séng xenh.",
		"icon": "bluh_hewgolantern.png"
	},
	"Khối Lập Thể": {
		"name": "Khối Lập Thể",
		"type": "Đồ nội thất",
		"rarity": "Siêu Cấp",
		"description": "Khối Lập Thể này ghi nhớ cấu trúc của bất cứ thứ gì bạn Cho nó ghi nhớ. Nhưng không may, nó quá phức tạp đối với kiến thức của bạn về công nghệ và nâng cấp màn hình. Mà, nhìn nó vẫn đẹp!",
		"icon": "hologram.png"
	},
	"Sợi len": {
		"name": "Sợi len",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "TríCh xuất ra từ một con Glaser đã thuần hoá, nó thật tốt để buộc các thứ lại. Không thể đòi hỏi gì hơn ở một món đồ tốt.",
		"recipe": {
			"name": "Glaser",
			"output_qty": 1,
			"type": "Pet",
			"ingredients": [{
				"name": "Cây Đậu bắp",
				"qty": 3
			}, {
				"name": "Lòng đỏ Trứng Xoắn ốc",
				"qty": 1
			}]
		},
		"icon": "glaser_silk.png"
	},
	"Mảnh Gạc Glaser": {
		"name": "Mảnh Gạc Glaser",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó nhọn và kêu ro ro bởi năng lượng. Bạn tự hỏi nó sẽ như thế nào nếu bị Chọc bởi nó.",
		"icon": "glaser_antler_fragment.png"
	},
	"Dạ dày Glaser": {
		"name": "Dạ dày Glaser",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Khi Glaser ăn thứ gì đó bất thường, dạ dày của Chúng sẽ thắt lại. Điều này dường như là một sự thiệt thòi.",
		"icon": "glaser_stomaChball.png"
	},
	"Guốc Glaser": {
		"name": "Guốc Glaser",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó cáCh nhiệt rất tốt, giống như xốp. Nó cũng có bề mặt như xốp. Bạn tự hỏi nếu nó xốp. Nó có thể là một mô xốp.",
		"icon": "glaser_hoof.png"
	},
	"Bướu điện Glaser": {
		"name": "Bướu điện Glaser",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Trung tâm năng lượng cực mạnh của Glaser, bướu điện này có thể sạc Cho một Chiếc điện thoại cục gạCh nhỏ.",
		"icon": "glaser_chargenub.png"
	},
	"Mỡ Shirk": {
		"name": "Mỡ Shirk",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó nảy lại và phát ra tiếng lạCh bạCh khi bạn ném nó vào bất kì thứ gì.",
		"icon": "shirk_blubber.png"
	},
	"Mỏ Shirk": {
		"name": "Mỏ Shirk",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Có thể việc này sẽ gây đau khi tước thứ này ra khỏi mặt của lũ Shirk, nhưng lũ Shirk không có cảm xúc hay bất kì sự tự vệ nào, vì vậy nó không phải vấn đề đáng ngại.",
		"icon": "shirk_beakfragment.png"
	},
	"Khối Natri": {
		"name": "Khối Natri",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Bạn cố gắng vắt Khối Natri này ra từ tuyến muối một con Shirk đã thuần hoá. Và bạn gần như Chỉ mất tứ Chi!",
		"recipe": {
			"name": "Shirk",
			"output_qty": 1,
			"type": "Pet",
			"ingredients": [{
				"name": "Bóng khí Bamli",
				"qty": 1
			}, {
				"name": "Hair Louse",
				"qty": 1
			}, {
				"name": "Cánh Hoa quả tạ",
				"qty": 2
			}]
		},
		"icon": "sodium_Chunk.png"
	},
	"Lông Shirk": {
		"name": "Lông Shirk",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Những Chiếc lông này Cho lũ Shirk sự đẹp đẽ, sự oai phong lẫm liệt. Chúng thật sự là những con quỷ Chim ăn thịt đẹp đẽ nhất trong tự nhiên.",
		"icon": "shirk_plumage.png"
	},
	"Tuyến muối Shirk": {
		"name": "Tuyến muối Shirk",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Lũ Shirk thíCh thêm muối vào đồ ăn, nên tuyến muối này rất hữu dụng đấy.",
		"icon": "shirk_saltgland.png"
	},
	"Tinh thể Lyff": {
		"name": "Tinh thể Lyff",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Truyền thuyết nói rằng Lyff sẽ tặng những tinh thể của Chúng Cho những ai Chúng coi là bạn. Truyền thuyết nào thế? Bạn biết đấy... Chỉ là truyền thuyết thôi.",
		"recipe": {
			"name": "Lyff",
			"output_qty": 1,
			"type": "Pet",
			"ingredients": [{
				"name": "Chất nhầy độc",
				"qty": 1
			}, {
				"name": "Khối Nấm Bè",
				"qty": 3
			}, {
				"name": "Đỉa điện từ",
				"qty": 1
			}]
		},
		"icon": "lyff_crystalshard.png"
	},
	"Gân Lyff": {
		"name": "Gân Lyff",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Là cơ quan duy nhất mà Lyff dùng để di Chuyển. Nó phát ra một tiếng 'BOING' lớn khi bạn kéo dãn nó rồi thả ra",
		"icon": "lyff_donglespring.png"
	},
	"Da Lyff": {
		"name": "Da Lyff",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Da khá mỏng, nhưng nó được bao phủ bởi một lớp lông \"cực kỳ dày\". Thực tế, nó dày đến nỗi nó có thể không có lông. Nó có thể Chỉ là da dày hơn.",
		"icon": "lyff_leather.png"
	},
	"Bong bóng khí Lyff": {
		"name": "Bong bóng khí Lyff",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Khi Lyff muốn ngâm mình, phần này sẽ làm Cho Chúng nổi. Nó công hiệu tới nỗi làm Lyff không thể bơi bằng Chân dưới nước mà không bật nổi lên.",
		"icon": "lyff_swimbladder.png"
	},
	"Lưỡi Lyff": {
		"name": "Lưỡi Lyff",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó hơi khô và ráp. Nếu bạn Chà nó lên má, sẽ không có gì xảy ra cả.",
		"icon": "lyfftongue.png"
	},
	"Lõi DịCh Chuyển": {
		"name": "Lõi DịCh Chuyển",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "RáCh ra từ lồng ngực của Gallum. Lõi này sẽ hữu dụng với những thứ liên quan tới dịCh Chuyển.",
		"icon": "gallum_warpcore.png"
	},
	"Xương sườn Gallum": {
		"name": "Xương sườn Gallum",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Những xương sườn này tạo sự bảo vệ Cho lõi hình cong của Gallum. Nhưng nó rõ ràng không đủ Chắc Chắn khi bạn có thể phá vỡ bằng tay không.",
		"icon": "gallum_rib.png"
	},
	"Thịt Gallum": {
		"name": "Thịt Gallum",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Miếng thịt này giữ Cho các xương sườn của Gallum gắn lại với nhau. Ném nó và nồi cùng một Chút muối và tiêu, cùng một con non, bạn sẽ có một món hầm.",
		"icon": "gallum_meat.png"
	},
	"Giáp Gallum": {
		"name": "Giáp Gallum",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Đây có lẽ là vật Chất bền nhất mà loài người từng biết, vì nó thực sự bền... và loài người biết đến.",
		"icon": "gallum_armor.png"
	},
	"Tai Gulanti": {
		"name": "Tai Gulanti",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Bạn vừa giúp Gulanti có thêm một cái lỗ mới ngay trên cái lỗ cũ, to hơn Chút.",
		"icon": "gulanti_blowhole.png"
	},
	"Da Gulanti": {
		"name": "Da Gulanti",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó trở nên ấm khi bạn giữ lửa Cho nó, nhưng sẽ ngừng ấm lên nếu bạn lấy lửa ra khỏi nó.",
		"icon": "gulanti_calcite.png"
	},
	"Xương hàm Gulanti": {
		"name": "Xương hàm Gulanti",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Lũ Gulanti có lẽ đã sử dụng những lưỡi răng cưa này để xé thịt khỏi xương của những con mồi của Chúng, hoặc cũng có thể để làm mộc.",
		"icon": "gulanti_Chomper.png"
	},
	"Lõi điện Gulanti": {
		"name": "Lõi điện Gulanti",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Bạn có biết cái cảm giác mà khi Chà tất xuống nền thảm, sau đó Chạm vào một vật, và nó bật lại? Chạm thứ này sẽ không giống vậy.",
		"icon": "gulanti_elecore.png"
	},
	"Thịt Gulanti": {
		"name": "Thịt Gulanti",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Bất cứ thứ gì bạn đặt cạnh thứ này, nó dường như làm thứ trở nên tuyệt vời hơn. Nó được lấy từ một con Gulanti đã thuần hoá!",
		"recipe": {
			"name": "Gulanti",
			"output_qty": 1,
			"type": "Pet",
			"ingredients": [{
				"name": "Cây Thố thảo",
				"qty": 2
			}, {
				"name": "Sâu hồng nhan",
				"qty": 2
			}]
		},
		"icon": "gulanti_zeolite.png"
	},
	"Vỏ Slurb": {
		"name": "Vỏ Slurb",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Khi bạn nhìn vào lớp vỏ sáng bóng, bạn bắt đầu ảo tưởng rằng mình mắc kẹt một mình trên một hành tinh, đấu tranh sinh tồn trong khi cố gắng đánh bại một tên ngoài hành tinh cụt tứ Chi.",
		"icon": "slurbshell.png"
	},
	"Nước nhầy Slurb": {
		"name": "Nước nhầy Slurb",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Có được từ một con Slurb đã thuần hoá. Nó có phải Chất nhầy không? Nó có điện không? Đúng rồi đấy.",
		"recipe": {
			"name": "Slurb",
			"output_qty": 1,
			"type": "Pet",
			"ingredients": [{
				"name": "Lòng xanh Trứng Xoắn ốc",
				"qty": 2
			}, {
				"name": "Cây Kiên thảo",
				"qty": 2
			}, {
				"name": "Chất nhầy độc",
				"qty": 1
			}]
		},
		"icon": "slurb_electrucus.png"
	},
	"Nam Châm Slurb": {
		"name": "Nam Châm Slurb",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Slurbs có thể sử dụng những thứ này để mở rộng thêm những cú nhào lộn nghệ thuật của Chúng trên không. Chiếc nam Châm này được Chế tác khéo léo một cáCh hoàn hảo.",
		"icon": "slurb_magnet.png"
	},
	"Xương sống Slurb": {
		"name": "Xương sống Slurb",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó cực kì nhọn, bạn có thể gắn nó vào thứ gì đó, sau đó Chọc đồ vật, và nó gây thiệt hại rất lớn.",
		"icon": "slurb_sPine.png"
	},
	"Vỏ Blastcrab": {
		"name": "Vỏ Blastcrab",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó không Chắc Chắn lắm ở điều kiện thường, nhưng sẽ rất Chắc Chắn ngay khi tiếp xúc với một vụ nổ.",
		"icon": "blastcrab_shell.png"
	},
	"Tuyến đánh lửa": {
		"name": "Tuyến đánh lửa",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Trông nó giống cái bật lửa hơn, nó đánh những tia lửa bên trong cơ thể của Blastcrab và kíCh nổ... bất cứ thứ gì trong đó.",
		"icon": "blastcrab_ignition_gland.png"
	},
	"Ch4": {
		"name": "Ch4",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Được đẩy ra từ ống xả của Blastcrab đã thuần hoá, hỗn hợp này khiến bạn khè ra lửa!",
		"recipe": {
			"name": "Blastcrab",
			"output_qty": 1,
			"type": "Pet",
			"ingredients": [{
				"name": "Túi Dầu",
				"qty": 2
			}, {
				"name": "Chất nhầy cam",
				"qty": 1
			}, {
				"name": "Chùy Gai",
				"qty": 2
			}]
		},
		"icon": "blastcrab_hydrocarbon.png"
	},
	"Da Blastcrab": {
		"name": "Da Blastcrab",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó Chắc và dai! Gần như quá dai...",
		"icon": "blastcrab_hide.png"
	},
	"Chất nhầy Gallum": {
		"name": "Chất nhầy Gallum",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "This high-energy goo binds the cosmic energy of the Gallums crystals together. If you treat a domesticated Gallum well, it might give you some!",
		"recipe": {
			"name": "Gallum",
			"output_qty": 1,
			"type": "Pet",
			"ingredients": [{
				"name": "Lõi điện Gulanti",
				"qty": 1
			}, {
				"name": "Lụa xanh",
				"qty": 2
			}, {
				"name": "Tinh thể xanh lá",
				"qty": 1
			}]
		},
		"icon": "gallium.png"
	},
	"Cầu Huỳnh Quang": {
		"name": "Cầu Huỳnh Quang",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Bạn đã bơm vào nhiều Dung Dịch phát quang nhất có thể. Thứ này sẽ sáng đến... SUỐT ĐỜI.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Kitin",
				"qty": 3
			}, {
				"name": "Keo cơ bản",
				"qty": 1
			}, {
				"name": "Dịch phát quang",
				"qty": 2
			}]
		},
		"icon": "glowb.png"
	},
	"Xưởng đồ da": {
		"name": "Xưởng đồ da",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Giờ đây bạn đang Chế tạo những thứ làm từ Wompit!",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 12
			}, {
				"name": "Xương Wompit",
				"qty": 8
			}, {
				"name": "Nhánh Chuông gió",
				"qty": 22
			}]
		},
		"icon": "skinnery.png"
	},
	"Cuốc Mỏ Shirk": {
		"name": "Cuốc Mỏ Shirk",
		"type": "Công cụ",
		"level": "Bậc 4",
		"rarity": "Bình Thường",
		"description": "Cuốc Chim bậc 4. Lòng bàn tay của bạn sẽ được những Chiếc lông ống vuốt ve một cáCh dễ Chịu khi dùng nó.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nhánh cây Cẩu tíCh",
				"qty": 8
			}, {
				"name": "Vỏ sừng",
				"qty": 6
			}, {
				"name": "Cuốc Chim Thùa gai",
				"qty": 1
			}, {
				"name": "Mỏ Shirk",
				"qty": 7
			}]
		},
		"icon": "shirkbeak_pickaxe.png"
	},
	"Cối xay gió nhỏ": {
		"name": "Cối xay gió nhỏ",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Nếu bạn đặt một miếng bánh mì vào đó, bạn sẽ có thêm nhiều miếng bánh mì.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đế Hoa quả tạ",
				"qty": 23
			}, {
				"name": "Lá Lược mao",
				"qty": 6
			}, {
				"name": "Vỏ trứng Xoắn ốc",
				"qty": 6
			}, {
				"name": "Nhánh Lược mao",
				"qty": 11
			}]
		},
		"icon": "shredbasket.png"
	},
	"Búa lông": {
		"name": "Búa lông",
		"type": "Vũ khí",
		"level": "Cấp 25",
		"rarity": "Ngẫu Nhiên",
		"description": "Búa cấp 25. Chòm lông đính ở Chuôi khiến Chúng có một đối trọng hoàn hảo.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nhánh Lược mao",
				"qty": 8
			}, {
				"name": "Cánh Hoa quả tạ",
				"qty": 9
			}, {
				"name": "Mỡ Shirk",
				"qty": 13
			}, {
				"name": "Lông Shirk",
				"qty": 3
			}]
		},
		"icon": "fursmasher.png"
	},
	"Mũ Thổ dân": {
		"name": "Mũ Thổ dân",
		"type": "Mũ giáp",
		"level": "Cấp 25",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 25. Thứ cuối cùng mà kẻ thù thấy Chỉ là thấp thoáng nụ cười tỏa nắng của bạn.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nhánh Lược mao",
				"qty": 7
			}, {
				"name": "Đế Hoa quả tạ",
				"qty": 14
			}, {
				"name": "Lông Shirk",
				"qty": 3
			}, {
				"name": "Mỏ Shirk",
				"qty": 7
			}]
		},
		"icon": "smat.png"
	},
	"Giáp thổ dân": {
		"name": "Giáp thổ dân",
		"type": "Áo giáp",
		"level": "Cấp 25",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 25. Cây quả tạ có thể Chịu một cú nện mạnh, và giờ bạn cũng thế!",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nhánh Lược mao",
				"qty": 7
			}, {
				"name": "Đế Hoa quả tạ",
				"qty": 13
			}, {
				"name": "Chùm lông lạ",
				"qty": 1
			}, {
				"name": "Mỡ Shirk",
				"qty": 11
			}]
		},
		"icon": "smock.png"
	},
	"Găng tay Thổ dân": {
		"name": "Găng tay Thổ dân",
		"type": "Găng tay",
		"level": "Cấp 25",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 25. Phần lòng đỏ khá dính, nhưng nó giữ Cho đôi găng tay bám Chắc Chắn vào tay bạn. Nó là một sự đánh đổi.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nhánh Lược mao",
				"qty": 5
			}, {
				"name": "Đế Hoa quả tạ",
				"qty": 11
			}, {
				"name": "Mỡ Shirk",
				"qty": 9
			}, {
				"name": "Lòng đỏ Trứng Xoắn ốc",
				"qty": 2
			}]
		},
		"icon": "smitts.png"
	},
	"Quần Thổ dân": {
		"name": "Quần Thổ dân",
		"type": "Quần giáp",
		"level": "Cấp 25",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 25. Phần mỡ đã làm một công việc tuyệt vời đó là giữ lại nhiệt tự nhiên từ cặp giò của bạn, nhiệt độ rất là quan trọng trong cái lạnh của Tundra.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nhánh Lược mao",
				"qty": 4
			}, {
				"name": "Đế Hoa quả tạ",
				"qty": 8
			}, {
				"name": "Mỡ Shirk",
				"qty": 7
			}, {
				"name": "Cánh Hoa quả tạ",
				"qty": 5
			}]
		},
		"icon": "smants.png"
	},
	"Trứng Shirk vá sơ sài": {
		"name": "Trứng Shirk vá sơ sài",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Nó Chỉ là một bản Chắp vá sơ sài, nhưng hầu hết lũ Shirk đủ ngu để rơi vào bẫy. Tiến hoá Shirk của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tinh Chất Shirk [Tinh quái]",
				"qty": 12
			}, {
				"name": "Mỡ Shirk",
				"qty": 107
			}, {
				"name": "Vỏ trứng Xoắn ốc",
				"qty": 30
			}, {
				"name": "Lòng xanh Trứng Xoắn ốc",
				"qty": 56
			}]
		},
		"icon": "poorly_repaired_shirk_egg.png"
	},
	"Nồi áp suất": {
		"name": "Nồi áp suất",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Hãy Chắc Chắn rằng bạn không để mặt bạn ngay trước nó khi nó đang hoạt động. Trừ khi bạn đang thử một phương pháp spa kinh dị",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Kim cương",
				"qty": 3
			}, {
				"name": "Cây Kiên thảo",
				"qty": 12
			}, {
				"name": "Đỉa điện từ",
				"qty": 1
			}, {
				"name": "Dạ dày Glaser",
				"qty": 3
			}]
		},
		"icon": "pressure_cooker.png"
	},
	"Xưởng hóa học": {
		"name": "Xưởng hóa học",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Giống bộ đồ Chơi hóa học lúc nhỏ ấy, nhưng ở một tầm cao mới.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Dạ dày Glaser",
				"qty": 4
			}, {
				"name": "Cây Kiên thảo",
				"qty": 16
			}, {
				"name": "Nấm phát quang",
				"qty": 2
			}]
		},
		"icon": "gastropestle.png"
	},
	"Xà cậy": {
		"name": "Xà cậy",
		"type": "Công cụ",
		"level": "Bậc 3",
		"rarity": "Bình Thường",
		"description": "Bay bậc 3. Sừng gạc và móng guốc là 2 thứ khá tệ để cậy mở, Cho tới khi bạn kết hợp Chúng lại. Theo cáCh khác, nó giống như việc mù tạt và mayonnaise của một quả trứng vỡ.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bay Vụn xương",
				"qty": 1
			}, {
				"name": "Nhánh Lược mao",
				"qty": 8
			}, {
				"name": "Guốc Glaser",
				"qty": 5
			}, {
				"name": "Lòng xanh Trứng Xoắn ốc",
				"qty": 7
			}]
		},
		"icon": "antlerhoof_trowel.png"
	},
	"Bình hồi máu Bọng mỡ": {
		"name": "Bình hồi máu Bọng mỡ",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Các Bọng mỡ thật sự Chứa vitamin P. Hồi 6,521 HP.",
		"recipe": {
			"name": "Cái Vạc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bọng mỡ",
				"qty": 3
			}, {
				"name": "Xương cá đầu búa",
				"qty": 3
			}]
		},
		"icon": "saggy_healing_potion.png"
	},
	"Thuốc Hấp huyết": {
		"name": "Thuốc Hấp huyết",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Ép nước với thứ này Cho phép bạn tước đi sinh lực từ mọi sinh thể xung quanh! 2% tỉ lệ hút máu khi đánh. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Nồi áp suất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ống Tre gai",
				"qty": 8
			}, {
				"name": "Tinh Chất Gulanti [Nhún nhảy]",
				"qty": 1
			}, {
				"name": "Tinh thể xanh lá",
				"qty": 2
			}]
		},
		"icon": "elixir_of_siphoning.png"
	},
	"Bình hồi máu Quả tạ": {
		"name": "Bình hồi máu Quả tạ",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Với lượng protein dồi dào này, bạn phải cân nhắc nghiêm túc về việc gập bụng. Hồi 17.894 HP.",
		"recipe": {
			"name": "Nồi áp suất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đế Hoa quả tạ",
				"qty": 3
			}, {
				"name": "Cây Đậu bắp",
				"qty": 3
			}]
		},
		"icon": "smashy_healbev.png"
	},
	"Thuốc Điên loạn nhất thời": {
		"name": "Thuốc Điên loạn nhất thời",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Cái thứ Chất lỏng ghê tởm này THỰC SỰ KHIẾN BẠN BỰC BỘI. Có 3% tỉ lệ mỗi giây khi đánh khiến bạn vào trạng thái cuồng bạo. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Nồi áp suất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đế Hoa quả tạ",
				"qty": 8
			}, {
				"name": "Cây Song Chi",
				"qty": 1
			}, {
				"name": "Tinh Chất Shirk [Tinh quái]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_temporary_insanity.png"
	},
	"Đất": {
		"name": "Đất",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó thật là bẩn.",
		"icon": "dirt.png"
	},
	"Đất Phù sa": {
		"name": "Đất Phù sa",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Bạn có thể trồng hạt giống lên nó! Nó rất xốp, màu mỡ và bẩn!.",
		"recipe": {
			"name": "BS SSSS SS5",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đất",
				"qty": 8
			}, {
				"name": "Mùn cưa",
				"qty": 4
			}]
		},
		"icon": "furdle_durt.png"
	},
	"Bẫy Glaser": {
		"name": "Bẫy Glaser",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Nếu có một điều mà Glaser không thể cưỡng lại được, thì đó là một phi hành gia mặc đồ bó sát ném một quả bóng từ những mảnh ghép được lắp ráp thô sơ vào nó. Tiến hóa Glaser của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Gạc Glaser",
				"qty": 67
			}, {
				"name": "Tinh Chất Glaser [Quý tộc]",
				"qty": 8
			}, {
				"name": "Đỉa điện từ",
				"qty": 6
			}, {
				"name": "Kim cương",
				"qty": 17
			}]
		},
		"icon": "gaze_catCher.png"
	},
	"Đao bạo thực": {
		"name": "Đao bạo thực",
		"type": "Vũ khí",
		"level": "Cấp 27",
		"rarity": "Ngẫu Nhiên",
		"description": "Kiếm cấp 27. Mặc dù Dạ dày Glaser không phải là vật liệu xây dựng tốt, nhưng dùng nó để xiên những thứ khác khá là tốt.",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Dạ dày Glaser",
				"qty": 2
			}, {
				"name": "Kim cương",
				"qty": 2
			}, {
				"name": "Cây Kiên thảo",
				"qty": 9
			}, {
				"name": "Đỉa điện từ",
				"qty": 1
			}]
		},
		"icon": "hardcore_stomord.png"
	},
	"Quần Bọ hung": {
		"name": "Quần Bọ hung",
		"type": "Quần giáp",
		"level": "Cấp 27",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 27. Những thứ kì lạ bó sát lấy đùi bạn!",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Guốc Glaser",
				"qty": 3
			}, {
				"name": "Cây Đậu bắp",
				"qty": 3
			}, {
				"name": "Đỉa điện từ",
				"qty": 1
			}]
		},
		"icon": "gloots.png"
	},
	"Giáp Bọ hung": {
		"name": "Glasevest",
		"type": "Áo giáp",
		"level": "Cấp 27",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 27. Nó bảo vệ, nâng đỡ và hỗ trợ! Đó là phẩm cáCh của bạn.",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Kiên thảo",
				"qty": 7
			}, {
				"name": "Đỉa điện từ",
				"qty": 1
			}, {
				"name": "Cây Đậu bắp",
				"qty": 3
			}, {
				"name": "Mảnh Gạc Glaser",
				"qty": 7
			}]
		},
		"icon": "glasevest.png"
	},
	"Mũ Bọ hung": {
		"name": "Mũ Bọ hung",
		"type": "Mũ giáp",
		"level": "Cấp 27",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 27. Nó bảo vệ đầu bạn rất Chắc, bạn sẽ Chẳng ngán thứ gì cả. Nghiêm túc mà nói, bạn Chẳng cần ý kiến gì về việc này.",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Kiên thảo",
				"qty": 8
			}, {
				"name": "Đỉa điện từ",
				"qty": 1
			}, {
				"name": "Mảnh Gạc Glaser",
				"qty": 8
			}, {
				"name": "Kim cương",
				"qty": 2
			}]
		},
		"icon": "hardhat.png"
	},
	"Găng Bọ hung": {
		"name": "Găng Bọ hung",
		"type": "Găng tay",
		"level": "Cấp 27",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 27. Nồng độ axit cao trong đấy sẽ khiến tay bạn mềm ra. Mà ai cũng thíCh tay mềm mà!",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Dạ dày Glaser",
				"qty": 2
			}, {
				"name": "Đỉa điện từ",
				"qty": 1
			}, {
				"name": "Kim cương",
				"qty": 2
			}, {
				"name": "Tuyến muối Shirk",
				"qty": 2
			}]
		},
		"icon": "stomagloves.png"
	},
	"Khoáng thạCh": {
		"name": "Khoáng thạCh",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Bằng cáCh đổ Cục bùn vào Máy lọc bùn, bạn có thể làm sạCh nó và táCh ra những thứ hữu dụng từ nó.",
		"recipe": {
			"name": "Máy lọc bùn",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cục bùn",
				"qty": 1
			}, {
				"name": "Cây Đậu bắp",
				"qty": 1
			}]
		},
		"icon": "slurry_processing.png",
		"drop": ["Chất nhầy độc", "Carbon", "Hợp Kim Titan"]
	},
	"Máy lọc bùn": {
		"name": "Máy lọc bùn",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Dường như những Cục bùn bạn lấy từ MạCh Băng áp có thể Chứa rất nhiều tài nguyên giá trị. Cái máy này sẽ giúp bạn Chiết táCh tất cả những thứ tinh túy thơm ngon!",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Kiên thảo",
				"qty": 2
			}, {
				"name": "Cây Kiên thảo",
				"qty": 13
			}, {
				"name": "Vỏ Slurb",
				"qty": 26
			}, {
				"name": "Xương sống Slurb",
				"qty": 14
			}]
		},
		"icon": "slurrifier.png"
	},
	"Carbon": {
		"name": "Carbon",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Nó được bao bọc trong Cục bùn, và bạn phải dọn sạCh nó. Các góc cạnh của nó khá là thô, nhưng nó có lẽ sẽ tốt Cho thứ gì đó.",
		"icon": "karboan.png"
	},
	"Hợp Kim Titan": {
		"name": "Hợp Kim Titan",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Cứng và Chống cào xước, và mài đế bóng loáng. Không gì có thể làm sứt mẻ được nó, và nó kêu nhẹ nhàng mỗi khi đến gần nó.",
		"icon": "teChnium.png"
	},
	"Chất nhầy độc": {
		"name": "Chất nhầy độc",
		"type": "Mảnh thành phần",
		"rarity": "Bình Thường",
		"description": "Phần Chất nhầy này là thành phần Chính của bùn. Nó dính Chặt vào bất cứ thứ gì nó Chạm vào, kể cả lỗ mũi bạn.",
		"icon": "meltor.png"
	},
	"Cần câu Carbon": {
		"name": "Cần câu Carbon",
		"type": "Công cụ",
		"level": "Bậc 3",
		"rarity": "Bình Thường",
		"description": "Cần câu bậc 3. Nó dài, cứng và đầy gai. Giống những thứ một Chiếc cần câu nên có.",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 12
			}, {
				"name": "Xương sống Slurb",
				"qty": 10
			}, {
				"name": "Cần câu Vỏ xương",
				"qty": 1
			}, {
				"name": "Sợi len",
				"qty": 2
			}]
		},
		"icon": "karbopole.png"
	},
	"Lò sấy": {
		"name": "Lò sấy",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Cung cấp mọi thứ mà Lò sấy của bạn cần, và nó còn đi kèm với một cái giá để ly! Và nó có nghĩa là bạn có thể đặt một Chiếc ly ở đó",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 18
			}, {
				"name": "Cá đuối băng",
				"qty": 4
			}, {
				"name": "Sên hải nhiệt",
				"qty": 2
			}, {
				"name": "Nấm phát quang",
				"qty": 2
			}]
		},
		"icon": "tumbler.png"
	},
	"Thuốc Kháng cự": {
		"name": "Thuốc Kháng cự",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Nó có mùi như bánh quế không có xi-rô vậy. Giảm 15% sát thương vật lý nhận vào. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Nồi áp suất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ống Tre gai",
				"qty": 6
			}, {
				"name": "Cây Băng tảo",
				"qty": 2
			}, {
				"name": "Rêu rỉ sét",
				"qty": 2
			}, {
				"name": "Tinh Chất Blastcrab [Tăng áp]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_resilience.png"
	},
	"Rìu Carbon": {
		"name": "Rìu Carbon",
		"type": "Vũ khí",
		"level": "Cấp 29",
		"rarity": "Ngẫu Nhiên",
		"description": "Rìu cấp 29. Khi vung đủ mạnh, giày trượt băng có thể là vũ khí Chết người. Như hầu hết mọi thứ, có lẽ vậy.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 12
			}, {
				"name": "Cá đuối băng",
				"qty": 3
			}, {
				"name": "Xương sống Slurb",
				"qty": 10
			}, {
				"name": "Chất nhầy độc",
				"qty": 4
			}]
		},
		"icon": "karbaxe.png"
	},
	"Mũ Quỷ vương": {
		"name": "Mũ Quỷ vương",
		"type": "Mũ giáp",
		"level": "Cấp 29",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 29. Bạn có thể đặt hàng tá con mắt với những thứ này.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 11
			}, {
				"name": "Mực Lông",
				"qty": 6
			}, {
				"name": "Chất nhầy độc",
				"qty": 4
			}, {
				"name": "Xương sống Slurb",
				"qty": 9
			}]
		},
		"icon": "karbelm.png"
	},
	"Giáp Quỷ vương": {
		"name": "Giáp Quỷ vương",
		"type": "Áo giáp",
		"level": "Cấp 29",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 29. Không gì có thể Che Chắn cơ thể bạn một cáCh ngang tàng như Mực Lông.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 10
			}, {
				"name": "Vỏ Slurb",
				"qty": 14
			}, {
				"name": "Mực Lông",
				"qty": 5
			}, {
				"name": "Bụi san hô",
				"qty": 4
			}]
		},
		"icon": "slest.png"
	},
	"Găng tay Quỷ vương": {
		"name": "Găng tay Quỷ vương",
		"type": "Găng tay",
		"level": "Cấp 29",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 29. Có sự cố với miếng đệm vai bên trong! Mốt thời trang đều tuần hoàn, phải Chứ? ... Phải vậy không?",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mực Lông",
				"qty": 6
			}, {
				"name": "Vỏ Slurb",
				"qty": 16
			}, {
				"name": "Bụi san hô",
				"qty": 4
			}]
		},
		"icon": "sloves.png"
	},
	"Quần Quỷ vương": {
		"name": "Quần Quỷ vương",
		"type": "Quần giáp",
		"level": "Cấp 29",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 29. Chiếc quần với lông thú, bảo vệ đôi Chân của bạn khỏi lạnh.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mực Lông",
				"qty": 5
			}, {
				"name": "Vỏ Slurb",
				"qty": 12
			}, {
				"name": "Cá đuối băng",
				"qty": 2
			}]
		},
		"icon": "sloots.png"
	},
	"Vòng Tay Từ Tính": {
		"name": "Vòng Tay Từ Tính",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Slurb sử dụng từ tính để lấy đà Cho mỗi bước nhảy. Tiến hoá Slurb của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Slurb",
				"qty": 147
			}, {
				"name": "Nam Châm Slurb",
				"qty": 18
			}, {
				"name": "Nước nhầy Slurb",
				"qty": 10
			}, {
				"name": "Tinh Chất Slurb [Phẫn nộ]",
				"qty": 14
			}]
		},
		"icon": "magnetic_bracelet.png"
	},
	"Cưa đốt sống": {
		"name": "Cưa đốt sống",
		"type": "Công cụ",
		"level": "Bậc 5",
		"rarity": "Bình Thường",
		"description": "Cưa bậc 5. Những Chiếc gai lởm Chởm của lũ Slurb làm Cho Chiếc cưa trông ngầu hơn. Rất tuyệt vời Cho việc bắt đầu và kết thúc cuộc trò Chuyện!",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lưỡi Lyff",
				"qty": 4
			}, {
				"name": "Xương sống Slurb",
				"qty": 10
			}, {
				"name": "Carbon",
				"qty": 12
			}, {
				"name": "Cưa râu trắng",
				"qty": 1
			}]
		},
		"icon": "sPinesaw.png"
	},
	"Lò đốt": {
		"name": "Lò đốt",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Nếu tốt thì nó sẽ tự Chạy, hoặc bạn sẽ nhận được thứ mang một đống vết móp méo!",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Chuỳ gai",
				"qty": 6
			}, {
				"name": "Lõi Phong phát",
				"qty": 19
			}, {
				"name": "Khối Nấm Bè",
				"qty": 29
			}, {
				"name": "Bụi san hô",
				"qty": 7
			}]
		},
		"icon": "burnChurn.png"
	},
	"Búa Tạ Nấm": {
		"name": "Búa Tạ Nấm",
		"type": "Vũ khí",
		"level": "Cấp 31",
		"rarity": "Ngẫu Nhiên",
		"description": "Búa cấp 31. Dù mềm và Chứa đầy khí, Nấm Bè có thể gây ra những thiệt hại nghiêm trọng trong thời gian rất, rất lâu. Có thể là rất nhiều năm sau đó.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khối Nấm Bè",
				"qty": 20
			}, {
				"name": "Lõi Phong phát",
				"qty": 13
			}, {
				"name": "Vỏ Chuỳ gai",
				"qty": 5
			}, {
				"name": "Bong bóng khí Lyff",
				"qty": 2
			}]
		},
		"icon": "flungmallet.png"
	},
	"Đồ Chơi Lyff": {
		"name": "Đồ Chơi Lyff",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Lyff của bạn rất hiếu động, vì thế món đồ giống đồ Chơi này cần người Chơi cùng. Tiến hoá Lyff của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tinh Chất Lyff [Dị sắc]",
				"qty": 7
			}, {
				"name": "Gân Lyff",
				"qty": 17
			}, {
				"name": "Cây Bọt đồng",
				"qty": 55
			}, {
				"name": "Hạt giống Nấm Bè",
				"qty": 51
			}]
		},
		"icon": "lyff_toy_bauble.png"
	},
	"Mũ Thiên tài": {
		"name": "Mũ Thiên tài",
		"type": "Mũ giáp",
		"level": "Cấp 31",
		"rarity": "Ngẫu Nhiên",
		"description": "Mũ giáp cấp 31. Đội thứ này truyền tới tiểu não của bạn năng lực thần kinh của Nấm Bè. Nó cũng lợi bỏ nhận thức của bạn một cáCh sâu sắc, thứ là lợi thế.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Lyff",
				"qty": 7
			}, {
				"name": "Vỏ Chuỳ gai",
				"qty": 4
			}, {
				"name": "Não Nấm bè",
				"qty": 3
			}, {
				"name": "Khối Nấm Bè",
				"qty": 18
			}]
		},
		"icon": "thinkingcap.png"
	},
	"Giáp Thiên tài": {
		"name": "Giáp Thiên tài",
		"type": "Áo giáp",
		"level": "Cấp 31",
		"rarity": "Ngẫu Nhiên",
		"description": "Giáp ngực cấp 31. Hơi Chật một xíu, cơ mà Chật vậy lại càng đẹp.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Lyff",
				"qty": 6
			}, {
				"name": "Vỏ Chuỳ gai",
				"qty": 4
			}, {
				"name": "Lõi Phong phát",
				"qty": 11
			}, {
				"name": "Cây Bọt đồng",
				"qty": 6
			}]
		},
		"icon": "florset.png"
	},
	"Găng tay Thiên tài": {
		"name": "Găng tay Thiên tài",
		"type": "Găng tay",
		"level": "Cấp 31",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 31. Cuốn Lưỡi Lyff xung quanh cánh tay bạn khiến tiếng vả của bạn trở lên cực kì sảng khoái.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Rễ nổi Nấm bè",
				"qty": 13
			}, {
				"name": "Lõi Phong phát",
				"qty": 9
			}, {
				"name": "Da Lyff",
				"qty": 5
			}, {
				"name": "Lưỡi Lyff",
				"qty": 3
			}]
		},
		"icon": "tonguemitts.png"
	},
	"Quần Thiên tài": {
		"name": "Quần Thiên tài",
		"type": "Quần giáp",
		"level": "Cấp 31",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 31. Lông tơ cảm giác đã thực sự. Giờ nó sẽ còn rậm rạp hơn nếu bạn có lông Chân.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lõi Phong phát",
				"qty": 9
			}, {
				"name": "Khối Nấm Bè",
				"qty": 13
			}, {
				"name": "Vỏ Chuỳ gai",
				"qty": 3
			}]
		},
		"icon": "floots.png"
	},
	"Cuốc Chim Băng": {
		"name": "Cuốc Chim Băng",
		"type": "Công cụ",
		"level": "Bậc 5",
		"rarity": "Bình Thường",
		"description": "Cuốc Chim bậc 5. Cẩn thận không nghịCh thứ này bằng bất cứ bộ phận nào trên cơ thể vì cây Cuốc Chim này có rất nhiều gai.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Blastcrab",
				"qty": 8
			}, {
				"name": "Chùy Gai",
				"qty": 8
			}, {
				"name": "Cuốc Mỏ Shirk",
				"qty": 1
			}, {
				"name": "Tinh thể Lyff",
				"qty": 2
			}]
		},
		"icon": "icy_pickaxe.png"
	},
	"Lò tinh luyện": {
		"name": "Lò tinh luyện",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Bơm nó lên và xử lý nó xuống~! Cậu bé hư này sẽ biến những thứ thô thiển thành bất cứ gì con tim nhỏ bé Chả bạn muốn!",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ống Tre gai",
				"qty": 26
			}, {
				"name": "Vỏ Blastcrab",
				"qty": 12
			}, {
				"name": "Da Blastcrab",
				"qty": 7
			}, {
				"name": "Cây Băng tảo",
				"qty": 8
			}]
		},
		"icon": "refinery.png"
	},
	"Đá Hợp Kim": {
		"name": "Đá Hợp Kim",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Nó cứng, tròn và mịn. Mặc dù có 1 Chút tính dẻo, nhưng nó cũng đủ tạo ra độ đàn hồi khá tốt.",
		"recipe": {
			"name": "Máy lọc Dầu",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 1
			}, {
				"name": "Túi Dầu",
				"qty": 1
			}]
		},
		"icon": "alloyonite.png"
	},
	"Mũ sao Hoả": {
		"name": "Mũ sao Hoả",
		"type": "Mũ giáp",
		"level": "Cấp 33",
		"rarity": "Ngẫu nhiên",
		"description": "Mũ giáp cấp 33. Nó vừa đủ nặng để bẻ gãy cổ bạn khi đội. Đó là cáCh bạn biết nó tốt.",
		"recipe": {
			"name": "Máy lọc Dầu",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Hợp Kim",
				"qty": 4
			}, {
				"name": "Vỏ Blastcrab",
				"qty": 8
			}, {
				"name": "Da Blastcrab",
				"qty": 4
			}, {
				"name": "Ống Tre gai",
				"qty": 16
			}]
		},
		"icon": "redhat.png"
	},
	"Giáp đỏ": {
		"name": "Giáp đỏ",
		"type": "Giáp ngực",
		"level": "Cấp 33",
		"rarity": "Ngẫu nhiên",
		"description": "Giáp ngực cấp 33. Nó đủ mạnh Cho một người đàn ông, và tất nhiên cũng đủ mạnh Cho một người phụ nữ. Bởi vì phụ nữ và đàn ông bình đẳng như nhau.",
		"recipe": {
			"name": "Máy lọc Dầu",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Hợp Kim",
				"qty": 3
			}, {
				"name": "Rêu rỉ sét",
				"qty": 5
			}, {
				"name": "Cây Băng tảo",
				"qty": 4
			}, {
				"name": "Da Blastcrab",
				"qty": 4
			}]
		},
		"icon": "redcoat.png"
	},
	"Găng tay sao hỏa": {
		"name": "Găng tay sao hỏa",
		"type": "Găng tay",
		"level": "Cấp 33",
		"rarity": "Ngẫu Nhiên",
		"description": "Găng tay cấp 33. Nó trông sắc lẻm ở bên ngoài, nhưng bên trong còn sắc hơn. Bạn nên đi khám ngay đi.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Hợp Kim",
				"qty": 3
			}, {
				"name": "Vỏ Blastcrab",
				"qty": 6
			}, {
				"name": "Da Blastcrab",
				"qty": 3
			}, {
				"name": "Cây Băng tảo",
				"qty": 4
			}]
		},
		"icon": "redsleeves.png"
	},
	"Quần sao Hỏa": {
		"name": "Quần sao Hỏa",
		"type": "Quần giáp",
		"level": "Cấp 33",
		"rarity": "Ngẫu Nhiên",
		"description": "Quần cấp 33. Những Chiếc ủng sẽ Cho bạn phong cáCh của một con đại bàng và sự khéo léo của một con đại bàng khác khi bay lượn trên bầu trời.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Hợp Kim",
				"qty": 3
			}, {
				"name": "Rêu rỉ sét",
				"qty": 4
			}, {
				"name": "Da Blastcrab",
				"qty": 3
			}]
		},
		"icon": "redboots.png"
	},
	"Thiết Diệm kiếm": {
		"name": "Thiết Diệm kiếm",
		"type": "Vũ khí",
		"level": "Cấp 33",
		"rarity": "Ngẫu Nhiên",
		"description": "Kiếm cấp 33. Hãy nhìn cây kiếm này. Bạn có thể đâm cả thế giới với nó.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Hợp Kim",
				"qty": 4
			}, {
				"name": "Chất nhầy độc",
				"qty": 5
			}, {
				"name": "Ống Tre gai",
				"qty": 18
			}, {
				"name": "Nước nhầy Slurb",
				"qty": 2
			}]
		},
		"icon": "redpoker.png"
	},
	"Bơm Thu Hồi": {
		"name": "Bơm Thu Hồi",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Nó tạo ra những âm thanh kì lạ khi Chiết xuất Dầu từ nước ở Tundra. Nó làm bạn muốn nhảy.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ống Tre gai",
				"qty": 27
			}, {
				"name": "Da Blastcrab",
				"qty": 7
			}, {
				"name": "Nam Châm Slurb",
				"qty": 4
			}, {
				"name": "Bong bóng khí Lyff",
				"qty": 3
			}]
		},
		"icon": "bagpump.png"
	},
	"Túi Dầu": {
		"name": "Túi Dầu",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Lót Bơm Thu Hồi bằng Băng tảo sẽ Cho phép bạn táCh thứ này ra khỏi nước. Nó bóng nhẫy ở bên ngoài và trơn nhớt ở bên trong!",
		"recipe": {
			"name": "Bơm Thu Hồi",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Băng tảo",
				"qty": 3
			}]
		},
		"icon": "oilbag.png"
	},
	"Cái bay được tra dầu": {
		"name": "Cái bay được tra dầu",
		"type": "Công cụ",
		"level": "Bậc 4",
		"rarity": "Bình Thường",
		"description": "Bay cấp 4. Tay cầm khá trơn, nhưng nó làm việc rất ổn.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Gulanti",
				"qty": 11
			}, {
				"name": "Xà cậy",
				"qty": 1
			}, {
				"name": "Túi Dầu",
				"qty": 5
			}, {
				"name": "Ống Tre gai",
				"qty": 18
			}]
		},
		"icon": "oiled_calcite_trowel.png"
	},
	"Thùng Dầu": {
		"name": "Thùng Dầu",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Lũ Blastcrab Chỉ quan tâm mỗi một điều, đó là đốt Cháy tất cả mọi thứ. Tiến hoá Blastcrab của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Blastcrab",
				"qty": 67
			}, {
				"name": "Tuyến đánh lửa",
				"qty": 9
			}, {
				"name": "Túi Dầu",
				"qty": 42
			}, {
				"name": "Tinh Chất Blastcrab [Tăng áp]",
				"qty": 7
			}]
		},
		"icon": "blastcrab_firebarrel.png"
	},
	"Bàn đúc": {
		"name": "Bàn đúc",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Nó hoạt động rất nhiệt huyết, nhưng không nhanh lắm. Bạn có thể hạ nó trong một cuộc Chạy marathon, hoặc bằng một cái Que.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 12
			}, {
				"name": "Tinh thể xanh lá",
				"qty": 7
			}, {
				"name": "Mối Thợ",
				"qty": 8
			}, {
				"name": "Da Gulanti",
				"qty": 17
			}]
		},
		"icon": "foundry.png"
	},
	"Rìu cá mập": {
		"name": "Rìu cá mập",
		"type": "Vũ khí",
		"level": "Cấp 35",
		"rarity": "Huyền Thoại",
		"description": "Rìu cấp 25. Bạn để ý rằng nếu bạn gõ lên nó bằng ngón tay, mọi người sẽ tránh ánh mắt bạn.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 35
			}, {
				"name": "Tinh thể xanh lá",
				"qty": 21
			}, {
				"name": "Giáp Gallum",
				"qty": 44
			}, {
				"name": "Xương hàm Gulanti",
				"qty": 27
			}]
		},
		"icon": "lonsdaxe.png"
	},
	"Mũ Lụa xanh": {
		"name": "Mũ Lụa xanh",
		"type": "Mũ giáp",
		"level": "Cấp 35",
		"rarity": "Huyền Thoại",
		"description": "Mũ giáp cấp 35. Nó vừa khít khìn khịt, bạn có thể nghe, nghĩ, nhìn, thở một cáCh vừa đủ. Thật là hoàn hảo!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 42
			}, {
				"name": "Xương hàm Gulanti",
				"qty": 33
			}, {
				"name": "Mối vương",
				"qty": 5
			}]
		},
		"icon": "lonsdelm.png"
	},
	"Giáp Lụa xanh": {
		"name": "Giáp Lụa xanh",
		"type": "Áo giáp",
		"level": "Cấp 35",
		"rarity": "Huyền Thoại",
		"description": "Giáp ngực cấp 35. Nó giữ Chặt xương sườn bạn với sức mạnh của một nghìn con bọ hung!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 28
			}, {
				"name": "Xương sườn Gallum",
				"qty": 9
			}, {
				"name": "Giáp Gallum",
				"qty": 35
			}, {
				"name": "Da Gulanti",
				"qty": 41
			}]
		},
		"icon": "lonsChest.png"
	},
	"Găng tay Lụa xanh": {
		"name": "Găng tay Lụa xanh",
		"type": "Găng tay",
		"level": "Cấp 35",
		"rarity": "Huyền Thoại",
		"description": "Găng tay cấp 13. Các lỗ thoáng khiến việc đeo trở nên dễ dàng, và lớp vỏ bên ngoài có độ cứng vừa đủ! Trên quan điểm cá nhân, 3/5 sao.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 30
			}, {
				"name": "Tai Gulanti",
				"qty": 11
			}, {
				"name": "Tinh thể xanh lá",
				"qty": 19
			}]
		},
		"icon": "lonsmitts.png"
	},
	"Quần Lụa xanh": {
		"name": "Quần Lụa xanh",
		"type": "Quần giáp",
		"level": "Cấp 35",
		"rarity": "Huyền Thoại",
		"description": "Quần cấp 35. Những lỗ ráCh quanh đùi gợi nhớ về những ngày còn là sinh viên nghèo.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 18
			}, {
				"name": "Tai Gulanti",
				"qty": 6
			}, {
				"name": "Thịt Gallum",
				"qty": 12
			}, {
				"name": "Tinh thể xanh lá",
				"qty": 11
			}]
		},
		"icon": "lonsboots.png"
	},
	"Bánh đuông dừa": {
		"name": "Bánh đuông dừa",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Gulanti rất thíCh trốn tìm. Có thể trò đùa này sẽ giúp nó doạ ai đó. Tiến hoá Gulanti của bạn thành dạng SIÊU CẤP",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lõi điện Gulanti",
				"qty": 14
			}, {
				"name": "Sâu hồng nhan",
				"qty": 10
			}, {
				"name": "Cây Thố thảo",
				"qty": 15
			}, {
				"name": "Tinh Chất Gulanti [Nhún nhảy]",
				"qty": 10
			}]
		},
		"icon": "surprise_grub.png"
	},
	"Khối Rubik": {
		"name": "Khối Rubik",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Siêu Cấp",
		"description": "Nâng Gallum của bạn lên cấp hoặc nó sẽ làm những hành động khó hiểu! Tiến hoá Gallum của bạn thành dạng SIÊU CẤP!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 65
			}, {
				"name": "Tinh thể xanh lá",
				"qty": 39
			}, {
				"name": "Tinh Chất Gallum [Vôi hoá]",
				"qty": 9
			}, {
				"name": "Lõi DịCh Chuyển",
				"qty": 12
			}]
		},
		"icon": "puzzlecube.png"
	},
	"Máy nướng cá": {
		"name": "Máy nướng cá",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Nó có thể giữ được rất nhiều nhiệt, nó sẽ trở lên rất dính sau khi dùng nhiều lần. Nó sẽ tốt hơn nếu bạn cọ rửa sau mỗi lần dùng.",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ốc sên cuộn",
				"qty": 5
			}, {
				"name": "Cá đuôi quỷ",
				"qty": 3
			}, {
				"name": "Hóa ThạCh Đại Cốt",
				"qty": 4
			}, {
				"name": "Nhựa nhầy Tartil",
				"qty": 20
			}]
		},
		"icon": "fishiminea.png"
	},
	"Bàn Dệt": {
		"name": "Bàn Dệt",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Nó trộn mọi thứ vào nhau, táCh thành từng sợi, và dệt Chúng thành một loại vải. Quá đỉnh!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mô cáCh điện",
				"qty": 23
			}, {
				"name": "Lông mi Wojack",
				"qty": 5
			}, {
				"name": "Cánh hoa Wojack",
				"qty": 21
			}, {
				"name": "Vòi Wojack",
				"qty": 15
			}]
		},
		"icon": "jackweaver.png"
	},
	"Máy nén": {
		"name": "Máy nén",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Tất cả mọi thứ bạn cần là một thái độ không lồi lõm, một Chút keo sinh học từ khớp Chân, một Trạm Chế tạo hoàn hảo làm từ da người ngoài hành tinh bơm căng phồng lên.",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Snorble",
				"qty": 16
			}, {
				"name": "Túi khí Snorble",
				"qty": 9
			}, {
				"name": "Cây Thùa gai",
				"qty": 3
			}, {
				"name": "MạCh Bawg",
				"qty": 13
			}]
		},
		"icon": "compressor.png"
	},
	"Máy ly tâm": {
		"name": "Máy ly tâm",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Quay đều, quay đều, quay đều,....",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ xương Satgat",
				"qty": 18
			}, {
				"name": "Ống san hô",
				"qty": 2
			}, {
				"name": "Thịt Satgat",
				"qty": 5
			}, {
				"name": "Xương cá đầu búa",
				"qty": 3
			}]
		},
		"icon": "centrifuge.png"
	},
	"Hoả trượng": {
		"name": "Hoả trượng",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Khi rỗi hơi không có gì làm, bạn Chỉ dùng nó để đốt trụi mọi thứ. Nhận 10% tỉ lệ thiêu đốt mục tiêu.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Polymer Snorble",
				"qty": 5
			}, {
				"name": "Ruột Satgat",
				"qty": 6
			}, {
				"name": "Actiso",
				"qty": 31
			}]
		},
		"icon": "Chemwand.png"
	},
	"Xúc tu gai": {
		"name": "Xúc tu gai",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Nâng cấp đòn đánh của bạn với SỨC MẠNH XÚC TU CỦA THROAK! Nhận 10% tỉ lệ gây ST băng khi cận Chiến.",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tuyến trùng Throak",
				"qty": 8
			}, {
				"name": "Thạch Throak",
				"qty": 4
			}, {
				"name": "Chất dính Nắp ấm",
				"qty": 7
			}, {
				"name": "Vụn xương",
				"qty": 52
			}]
		},
		"icon": "shivly.png"
	},
	"Kính áp tròng": {
		"name": "Kính áp tròng",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Giờ bạn có thể nhìn rõ; cơn đau đã hết. Giảm 15% thời gian hồi mọi vật phẩm.",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hương liệu Wojack",
				"qty": 4
			}, {
				"name": "Bóng gelatin",
				"qty": 4
			}, {
				"name": "Tuyến trùng Throak",
				"qty": 7
			}, {
				"name": "Giác mạc Wojack",
				"qty": 16
			}]
		},
		"icon": "retina_mounted_spice_injector.png"
	},
	"Tay game tối ưu": {
		"name": "Tay game tối ưu",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Giờ với cái tay cầm cực Chắc này. Thu hoạCh tài nguyên theo mọi hướng trở nên thật dễ dàng. Nhận 15% tỉ lệ tăng tốc Chạy khi đập tài nguyên.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bóng khí Bamli",
				"qty": 17
			}, {
				"name": "Hương liệu Wojack",
				"qty": 5
			}, {
				"name": "Da Zug nhiễm điện",
				"qty": 5
			}, {
				"name": "Khúc cây Bụt mọc",
				"qty": 4
			}]
		},
		"icon": "optimized_gamepad.png"
	},
	"Tượng Phát Tài": {
		"name": "Tượng Phát Tài",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Đây là cáCh bạn biết được bạn đã làm nó. Nhận 10% tỉ lệ nhận gấp đôi tài nguyên khi phá!",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hormone lạ",
				"qty": 5
			}, {
				"name": "Cục vàng",
				"qty": 5
			}, {
				"name": "Lụa Satgat",
				"qty": 5
			}, {
				"name": "Hương liệu Wojack",
				"qty": 5
			}]
		},
		"icon": "wealthy_statuette.png"
	},
	"Tấm Sưởi": {
		"name": "Tấm Sưởi",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Giữ ấm là dành Cho trẻ em. Và bạn, cũng như vậy. Nhận 20% kháng ST Băng và hiệu ứng lạnh.",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Chất dính Nắp ấm",
				"qty": 7
			}, {
				"name": "Mô cáCh điện",
				"qty": 63
			}, {
				"name": "Ch*m Vomma",
				"qty": 10
			}, {
				"name": "Hương liệu Wojack",
				"qty": 4
			}]
		},
		"icon": "heating_pad.png"
	},
	"Máy dò yếu điểm": {
		"name": "Máy dò yếu điểm",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Đã tới lúc mở một cuộc đại khám phá tới mọi nơi! Gia tăng 25% ST Chí mạng.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ruột Satgat",
				"qty": 4
			}, {
				"name": "Sinh Vật Phù Du",
				"qty": 2
			}, {
				"name": "Đỉa",
				"qty": 5
			}, {
				"name": "Rận hút máu",
				"qty": 4
			}]
		},
		"icon": "weakness_detector.png"
	},
	"Quả cầu máu": {
		"name": "Quả cầu máu",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Chỉ việc có thứ đẹp đẽ này xung quanh đã khiếu bạn muốn nghiền nát mọi mục tiêu và tước đi sinh mệnh của Chúng! Nhận 5% tỉ lệ hút máu khi cận Chiến.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Rận hút máu",
				"qty": 4
			}, {
				"name": "Quả Téo",
				"qty": 34
			}, {
				"name": "Đỉa",
				"qty": 5
			}, {
				"name": "Bóng gelatin",
				"qty": 4
			}]
		},
		"icon": "bloodball.png"
	},
	"Ống phê pha": {
		"name": "Ống phê pha",
		"type": "Trang sức",
		"rarity": "Tối Thượng",
		"description": "Bạn sẽ trở thành trung tâm của mọi bữa tiệc với Ống phê pha kì lạ này. Trừ khi bạn là cớm. Có 5% tỉ lệ tăng tốc Chạy với mỗi phát đánh cận Chiến.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "MạCh Bawg",
				"qty": 43
			}, {
				"name": "Thạch Throak",
				"qty": 5
			}, {
				"name": "Cây Hồ thảo",
				"qty": 18
			}, {
				"name": "Tảo Phát Quang",
				"qty": 4
			}]
		},
		"icon": "rave_tube.png"
	},
	"Hộp móng": {
		"name": "Hộp móng",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Bạn không có thời gian để Chảy máu, nhưng kẻ thù của bạn Chắc Chắn có! Nhận 10% tỉ lệ gây Chảy máu mục tiêu khi cận Chiến.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Thùa gai",
				"qty": 9
			}, {
				"name": "Rận hút máu",
				"qty": 4
			}, {
				"name": "Đỉa",
				"qty": 5
			}, {
				"name": "Ruột Satgat",
				"qty": 5
			}]
		},
		"icon": "clawbox.png"
	},
	"Lưỡi lê độc": {
		"name": "Lưỡi lê độc",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Với lượng độc vừa đủ, bạn có thể cân mọi thể loại! Nhận 10% tỉ lệ gây độc lên mục tiêu khi cận Chiến.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Dâu độc",
				"qty": 7
			}, {
				"name": "Mực Glidopus",
				"qty": 53
			}, {
				"name": "Phấn cánh Glutterfly",
				"qty": 3
			}, {
				"name": "Mỏ Glidopus",
				"qty": 7
			}]
		},
		"icon": "beakler.png"
	},
	"Điện gai": {
		"name": "Điện gai",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Thứ này cực kì tốt để gây giật điện bất ngờ mọi thứ. Đừng liếm đầu mút. Nhận 10% tỉ lệ gây ST Điện khi cận Chiến!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bugi phóng điện",
				"qty": 9
			}, {
				"name": "Da Zug nhiễm điện",
				"qty": 4
			}, {
				"name": "Móng Wat",
				"qty": 8
			}, {
				"name": "Búi lông Wat",
				"qty": 40
			}]
		},
		"icon": "shockprod.png"
	},
	"Túi cứu thương": {
		"name": "Túi cứu thương",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Chà túi này lên mặt sẽ xoa dịu mọi cơn đau! Nhận 20% kháng ST Độc.",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Keo cơ bản",
				"qty": 4
			}, {
				"name": "Da Wompit",
				"qty": 40
			}, {
				"name": "Bọ hàm kìm",
				"qty": 14
			}, {
				"name": "Trái tim Wompit nguyên vẹn",
				"qty": 5
			}]
		},
		"icon": "medicine_bag.png"
	},
	"Xương thu lôi": {
		"name": "Xương thu lôi",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Một Chân trên mặt Đất, và Chân còn lại tiếp Đất. Nhận 20% kháng ST Điện.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hóa ThạCh Đại Cốt",
				"qty": 11
			}, {
				"name": "Đất",
				"qty": 6
			}, {
				"name": "Nhựa nhầy Tartil",
				"qty": 58
			}, {
				"name": "Dây Biển",
				"qty": 7
			}]
		},
		"icon": "grounder.png"
	},
	"Quần tăng tốc": {
		"name": "Quần tăng tốc",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Giữ nó xung quanh khiến bạn hồi tưởng về ngày mà bạn còn là vận động viên Olympic. Chính là lúc đó. Gia tăng 5% tốc Chạy!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cánh Wat",
				"qty": 22
			}, {
				"name": "Gân chân Wompit",
				"qty": 13
			}, {
				"name": "Cá đuôi quỷ",
				"qty": 7
			}, {
				"name": "Túi Nọc độc đôi",
				"qty": 3
			}]
		},
		"icon": "mercurial_batshoes.png"
	},
	"Mồi Thu hút": {
		"name": "Mồi Thu hút",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Mùi hương làm bạn nhớ tới một bữa tiệc của hội anh em mà bạn từng dự 1 lần. Nhưng nó sẽ làm tăng 40% số cá trong hồ câu lên, và điều đó thật tuyệt.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Quả Sen cạn",
				"qty": 23
			}, {
				"name": "Lưỡi Tartil",
				"qty": 10
			}, {
				"name": "Cây Bội thảo",
				"qty": 8
			}]
		},
		"icon": "nasty_lure.png"
	},
	"Gia Trọng": {
		"name": "Gia Trọng",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Nó khá nặng, nhưng bạn đã căn cả rồi. Nhận 3% tỉ lệ gây Choáng mục tiêu khi cận Chiến.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cánh Hoa quả tạ",
				"qty": 46
			}, {
				"name": "Vỏ sừng",
				"qty": 30
			}, {
				"name": "Hormone lạ",
				"qty": 6
			}]
		},
		"icon": "the_heft.png"
	},
	"Động cơ xịn": {
		"name": "Động cơ xịn",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Chỉ cần tập trung suy nghĩ thêm, bạn luôn luôn có thể làm điều tốt hơn. Nhận 5% tỉ lệ khai thác tài nguyên tức thì.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tinh thể Lyff",
				"qty": 5
			}, {
				"name": "Não Nấm bè",
				"qty": 11
			}, {
				"name": "Tinh thể xanh lá",
				"qty": 19
			}, {
				"name": "Nước nhầy Slurb",
				"qty": 5
			}]
		},
		"icon": "efficiency_engine.png"
	},
	"Gậy Gai": {
		"name": "Gậy Gai",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Cây gậy này sẽ Cho bạn nhiều tài nguyên hơn khi đào! 75% tỉ lệ ra thêm tài nguyên cùng loại khi khai thác.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Gân Lyff",
				"qty": 9
			}, {
				"name": "Xương hàm Gulanti",
				"qty": 26
			}, {
				"name": "Thịt Gulanti",
				"qty": 5
			}, {
				"name": "Đá Hợp Kim",
				"qty": 16
			}]
		},
		"icon": "cleavebat.png"
	},
	"Trứng Phản Công": {
		"name": "Trứng Phản Công",
		"type": "Trang sức",
		"rarity": "Siêu Cấp",
		"description": "Đôi khi nó Chỉ cần một mồi lửa nhỏ dưới ngòi Châm. Gia tăng 15% tốc Chạy khi thấp máu!",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bướu điện Glaser",
				"qty": 7
			}, {
				"name": "Khối Natri",
				"qty": 5
			}, {
				"name": "Vỏ trứng Xoắn ốc",
				"qty": 16
			}, {
				"name": "Chất nhầy độc",
				"qty": 16
			}]
		},
		"icon": "motivator.png"
	},
	"Tay Máy": {
		"name": "Tay Máy",
		"type": "Trang sức",
		"rarity": "Tối Thượng",
		"description": "Cuối cùng thì cánh tay bé nhỏ của thú cưng bạn có thể làm được một số việc vặt! Tăng 20% ST pet.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ống Tre gai",
				"qty": 87
			}, {
				"name": "Hợp Kim Titan",
				"qty": 11
			}, {
				"name": "Tinh thể Lyff",
				"qty": 6
			}, {
				"name": "Cây Băng tảo",
				"qty": 25
			}]
		},
		"icon": "clarm.png"
	},
	"Đèn pha": {
		"name": "Đèn pha",
		"type": "Trang sức",
		"rarity": "Tối Thượng",
		"description": "Cho pet của bạn biết phải đánh vào đâu! Gia tăng 20% tỉ lệ Chí mang của pet.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Băng tảo",
				"qty": 24
			}, {
				"name": "Nấm phát quang",
				"qty": 5
			}, {
				"name": "Nước nhầy Slurb",
				"qty": 6
			}, {
				"name": "Đá Hợp Kim",
				"qty ": 18
			}]
		},
		"icon": "searChlight.png"
	},
	"Súng Thép Gai": {
		"name": "Súng Thép Gai",
		"type": "Thiết bị",
		"rarity": "Tốt",
		"description": "Khai thác sức mạnh của Throak để thổi tung kẻ địCh với SỰ LẠNH LÙNG CỦA CRUSH! Gây 100% ST/giây thành ST băng.",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xúc tu Throak",
				"qty": 68
			}, {
				"name": "Tuyến trùng Throak",
				"qty": 7
			}, {
				"name": "Lông mi Wojack",
				"qty": 11
			}, {
				"name": "Vụn xương",
				"qty": 45
			}]
		},
		"icon": "nematoblaster.png"
	},
	"Doping": {
		"name": "Doping",
		"type": "Phụ trợ",
		"rarity": "Siêu Cấp",
		"description": "Chỉ cần nhìn một cái nhìn vào thứ đáng sợ này sẽ khiến Adrenaline tuôn trào! Tăng tốc Chạy trong 10 giây.",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hạt giống Nắp ấm",
				"qty": 11
			}, {
				"name": "Actiso",
				"qty": 21
			}, {
				"name": "Lông mi Wojack",
				"qty": 13
			}, {
				"name": "Hương liệu Wojack",
				"qty": 4
			}]
		},
		"icon": "terrifying_fetish.png"
	},
	"Máy trợ tim": {
		"name": "Máy trợ tim",
		"type": "Phụ trợ",
		"rarity": "Tối Thượng",
		"description": "Sau khi nghiên cứu tế bào gốc và tế bào tim, bạn đã có khả năng hồi 50% lượng máu đã mất. Tốt hơn trước rất nhiều!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ch*m Vomma",
				"qty": 11
			}, {
				"name": "Hạt giống Nắp ấm",
				"qty": 12
			}, {
				"name": "Thịt Nắp ấm",
				"qty": 35
			}, {
				"name": "Bugi phóng điện",
				"qty": 10
			}]
		},
		"icon": "life_enforcer.png"
	},
	"Gậy sét": {
		"name": "Gậy sét",
		"type": "Thiết bị",
		"rarity": "Siêu Cấp",
		"description": "Ria mép của Bamli tạo tĩnh điện rất nhanh, bạn sẽ không điên tới mức vũ khí hoá Chúng đâu! Gây 100% ST/giây thành ST điện lên các mục tiêu đã Chọn và xung quanh.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Râu Bamli",
				"qty": 33
			}, {
				"name": "Cục vàng",
				"qty": 5
			}, {
				"name": "Cây Hồ thảo",
				"qty": 16
			}, {
				"name": "Tơ Huyết khối",
				"qty": 21
			}]
		},
		"icon": "shockstaChe.png"
	},
	"Kẻ lây nhiễm": {
		"name": "Kẻ lây nhiễm",
		"type": "Thiết bị",
		"rarity": "Siêu Cấp",
		"description": "Đập kẻ địCh với thứ này sẽ khiến Chúng bị độc và mọi thứ, mọi người nó thíCh! Gây 100% ST/giây thành ST độc lên mục tiêu của bạn và những mục tiêu gần đó.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đỉa",
				"qty": 5
			}, {
				"name": "Rận hút máu",
				"qty": 4
			}, {
				"name": "Tuyến trùng Throak",
				"qty": 8
			}, {
				"name": "Khúc cây Bụt mọc",
				"qty": 4
			}]
		},
		"icon": "plague_injector.png"
	},
	"Kính thiên văn": {
		"name": "Kính thiên văn",
		"type": "Phụ trợ",
		"rarity": "Tốt",
		"description": "Bằng cáCh hội tụ ánh sáng vào một điểm nhỏ trên võng mạc, bạn đã có thể lập tức đổi Chỗ với pet bằng cáCh nào đó. Rất nhiều thành tựu khoa học bên trong thứ này.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Túi khí Snorble",
				"qty": 28
			}, {
				"name": "Giác mạc Wojack",
				"qty": 20
			}, {
				"name": "Khúc cây Bụt mọc",
				"qty": 4
			}]
		},
		"icon": "swapscope.png"
	},
	"Boomerang Chân dơi": {
		"name": "Boomerang Chân dơi",
		"type": "Thiết bị",
		"rarity": "Siêu Cấp",
		"description": "Nó sẽ gây sát thương cực lớn Cho kẻ thù của bạn và khiến Chúng Chảy máu, nhưng hãy cẩn thận khi thu hồi nó, hoặc không bạn sẽ mất ... một ngón tay. Khiến mục tiêu bị Chảy máu bằng 100% ST/giây.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Móng Wat",
				"qty": 8
			}, {
				"name": "Mảnh Pha lê",
				"qty": 13
			}, {
				"name": "Cánh Wat",
				"qty": 22
			}, {
				"name": "Mai Zug",
				"qty": 69
			}]
		},
		"icon": "fingarang.png"
	},
	"DBot": {
		"name": "DBot",
		"type": "Phụ trợ",
		"rarity": "Tối Thượng",
		"description": "Chỉ cần ấn nút, DBot sẽ có mặt ngay lập tức, làm bạn bất khả Chiến bại! Nhưng nó dễ mất sức, nên đừng dùng nó quá mức.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bảo thạch vàng",
				"qty": 12
			}, {
				"name": "Bọ hàm kìm",
				"qty": 22
			}, {
				"name": "Quả Sen cạn",
				"qty": 22
			}]
		},
		"icon": "DBot.png"
	},
	"Máy bắn tuyết": {
		"name": "Máy bắn tuyết",
		"type": "Thiết bị",
		"rarity": "Tốt",
		"description": "Ném quả bóng Chứa tuyết và băng vào mặt kẻ thù, gây 70% ST/giây thành ST Băng và đóng băng Chân của Chúng trong một khu vực!",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 58
			}, {
				"name": "Nước nhầy Slurb",
				"qty": 6
			}, {
				"name": "Chất nhầy độc",
				"qty": 19
			}]
		},
		"icon": "slowball_maChine.png"
	},
	"Sấm Truyền Lệnh": {
		"name": "Sấm Truyền Lệnh",
		"type": "Phụ trợ",
		"rarity": "Siêu Cấp",
		"description": "Tạo ra một CƠN BÃO NHỎ ngay trên đầu bạn! cơn bão phát ra những tia điện mỗi giây, mỗi tia gây 75% ST/giây.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 33
			}, {
				"name": "Lõi điện Gulanti",
				"qty": 7
			}, {
				"name": "Bướu điện Glaser",
				"qty": 7
			}, {
				"name": "Hợp Kim Titan",
				"qty": 10
			}]
		},
		"icon": "thundercall.png"
	},
	"Lò bát quái": {
		"name": "Lò bát quái",
		"type": "Phụ trợ",
		"rarity": "Tối Thượng",
		"description": "Người ta nói nơi an toàn nhất của một địa ngục bạo tàn là điểm gốc. Nó có lẽ không đúng lắm, nhưng ta không thể kiểm Chứng nó. Thiêu đốt mục tiêu bằng 100% ST/giây!",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ch4",
				"qty": 6
			}, {
				"name": "Tuyến đánh lửa",
				"qty": 5
			}, {
				"name": "Hợp Kim Titan",
				"qty": 11
			}, {
				"name": "Đá Hợp Kim",
				"qty": 18
			}]
		},
		"icon": "big_red.png"
	},
	"Thừng buộc laze": {
		"name": "Thừng buộc laze",
		"type": "Phụ trợ",
		"rarity": "Tốt",
		"description": "Tạo một sợi dây laze giữa bạn và thú cưng của bạn, thứ có thể kéo qua kẻ thù và gây 75% ST/giây.",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bướu điện Glaser",
				"qty": 7
			}, {
				"name": "Mảnh Gạc Glaser",
				"qty": 39
			}, {
				"name": "Kim cương",
				"qty": 10
			}]
		},
		"icon": "laser_leash.png"
	},
	"Sàn Cây Nắp ấm": {
		"name": "Sàn Cây Nắp ấm",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Nó len vào giữa những ngón Chân khi bạn đi trên nó bằng Chân trần. Nó sẽ phát ra tiếng như rít như khi Chà tay vào Bóng bay",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thịt Nắp ấm",
				"qty": 10
			}]
		},
		"icon": "jollyfloor.png"
	},
	"Sàn cách điện": {
		"name": "Sàn cách điện",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Nó mềm mại và mịn như nhung, như nhung mịn. Chà đầu lên nó sẽ khiến bạn cảm thấy thật thư giãn.",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mô cáCh điện",
				"qty": 10
			}]
		},
		"icon": "myelar_floor.png"
	},
	"Sàn dát vàng": {
		"name": "Sàn dát vàng",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Nó trơn hơn khi bị ướt.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cục vàng",
				"qty": 10
			}]
		},
		"icon": "golden_floor.png"
	},
	"Sàn đế Hoa quả tạ": {
		"name": "Sàn đế Hoa quả tạ",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Nó dường như rất đàn hồi, bạn gần như có thể đập nó liên tục với bông hoa mà không ảnh hưởng gì.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đế Hoa quả tạ",
				"qty": 10
			}]
		},
		"icon": "smashblossom_floor.png"
	},
	"Sàn Carbon": {
		"name": "Sàn Carbon",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Nó cứng tới nỗi nếu ngã thẳng vào thì nó sẽ toang. Toang mặt bạn ấy, không phải cái cửa đâu.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 10
			}]
		},
		"icon": "karboan_floor.png"
	},
	"Sàn Lụa xanh": {
		"name": "Sàn Lụa xanh",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Khá khó khi đi trên nó, bởi nó làm từ những quả bóng lớn. Nhưng này, đó là cái giá phải trả khi giẫm lên những quả bóng.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 10
			}]
		},
		"icon": "lonsdaleite_floor.png"
	},
	"Tường Cây Nắp ấm": {
		"name": "Tường Cây Nắp ấm",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Bạn cảm thấy nếu Chạy đủ lực, nó sẽ nhường lối. Triển ngay nào!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thịt Nắp ấm",
				"qty": 5
			}]
		},
		"icon": "jollywall.png"
	},
	"Tường cáCh điện": {
		"name": "Tường cáCh điện",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Nó sẽ kêu lóc bóc nếu bạn áp mặt lên đấy. Chắc hẳn không phải là vật liệu tốt nhất rồi, nhưng bạn tính làm gì nữa?",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mô cáCh điện",
				"qty": 5
			}]
		},
		"icon": "myelar_wall.png"
	},
	"Tường vàng": {
		"name": "Tường vàng",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Nó thật sáng bóng tới nỗi bạn có thể thấy ảnh phản Chiếu của mình trong đó! Điều này phải thật là hữu íCh, theo cáCh nào đó.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cục vàng",
				"qty": 5
			}]
		},
		"icon": "golden_wall.png"
	},
	"Tường Hoa quả tạ": {
		"name": "Tường Hoa quả tạ",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Nó còn đặc hơn vật Chất trong lỗ đen. May thay là không phải lỗ đen, nếu không bạn có thể đang rơi ngay bây giờ.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đế Hoa quả tạ",
				"qty": 5
			}]
		},
		"icon": "smashblossom_wall.png"
	},
	"Tường Carbon": {
		"name": "Tường Carbon",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Nó đủ Chắc Chắn để có thể cản lốc xoáy, nhưng lại dịu dàng đến mức bạn có thể tin tưởng Cho Chúng trông coi con bạn.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 5
			}]
		},
		"icon": "karboan_wall.png"
	},
	"Tường Lụa xanh": {
		"name": "Tường Lụa xanh",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Nó là vật liệu rắn Chắc nhất vũ trụ. Nhưng nó khiến việc Chế tạo thành hình dạng này là một điều không thể tin được.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 5
			}]
		},
		"icon": "lonsdaleite_wall.png"
	},
	"Cửa đá nhẵn": {
		"name": "Cửa đá nhẵn",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Cánh cửa này được làm bằng loại đá siêu cứng, cánh cửa này sẽ giúp bạn giữ đồ của bạn khỏi bọn trộm !",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá nhẵn",
				"qty": 2
			}]
		},
		"icon": "flatstone_door.png"
	},
	"Cửa Nắp ấm": {
		"name": "Cửa Nắp ấm",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Khi nó co lại, Chất nhầy màu đỏ phụt ra. Nó có mùi giống kẹo!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thịt Nắp ấm",
				"qty": 2
			}]
		},
		"icon": "jollydoor.png"
	},
	"Cửa cách điện": {
		"name": "Cửa cách điện",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Cái cửa này có lẽ không giữ được nhiều thứ tránh xa khỏi nó, nhưng Chắc Chắn nó rất tuyệt!",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mô cáCh điện",
				"qty": 2
			}]
		},
		"icon": "myelar_door.png"
	},
	"Cửa vàng": {
		"name": "Cửa vàng",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Mặt trời phản Chiếu trên nó một cáCh sáng Chói, làm nó thật khó để mở. Thật đẹp làm sao!",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cục vàng",
				"qty": 2
			}]
		},
		"icon": "golden_door.png"
	},
	"Cửa Hoa quả tạ": {
		"name": "Cửa Hoa quả tạ",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Những cái núm của Chúng khiến nó rất khó đóng và mở, nhưng về mặt nào đó Chúng cũng làm nó trở nên dễ dàng hơn.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đế Hoa quả tạ",
				"qty": 2
			}]
		},
		"icon": "smashblossom_door.png"
	},
	"Cửa Carbon": {
		"name": "Cửa Carbon",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Nó rất cứng và thô. Đó là tất cả về của Carbon hoàn toàn mới, ngay từ Lò sấy độc đáo của bạn!",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 2
			}]
		},
		"icon": "karboan_door.png"
	},
	"Cửa Lụa xanh": {
		"name": "Cửa Lụa xanh",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Không ai có thể đi qua cánh cửa này! Trừ khi họ mở nó :)).",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa xanh",
				"qty": 2
			}]
		},
		"icon": "lonsdaleite_door.png"
	},
	"BS SSSS SS5": {
		"name": "BS SSSS SS5",
		"type": "Trạm Chế tạo",
		"rarity": "Bình Thường",
		"description": "Bạn đang sử dụng Cục Vận Chuyển Hàng không Tự duy trì S-5 đáng tin cậy! Nó sẽ giúp bạn bắt đầu ở một hành tinh đầy quái vật này.",
		"recipe": {
			"name": "BS SSSS SS5",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Que",
				"qty": 6
			}, {
				"name": "Lá Cỏ gai",
				"qty": 5
			}]
		},
		"icon": "bs_ssss_ss5.png"
	},
	"Mỏ neo": {
		"name": "Mỏ neo",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó sẽ khá tốt để Chế tạo một trong số Chúng, phòng khi bạn kết thúc với một con tàu hỏng thuộc sở hữu của bạn.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vảy ngọc",
				"qty": 2
			}, {
				"name": "Dây Biển",
				"qty": 2
			}, {
				"name": "Keo cơ bản",
				"qty": 1
			}]
		},
		"icon": "pearlscale_anChor.png"
	},
	"Kệ sáCh Pha lê": {
		"name": "Kệ sáCh Pha lê",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Đây là nơi bạn cất những quyển sáCh mà bạn kể với mọi người rằng bạn đã đọc!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 3
			}, {
				"name": "Cánh Wat",
				"qty": 4
			}, {
				"name": "Mùn cưa",
				"qty": 4
			}, {
				"name": "Mực Glidopus",
				"qty": 11
			}]
		},
		"icon": "crystalline_bookcase.png"
	},
	"Ngai vàng Pha lê": {
		"name": "Ngai vàng Pha lê",
		"type": "Đồ nội thất",
		"rarity": "Tối Thượng",
		"description": "Thứ này khiến bạn quên đi sự quan trọng của mình trong Chốc lát!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 4
			}, {
				"name": "Bảo thạch vàng",
				"qty": 3
			}, {
				"name": "Da Zug nhiễm điện",
				"qty": 1
			}, {
				"name": "Móng Wat",
				"qty": 2
			}]
		},
		"icon": "crystal_throne.png"
	},
	"Bệ đá tăng tốc": {
		"name": "Bệ đá tăng tốc",
		"type": "Bệ",
		"rarity": "Bình Thường",
		"description": "Chạm vào bệ đá này khiến đôi Chân bạn trở nên ngứa ngáy. Giống cảm giác khi bạn ngồi trên toilet quá lâu, Chỉ hơi khác thôi.",
		"icon": "turbo_shrine.png"
	},
	"Bệ đá thời gian": {
		"name": "Bệ đá thời gian",
		"type": "Bệ",
		"rarity": "Bình Thường",
		"description": "Lạm dụng bệ đá này sẽ khiến mọi thứ trở nên CỰC KÌ NHÀM ChÁN.",
		"icon": "glowing_shrine.png"
	},
	"Khúc mộc nhỏ": {
		"name": "Khúc mộc nhỏ",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Nó đu đưa qua lại, nhìn bạn Chằm Chằm với đôi mắt tô hố. Bạn cảm thấy khó Chịu khi nhìn nó",
		"icon": "logbaby.png"
	},
	"Rễ Maarla lởm Chởm": {
		"name": "Rễ Maarla lởm Chởm",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Rễ Maarla. Nó ngân nga khúc ca mang lại năng lượng Cho sự sống!",
		"icon": "exposed_root_of_maarla.png"
	},
	"Chồi Maarla": {
		"name": "Chồi Maarla",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Chồi của một cái cây được gọi là Maarla. Cánh hoa thì toả ra ánh sáng màu cam rực rỡ.",
		"icon": "expression_of_maarla.png"
	},
	"Hoa Maarla": {
		"name": "Hoa Maarla",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Một Hoa Maarla đã nở rộ. Hào quang tím của nó đầy bạn với sự ấm áp và cơn thèm bánh Burrito.",
		"icon": "flower_of_maarla.png"
	},
	"Đuốc Tendraam": {
		"name": "Đuốc Tendraam",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Tendraam sử dụng những nụ nhỏ của Maarla như nguồn sáng vào ban đêm.",
		"icon": "tendraam_torCh.png"
	},
	"Mầm Đá": {
		"name": "Mầm Đá",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Một cái mầm của Maarla mọc xuyên tảng Đá nhẵn.",
		"icon": "fractured_flatstone.png"
	},
	"Đường sỏi đá": {
		"name": "Đường sỏi đá",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Đi bộ trên nó sẽ khiến Cho bàn Chân bạn cảm thấy phê khó tả. Phê tới từng đầu ngón Chân luôn!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Cây Nắp ấm",
				"qty": 1
			}]
		},
		"icon": "gastrolith_path.png"
	},
	"Bóng bãi biển lam": {
		"name": "Bóng bãi biển lam",
		"type": "Đồ ném được",
		"rarity": "Bình Thường",
		"description": "Nó TO và có hình quả bóng!",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cánh Wat",
				"qty": 3
			}, {
				"name": "Quả Sen cạn",
				"qty": 6
			}, {
				"name": "Xương bánh Chè Zug",
				"qty": 1
			}, {
				"name": "Hoa Móng gà",
				"qty": 2
			}]
		},
		"icon": "blueglow_beaChball.png"
	},
	"Bóng bãi biển": {
		"name": "Bóng bãi biển",
		"type": "Đồ ném được",
		"rarity": "Bình Thường",
		"description": "Nếu thứ này được đánh bay thẳng vào mặt bạn, nó sẽ khá là hài hước đấy",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cánh Wat",
				"qty": 6
			}, {
				"name": "Bọ ăn khí",
				"qty": 3
			}, {
				"name": "Xương bánh Chè Zug",
				"qty": 2
			}, {
				"name": "Hoa Móng gà",
				"qty": 4
			}]
		},
		"icon": "beaChball.png"
	},
	"Bóng bãi biển lục": {
		"name": "Bóng bãi biển lục",
		"type": "Đồ ném được",
		"rarity": "Bình Thường",
		"description": "Nếu bị thứ này đập vào mặt trong bóng tối với tốc độ cao thì hài lắm.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Dịch phát quang",
				"qty": 10
			}, {
				"name": "Cánh Wat",
				"qty": 3
			}, {
				"name": "Bọ ăn khí",
				"qty": 5
			}, {
				"name": "Xương bánh Chè Zug",
				"qty": 1
			}]
		},
		"icon": "greenglow_beaChball.png"
	},
	"Chậu Trụ thảo": {
		"name": "Chậu Trụ thảo",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Ờ, nó là Cây Trụ thảo trong Chậu. ChỨ BẠN MUỐN GÌ NỮA?",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Trụ thảo",
				"qty": 1
			}, {
				"name": "Mảnh Pha lê",
				"qty": 2
			}]
		},
		"icon": "potted_straddlebark.png"
	},
	"Thùng ủ": {
		"name": "Thùng ủ",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Đứng gần nó sẽ khiến bạn muốn Giơ tay lên, nhìn cờ ~ Chào.",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mỡ Vomma",
				"qty": 11
			}, {
				"name": "Cây Trụ thảo",
				"qty": 1
			}, {
				"name": "Actiso",
				"qty": 4
			}, {
				"name": "Lông mi Wojack",
				"qty": 2
			}]
		},
		"icon": "vlapkeg.png"
	},
	"Kính viễn vọng": {
		"name": "Kính viễn vọng",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Sau khi dùng nó sẽ để lại một vòng tròn quanh hốc mắt.",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vụn xương",
				"qty": 9
			}, {
				"name": "Giác mạc Wojack",
				"qty": 3
			}, {
				"name": "Lăng Kính Pha lê",
				"qty": 1
			}, {
				"name": "Vòi Wojack",
				"qty": 8
			}]
		},
		"icon": "telescope.png"
	},
	"Hải đăng": {
		"name": "Hải đăng",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó nổi trên mặt nước, dù nó được làm từ vật liệu siêu nặng. Chắc Chắn phải có cái gì đó rất khoa học ở đây!",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vảy ngọc",
				"qty": 2
			}, {
				"name": "Dây Biển",
				"qty": 2
			}, {
				"name": "Quả Sen cạn",
				"qty": 3
			}, {
				"name": "Bóng nước",
				"qty": 6
			}]
		},
		"icon": "pearlscale_hoverbuoy.png"
	},
	"Đèn Nắp ấm": {
		"name": "Đèn Nắp ấm",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Quả cầu phát ra một hào quang kì ảo. Bạn có thể cảm thấy Chảy dãi khi xem nó.",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thịt Nắp ấm",
				"qty": 2
			}, {
				"name": "Chất dính Nắp ấm",
				"qty": 1
			}, {
				"name": "Lăng Kính Pha lê",
				"qty": 1
			}, {
				"name": "Bugi phóng điện",
				"qty": 1
			}]
		},
		"icon": "jollamp.png"
	},
	"Ma nhãn": {
		"name": "Ma nhãn",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó nhìn vào linh hồn của mọi thứ trong vũ trụ.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 3
			}, {
				"name": "Móng Wat",
				"qty": 2
			}, {
				"name": "Cây Trụ thảo",
				"qty": 1
			}, {
				"name": "Cá đuôi quỷ",
				"qty": 2
			}]
		},
		"icon": "evileye.png"
	},
	"Trứng Bamli": {
		"name": "Trứng Bamli",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Thậm Chí trước khi nở, Bamli đã phát triển bộ mào vĩ đại.",
		"icon": "bamli_egg.png"
	},
	"Trứng Blastcrab": {
		"name": "Trứng Blastcrab",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Nó nóng khi Chạm vào. Như một quả trứng, nhưng nó rất nóng để Chạm vào.",
		"icon": "blastcrab_egg.png"
	},
	"Trứng Gallum": {
		"name": "Trứng Gallum",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Quả trứng được cấu tạo từ những khối tinh thể, hệt như bố mẹ vậy. Trông nó có vẻ ngại. Bạn biết đấy, đối với một quả trứng.",
		"icon": "gallum_egg.png"
	},
	"Trứng Glaser": {
		"name": "Trứng Glaser",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Khi bị mang đi, quả trứng phát ra những âm thanh nghe như tiếng thở của các diễn viên phim hành động Nhật bản :))).",
		"icon": "glaser_egg.png"
	},
	"Trứng Glidopus": {
		"name": "Trứng Glidopus",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Không biết bạn thoa nó bằng khăn giấy như thế nào, nhưng nó vẫn ẩm.",
		"icon": "glidopus_egg.png"
	},
	"Trứng Glutterfly": {
		"name": "Trứng Glutterfly",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Có thể một thứ gì đó dễ thương sẽ Chui ra từ đây. Hoặc có lẽ là một con côn trùng bay kinh tởm.",
		"icon": "glutterfly_egg.png"
	},
	"Trứng Gulanti": {
		"name": "Trứng Gulanti",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Tai Gulanti phải ở đây vì một lý do nào đó. Điều gì đó mà.. không ai biết cả.",
		"icon": "gulanti_egg.png"
	},
	"Trứng Lyff": {
		"name": "Trứng Lyff",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Khi bị đe doạ, quả trứng này phát ra âm thanh Chói tai. Đúng là Cha nào con nấy.",
		"icon": "lyff_egg.png"
	},
	"Trứng Satgat": {
		"name": "Trứng Satgat",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Vỏ trứng có bộ vỏ xương giống bố mẹ!",
		"icon": "satgat_egg.png"
	},
	"Trứng Shirk": {
		"name": "Trứng Shirk",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Bé Shirk bên trong đang kêu lên dữ dội !!!!",
		"icon": "shirk_egg.png"
	},
	"Trứng Slurb": {
		"name": "Trứng Slurb",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Bạn phải cẩn thận khi cầm nó, nếu không bạn sẽ phải sửa lại mọi thứ.",
		"icon": "slurb_egg.png"
	},
	"Trứng Snorble": {
		"name": "Trứng Snorble",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Nó phập phồng như một túi khí. Gần như không có gì bên trong nó...",
		"icon": "snorble_egg.png"
	},
	"Trứng Tartil": {
		"name": "Trứng Tartil",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Nó dính vào tay bạn khi bạn Chạm vào nó. Hi vọng không phải vĩnh viễn.",
		"icon": "tartil_egg.png"
	},
	"Trứng Throak": {
		"name": "Trứng Throak",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Nó lúc lắc như thạCh khi bạn vỗ nó. Có lẽ bạn không nên vỗ nó.",
		"icon": "throak_egg.png"
	},
	"Trứng Vomma": {
		"name": "Trứng Vomma",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Trứng được bao phủ bởi một Chất nhầy dính, và có mùi như nhà vệ sinh của quán bar lúc tan giờ !!!",
		"icon": "vomma_egg.png"
	},
	"Trứng Wat": {
		"name": "Trứng Wat",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Quả trứng dường như đã sẵn sàng để nhanh tới lúc nở.",
		"icon": "wat_egg.png"
	},
	"Trứng Wojack": {
		"name": "Trứng Wojack",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Nó được bảo vệ trong Vòi Wojack! Có thể để giữ nó gắn với... bất cứ thứ gì.",
		"icon": "wojack_egg.png"
	},
	"Trứng Wompit": {
		"name": "Trứng Wompit",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Bạn nghĩ Wompit sẽ không đẻ trứng, Chỉ vì Chúng là động vật có vú? Bạn lầm rồi đấy.",
		"icon": "wompit_egg.png"
	},
	"Trứng Zug": {
		"name": "Trứng Zug",
		"type": "Trứng",
		"rarity": "Siêu Cấp",
		"description": "Nó kêu tanh táCh cùng với luồng điện. Bạn bị giật nhẹ bất cứ khi nào bạn cầm nó.",
		"icon": "zug_egg.png"
	},
	"Ổ Trứng Glidopus": {
		"name": "Ổ Trứng Glidopus",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Thứ này sẽ dần ẩm ướt hơn.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nhánh Chuông gió",
				"qty": 28
			}, {
				"name": "Lá Cỏ gai",
				"qty": 8
			}, {
				"name": "Khúc gỗ",
				"qty": 23
			}, {
				"name": "Trứng Glidopus",
				"qty": 1
			}]
		},
		"icon": "glidopus_incubator.png"
	},
	"Ổ trứng Glutterfly": {
		"name": "Ổ trứng Glutterfly",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Như đã nói, muốn nuôi một con Glutterfly thì phải làm cái này.",
		"recipe": {
			"name": "Máy đập đá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Glutterfly",
				"qty": 1
			}, {
				"name": "Sỏi đá vụn",
				"qty": 5
			}, {
				"name": "Lá Cỏ gai",
				"qty": 8
			}, {
				"name": "Khúc gỗ",
				"qty": 22
			}]
		},
		"icon": "glutterfly_incubator.png"
	},
	"Ổ Trứng Tartil": {
		"name": "Ổ Trứng Tartil",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Trứng Tartil dính vào mọi thứ Chúng Chạm vào. Kể cả thứ này!",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Tartil",
				"qty": 1
			}, {
				"name": "Hóa ThạCh Đại Cốt",
				"qty": 4
			}, {
				"name": "Lá Cỏ gai",
				"qty": 9
			}, {
				"name": "Khúc gỗ",
				"qty": 25
			}]
		},
		"icon": "tartil_incubator.png"
	},
	"Ổ trứng Wat": {
		"name": "Ổ trứng Wat",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Bạn nghĩ rằng đã tới lúc để nuôi một loài dơi móng nhọn.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bụi Pha lê",
				"qty": 2
			}, {
				"name": "Trứng Wat",
				"qty": 1
			}, {
				"name": "Lá Cỏ gai",
				"qty": 9
			}, {
				"name": "Khúc gỗ",
				"qty": 27
			}]
		},
		"icon": "wat_incubator.png"
	},
	"Ổ trứng Wompit": {
		"name": "Ổ trứng Wompit",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Nó sẽ khiến Trứng Wompit ở đúng nhiệt độ đủ để nở!",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Wompit",
				"qty": 1
			}, {
				"name": "Lưỡi Cỏ gai",
				"qty": 23
			}, {
				"name": "Lá Cỏ gai",
				"qty": 7
			}, {
				"name": "Khúc gỗ",
				"qty": 20
			}]
		},
		"icon": "wompit_incubator.png"
	},
	"Ổ Trứng Zug": {
		"name": "Ổ Trứng Zug",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Đừng bao giờ liếm nó lúc đang ấp. Trông ghê thực sự.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Zug",
				"qty": 1
			}, {
				"name": "Cây Trụ thảo",
				"qty": 1
			}, {
				"name": "Lá Cỏ gai",
				"qty": 9
			}, {
				"name": "Khúc gỗ",
				"qty": 27
			}]
		},
		"icon": "zug_incubator.png"
	},
	"Ổ trứng Shirk": {
		"name": "Ổ trứng Shirk",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Bạn có bao giờ muốn một con thân Chim đầu cá mập lắm mồm bay quanh bạn Chưa? Đây là cơ hội của bạn đấy!",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Shirk",
				"qty ": 1
			}, {
				"name": "Chùm lông lạ",
				"qty": 2
			}, {
				"name": "Nhánh Lược mao",
				"qty": 11
			}, {
				"name": "Cánh Hoa quả tạ",
				"qty": 12
			}]
		},
		"icon": "shirk_incubator.png"
	},
	"Ổ Trứng Blastcrab": {
		"name": "Ổ Trứng Blastcrab",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Trứng Blastcrab cần phải nóng cỡ nào? Có lẽ... có lẽ là cực kì nóng.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Blastcrab",
				"qty": 1
			}, {
				"name": "Túi Dầu",
				"qty": 7
			}, {
				"name": "Nhánh Lược mao",
				"qty": 13
			}, {
				"name": "Cánh Hoa quả tạ",
				"qty": 14
			}]
		},
		"icon": "blastcrab_incubator.png"
	},
	"Ổ trứng Gallum": {
		"name": "Ổ trứng Gallum",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Việc này sẽ rất khó khăn, vì quả trứng luôn cố gắng dịCh Chuyển mọi lúc.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Gallum",
				"qty": 1
			}, {
				"name": "Tinh thể xanh lá",
				"qty": 7
			}, {
				"name": "Nhánh Lược mao",
				"qty": 13
			}, {
				"name": "Cánh Hoa quả tạ",
				"qty": 14
			}]
		},
		"icon": "gallum_incubator.png"
	},
	"Ổ trứng Glaser": {
		"name": "Ổ trứng Glaser",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Hãy Chắc Chắn rằng bạn đặt mặt bên phải ngửa lên, nếu không bạn sẽ nhận được một con Glaser lộn ngược.",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Glaser",
				"qty": 1
			}, {
				"name": "Nấm phát quang",
				"qty": 2
			}, {
				"name": "Nhánh Lược mao",
				"qty": 11
			}, {
				"name": "Cánh Hoa quả tạ",
				"qty": 12
			}]
		},
		"icon": "glaser_incubator.png"
	},
	"Ổ Trứng Slurb": {
		"name": "Ổ Trứng Slurb",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Bạn sẽ không bao giờ biết khi nào cần một con ốc sên gai bay ở đằng trước hay là sau.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Slurb",
				"qty": 1
			}, {
				"name": "Carbon",
				"qty": 17
			}, {
				"name": "Nhánh Lược mao",
				"qty": 12
			}, {
				"name": "Cánh Hoa quả tạ",
				"qty": 13
			}]
		},
		"icon": "slurb_incubator.png"
	},
	"Ổ Trứng Gulanti": {
		"name": "Ổ Trứng Gulanti",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Bạn có biết thứ gì làm nên một cái đệm tốt không? Một con ấu trùng khổng lồ, vặn vẹo.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Gulanti",
				"qty": 1
			}, {
				"name": "Sâu hồng nhan",
				"qty": 2
			}, {
				"name": "Nhánh Lược mao",
				"qty": 13
			}, {
				"name": "Cánh Hoa quả tạ",
				"qty": 14
			}]
		},
		"icon": "gulanti_incubator.png"
	},
	"Ổ Trứng Lyff": {
		"name": "Ổ Trứng Lyff",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Không có cáCh nào để giữ quả Trứng Lyff một cáCh nguyên vẹn. Nhưng bạn sẽ thử làm nó bằng cáCh nào đó.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Lyff",
				"qty": 1
			}, {
				"name": "Khối Nấm Bè",
				"qty": 28
			}, {
				"name": "Nhánh Lược mao",
				"qty": 12
			}, {
				"name": "Cánh Hoa quả tạ",
				"qty": 13
			}]
		},
		"icon": "lyff_incubator.png"
	},
	"Ổ trứng Bamli": {
		"name": "Ổ trứng Bamli",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Với một đống Vỏ sừng và một Chút TLC, bạn có thể ấp nở mọi loại trứng!",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Bamli",
				"qty": 1
			}, {
				"name": "Vỏ sừng",
				"qty": 8
			}, {
				"name": "Mỡ Vomma",
				"qty": 27
			}, {
				"name": "Đá Cây Nắp ấm",
				"qty": 5
			}]
		},
		"icon": "bamli_incubator.png"
	},
	"Ổ trứng Satgat": {
		"name": "Ổ trứng Satgat",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Bọ xít với cái đầu nhỏ xíu là một thú cưng tuyệt vời. Bạn đã đọc về nó trên Internet một lần rồi.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Satgat",
				"qty": 1
			}, {
				"name": "Tơ Huyết khối",
				"qty": 7
			}, {
				"name": "Mỡ Vomma",
				"qty": 26
			}, {
				"name": "Đá Cây Nắp ấm",
				"qty": 5
			}]
		},
		"icon": "satgat_incubator.png"
	},
	"Ổ trứng Snorble": {
		"name": "Ổ trứng Snorble",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Với số mạCh máu cần thiết, bạn có thể nhét Trứng Snorble vào bất cứ thứ gì.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Snorble",
				"qty": 1
			}, {
				"name": "MạCh Bawg",
				"qty": 13
			}, {
				"name": "Mỡ Vomma",
				"qty": 25
			}, {
				"name": "Đá Cây Nắp ấm",
				"qty": 5
			}]
		},
		"icon": "snorble_incubator.png"
	},
	"Ổ Trứng Throak": {
		"name": "Ổ Trứng Throak",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Làm sao để ấp Trứng Throak vậy? Không, hỏi thiệt đó... đúng không vậy?",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Throak",
				"qty": 1
			}, {
				"name": "Gai cột sống",
				"qty": 3
			}, {
				"name": "Mỡ Vomma",
				"qty": 24
			}, {
				"name": "Đá Cây Nắp ấm",
				"qty": 5
			}]
		},
		"icon": "throak_incubator.png"
	},
	"Ổ Trứng Vomma": {
		"name": "Ổ Trứng Vomma",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Không có cáCh nào để biết được liệu thứ này có hoạt động không. Thực ra là có. TRIỂN NÀO!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Vomma",
				"qty": 1
			}, {
				"name": "Chất dính Nắp ấm",
				"qty": 3
			}, {
				"name": "Mỡ Vomma",
				"qty": 22
			}, {
				"name": "Đá Cây Nắp ấm",
				"qty": 5
			}]
		},
		"icon": "vomma_incubator.png"
	},
	"Ổ trứng Wojack": {
		"name": "Ổ trứng Wojack",
		"type": "Ổ trứng",
		"rarity": "Siêu Cấp",
		"description": "Chuyện gì sẽ xảy ra nếu Trứng Wojack ĐỤC XUYÊN Ổ TRỨNG?",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Trứng Wojack",
				"qty": 1
			}, {
				"name": "Mô cáCh điện",
				"qty": 22
			}, {
				"name": "Mỡ Vomma",
				"qty": 23
			}, {
				"name": "Đá Cây Nắp ấm",
				"qty": 5
			}]
		},
		"icon": "wojack_incubator.png"
	},
	"Tổ Cỏ gai": {
		"name": "Tổ Cỏ gai",
		"type": "Chuồng thú",
		"rarity": "Bình Thường",
		"description": "Nó sử dụng loại gỗ cáCh nhiệt cực mềm để giữ ấm Cho bầy con và ổ trứng!",
		"recipe": {
			"name": "Bàn cưa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 9
			}, {
				"name": "Lá Cỏ gai",
				"qty": 3
			}]
		},
		"icon": "lognest.png"
	},
	"Tổ Nắp ấm": {
		"name": "Tổ Nắp ấm",
		"type": "Chuồng thú",
		"rarity": "Bình Thường",
		"description": "Sự kết hợp hoàn hảo giữa mềm, ẩm và sự dập xương!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mỡ Vomma",
				"qty": 16
			}, {
				"name": "Đá Cây Nắp ấm",
				"qty": 3
			}]
		},
		"icon": "vlappy_nest.png"
	},
	"Tổ Hoa quả tạ": {
		"name": "Tổ Hoa quả tạ",
		"type": "Chuồng thú",
		"rarity": "Bình Thường",
		"description": "Gai ư? Không, Chúng là... những kẻ thíCh Chọc.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nhánh Lược mao",
				"qty": 8
			}, {
				"name": "Cánh Hoa quả tạ",
				"qty": 9
			}]
		},
		"icon": "smashy_nest.png"
	},
	"Bánh bông lan mốc": {
		"name": "Bánh bông lan mốc",
		"type": "Thức ăn sinh vật",
		"rarity": "Bình Thường",
		"description": "Nó có mùi của thứ gì đó đã Chết sau khi sống hết trọn vẹn vòng đời của mình. Đưa pet của bạn vào trạng thái cuồng bạo trong 3 phút!",
		"recipe": {
			"name": "Nồi áp suất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Bọt đồng",
				"qty": 1
			}, {
				"name": "Cây Đậu bắp",
				"qty": 1
			}, {
				"name": "Tinh Chất Glaser [Quý tộc]",
				"qty": 1
			}]
		},
		"icon": "spongy_podcake.png"
	},
	"Cổng dịCh Chuyển Bawg": {
		"name": "Cổng dịCh Chuyển Bawg",
		"type": "Bệ dịCh Chuyển",
		"rarity": "Tối Thượng",
		"description": "Chiếc máy kì lạ này sẽ lập tức dịCh Chuyển bạn đến Bawg!",
		"icon": "bawgaporter.png"
	},
	"Đất đỏ": {
		"name": "Đất đỏ",
		"type": "Mảnh thành phần",
		"rarity": "Siêu Cấp",
		"description": "Nó là một đống nhầy nhụa từ các vụn nhầy hữu cơ. Nó thật ấm!",
		"icon": "blulCh.png"
	},
	"Băng Vĩnh Cửu": {
		"name": "Băng Vĩnh Cửu",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Nó khá lạnh, và vĩnh cửu một cáCh vừa phải.",
		"icon": "permafrost.png"
	},
	"Đất đỏ bazan": {
		"name": "Đất đỏ bazan",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "THỨ PHỨC HỢP Đất đỏ MÀU MỠ NÀY này sẽ làm tốt công việc trồng trọt trong vườn Bawg!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đất đỏ",
				"qty": 4
			}, {
				"name": "Chất dính Nắp ấm",
				"qty": 8
			}]
		},
		"icon": "furdle_blulCh.png"
	},
	"Đất địa cực": {
		"name": "Đất địa cực",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Mọi thứ từ Tundra nên được phát triển một cáCh hạnh phúc trên loại Đất trồng giá lạnh này!",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Băng Vĩnh Cửu",
				"qty": 4
			}, {
				"name": "Lòng xanh Trứng Xoắn ốc",
				"qty": 8
			}]
		},
		"icon": "furdle_frost.png"
	},
	"Bệ đá hồi phục": {
		"name": "Bệ đá hồi phục",
		"type": "Bệ",
		"rarity": "Bình Thường",
		"description": "Nó sẽ lọc toàn bộ mầm bệnh ra khỏi mạCh máu của bạn!",
		"icon": "healing_shrine.png"
	},
	"Bệ đá Mồi câu": {
		"name": "Bệ đá Mồi câu",
		"type": "Bệ",
		"rarity": "Bình Thường",
		"description": "Cây cần câu của bạn sẽ có khả năng câu cá bá đạo sau khi Chạm vào thứ này.",
		"icon": "bait_shrine.png"
	},
	"Bệ đá phản lực": {
		"name": "Bệ đá phản lực",
		"type": "Bệ",
		"rarity": "Bình Thường",
		"description": "HíCh nhẹ cái bệ này khiến tất cả ngón Chân bạn cảm thấy lấp la lấp lánh.",
		"icon": "flight_shrine.png"
	},
	"Bệ đá thu hoạch": {
		"name": "Bệ đá thu hoạch",
		"type": "Bệ",
		"rarity": "Bình Thường",
		"description": "ĐẾN GIỜ LÀM RỒI!",
		"icon": "harvest_shrine.png"
	},
	"Hạt Cẩu tíCh": {
		"name": "Hạt Cẩu tíCh",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Nó như một búi tóc lớn nhô lên khỏi mặt Đất. Sao vậy nhỉ? Chỉ là Hạt Cẩu tíCh thôi!",
		"icon": "haircone.png"
	},
	"Hạt giống Cự cốt": {
		"name": "Hạt giống Cự cốt",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Ghim thứ này xuống sẽ làm Cự cốt lộ ra theo thời gian. Thô, nhưng hiệu quả.",
		"icon": "spur_seed.png"
	},
	"Bảng ghi Chú": {
		"name": "Bảng ghi Chú",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Các hội viên Brubus thường sẽ viết biên bản các cuộc thảo luận lên bảng vàng. Như bạn biết đấy, Cho hậu thế",
		"icon": "brubus_codewall.png"
	},
	"Đèn thảo luận": {
		"name": "Đèn thảo luận",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Để duy trì những cuộc tranh luận đi sâu hơn trong những đêm lạnh lẽo, Brubus sẽ thắp những ngọn đèn này xung quanh cuộc thảo luận của Chúng.",
		"icon": "brubus_debate_lamp.png"
	},
	"Bục sáCh diễn thuyết": {
		"name": "Bục sáCh diễn thuyết",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó rất là quan trọng khi có một nơi để hét vào những người ở dưới.",
		"icon": "brubus_lectern.png"
	},
	"Tượng Bribery": {
		"name": "Tượng Bribery",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Các Brubus rất liên quan trong việc bôi trơn các mắt xíCh của nền dân Chủ.",
		"icon": "statue_of_bribery.png"
	},
	"Hòm bỏ phiếu": {
		"name": "Hòm bỏ phiếu",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Viết tên bạn ra và bỏ nó vào cái xô. Nó Chắc Chắn không phải là máy huỷ tài liệu hay bất cứ thứ gì tương tự.",
		"icon": "brubus_voting_bucket.png"
	},
	"Đèn Nhộng": {
		"name": "Đèn Nhộng",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Đôi khi những ý tưởng tuyệt vời lại được tạo ra từ việc lấy hai vật bất kì và nhét Chúng vào với nhau với một lực F mạnh.",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Con nhộng",
				"qty": 3
			}, {
				"name": "Thịt Nắp ấm",
				"qty": 4
			}]
		},
		"icon": "blollilamp.png"
	},
	"Đèn Lam": {
		"name": "Đèn Lam",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "NÓ MÀU XANH, VÀ NÓ PHÁT SÁNG. BẠN CÒN MUỐN GÌ HƠN Ở NÓ ChỨ?",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khối lam thạCh",
				"qty": 1
			}, {
				"name": "Quả Sen cạn",
				"qty": 2
			}, {
				"name": "Cây Bội thảo",
				"qty": 1
			}]
		},
		"icon": "blotlamp.png"
	},
	"Đèn tím ma mị": {
		"name": "Đèn tím ma mị",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Dành Cho bạn khi muốn đắm mình trong thế giới ánh sáng màu tím đầy ma mị này.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Dãi Throak",
				"qty": 4
			}, {
				"name": "Túi khí độc",
				"qty": 2
			}]
		},
		"icon": "fluorsack.png"
	},
	"Bình hoa Dạ Quang": {
		"name": "Bình hoa Dạ Quang",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Thứ này sẽ hợp với tấm phủ của bạn, hoặc vài kiểu hợp mốt khác.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tảo Phát Quang",
				"qty": 1
			}, {
				"name": "MạCh Bawg",
				"qty": 3
			}, {
				"name": "Ống san hô",
				"qty": 1
			}]
		},
		"icon": "lumivase.png"
	},
	"Đèn hoa quả tạ": {
		"name": "Đèn hoa quả tạ",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Cái thứ xinh đẹp này sẽ giữ Cho những thứ khác hiện rõ trong đêm.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bọ Lục Bảo",
				"qty": 1
			}, {
				"name": "Đế Hoa quả tạ",
				"qty": 8
			}]
		},
		"icon": "smashlight.png"
	},
	"Bamli nhồi bông": {
		"name": "Bamli nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Khi đã Chơi Chán, bạn đem Chúng đi trưng bày.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Sáp cây Cự cốt",
				"qty": 2
			}, {
				"name": "Râu Bamli",
				"qty": 8
			}, {
				"name": "Sừng Bamli",
				"qty": 31
			}]
		},
		"icon": "stuffed_bamli.png"
	},
	"Blastcrab nhồi bông": {
		"name": "Blastcrab nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó vẫn ấm khi Chạm vào, kể cả sau khi bị nhồi bông!",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 12
			}, {
				"name": "Vỏ Blastcrab",
				"qty": 8
			}, {
				"name": "Da Blastcrab",
				"qty": 4
			}]
		},
		"icon": "stuffed_blastcrab.png"
	},
	"Tổ hợp Gallum": {
		"name": "Tổ hợp Gallum",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Khi bạn đặt tay lên nó, bạn có thể cảm thấy nó rung và rít lên liên hồi.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tinh thể xanh lá",
				"qty": 4
			}, {
				"name": "Giáp Gallum",
				"qty": 7
			}, {
				"name": "Đá Hợp Kim",
				"qty": 3
			}, {
				"name": "Xương sườn Gallum",
				"qty": 2
			}]
		},
		"icon": "reassembled_gallum.png"
	},
	"Glaser nhồi bông": {
		"name": "Glaser nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nhìn kĩ bạn sẽ thấy những vết Cháy xém trên sừng do tia laser gây ra!",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đế Hoa quả tạ",
				"qty": 12
			}, {
				"name": "Mảnh Gạc Glaser",
				"qty": 6
			}, {
				"name": "Guốc Glaser",
				"qty": 3
			}, {
				"name": "Dạ dày Glaser",
				"qty": 2
			}]
		},
		"icon": "stuffed_glaser.png"
	},
	"Gulanti nhồi bông": {
		"name": "Gulanti nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Tóc của bạn đựng đứng lên khi đi ngang qua nó. Nó có lẽ là tĩnh điện hoặc thứ gì đó đang sợ.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Hợp Kim",
				"qty": 3
			}, {
				"name": "Xương hàm Gulanti",
				"qty": 5
			}, {
				"name": "Tai Gulanti",
				"qty": 2
			}, {
				"name": "Lõi điện Gulanti",
				"qty": 2
			}]
		},
		"icon": "stuffed_gulanti.png"
	},
	"Lyff nhồi bông": {
		"name": "Lyff nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó cực kì Chân thực, tới nỗi bạn cảm thấy gần như lúc nào nó cũng liếm bạn. GẦN NHƯ THÔI.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 12
			}, {
				"name": "Da Lyff",
				"qty": 7
			}, {
				"name": "Lưỡi Lyff",
				"qty": 4
			}]
		},
		"icon": "stuffed_lyff.png"
	},
	"Satgat nhồi bông": {
		"name": "Satgat nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Mặc dù Chúng được nhồi bông và bất động, cánh của Chúng vẫn Chuyển động nhanh tới mức không thể nhìn thấy.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Sáp cây Cự cốt",
				"qty": 2
			}, {
				"name": "Vỏ xương Satgat",
				"qty": 12
			}, {
				"name": "Thịt Satgat",
				"qty": 4
			}]
		},
		"icon": "stuffed_satgat.png"
	},
	"Shirk nhồi bông": {
		"name": "Shirk nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Chiếc mỏ sắc bén tới nỗi có thể dùng nó cắt giấy , một loại mô xốp hoặc thứ gì đó khác.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đế Hoa quả tạ",
				"qty": 15
			}, {
				"name": "Mỏ Shirk",
				"qty": 7
			}, {
				"name": "Lông Shirk",
				"qty": 3
			}]
		},
		"icon": "stuffed_shirk.png"
	},
	"Slurb nhồi bông": {
		"name": "Slurb nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Thứ kinh khủng này sẽ đi săn trong giấc mơ của bạn. VÀ CẢ NHỮNG ÁC MỘNG NỮA.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 12
			}, {
				"name": "Xương sống Slurb",
				"qty": 9
			}, {
				"name": "Nam Châm Slurb",
				"qty": 2
			}]
		},
		"icon": "stuffed_slurb.png"
	},
	"Snorble nhồi bông": {
		"name": "Snorble nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó tốn rất nhiều công để giữ những túi khí này phồng, nhưng nó sẽ trả được khoản thế Chấp.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Thùa gai",
				"qty": 2
			}, {
				"name": "Túi khí Snorble",
				"qty": 6
			}, {
				"name": "Da Snorble",
				"qty": 10
			}]
		},
		"icon": "stuffed_snorble.png"
	},
	"Tartil nhồi bông": {
		"name": "Tartil nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Phần hắc ín này không bao giờ khô Cho dù bạn để bao lâu đi nữa. Không may thay, mùi nó thực sự tệ.",
		"recipe": {
			"name": "Máy nướng cá",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vảy ngọc",
				"qty": 2
			}, {
				"name": "Nhựa nhầy Tartil",
				"qty": 13
			}, {
				"name": "Lưỡi Tartil",
				"qty": 2
			}]
		},
		"icon": "stuffed_tartil.png"
	},
	"Throak nhồi bông": {
		"name": "Throak nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Các xúc tu sẽ dính lại trên người bạn mỗi khi đi qua. KimoChiiiii!",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Thùa gai",
				"qty": 2
			}, {
				"name": "Xúc tu Throak",
				"qty": 18
			}, {
				"name": "Thạch Throak",
				"qty": 1
			}]
		},
		"icon": "stuffed_throak.png"
	},
	"Vomma nhồi bông": {
		"name": "Vomma nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó trông giống như đồ thật vậy. Dù gì cũng là phiên bản Chết của đồ thật.",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Cây Nắp ấm",
				"qty": 3
			}, {
				"name": "Mỡ Vomma",
				"qty": 15
			}, {
				"name": "Bóng gelatin",
				"qty": 1
			}]
		},
		"icon": "stuffed_vomma.png"
	},
	"Wat nhồi bông": {
		"name": "Wat nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Những ngón tay thon dài, khẳng khiu của nó vẫn khá thô để nhìn vào.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 3
			}, {
				"name": "Móng Wat",
				"qty": 2
			}, {
				"name": "Cánh Wat",
				"qty": 5
			}]
		},
		"icon": "stuffed_wat.png"
	},
	"Wojack nhồi bông": {
		"name": "Wojack nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Ôi Chúa ơi, nó đã Chết. Heh. Dù sao cũng đã một phút rồi ...",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Cây Nắp ấm",
				"qty": 3
			}, {
				"name": "Lông mi Wojack",
				"qty": 3
			}, {
				"name": "Vòi Wojack",
				"qty": 10
			}]
		},
		"icon": "stuffed_wojack.png"
	},
	"Zug nhồi bông": {
		"name": "Zug nhồi bông",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nhìn mặt nó trông ngu nhỉ.",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 3
			}, {
				"name": "Xương bánh Chè Zug",
				"qty": 7
			}, {
				"name": "Da Zug nhiễm điện",
				"qty": 1
			}, {
				"name": "Bugi phóng điện",
				"qty": 2
			}]
		},
		"icon": "stuffed_zug.png"
	},
	"Lật đật mặt loằn": {
		"name": "Lật đật mặt loằn",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Khi bạn phải đấm bức tranh nghiêng ngả của kẻ thù, bạn phải đấm nó.",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 11
			}, {
				"name": "Mực Glidopus",
				"qty": 12
			}, {
				"name": "Sỏi đá vụn",
				"qty": 4
			}]
		},
		"icon": "wobbler.png"
	},
	"Thuốc Cường trí": {
		"name": "Thuốc Cường trí",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Thứ này sẽ nâng cao giác quan của bạn! TẤT CẢ ChÚNG. Khiến bạn nhanh như một viên đạn trong 3 giây.",
		"recipe": {
			"name": "Nồi áp suất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 3
			}, {
				"name": "Tinh Chất Slurb [Phẫn nộ]",
				"qty": 3
			}, {
				"name": "Nấm phát quang",
				"qty": 3
			}, {
				"name": "Sên hải nhiệt",
				"qty": 3
			}]
		},
		"icon": "brain_boost_potion.png"
	},
	"Đèn bo mạCh": {
		"name": "Đèn bo mạCh",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Nó rất Chắc Chắn và rực rỡ! Đứng gần nó khiến bạn cảm thấy Chóng mặt và buồn nôn, vì vài lí do nào đó.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nấm phát quang",
				"qty": 1
			}, {
				"name": "Carbon",
				"qty": 6
			}]
		},
		"icon": "karboric_shiner.png"
	},
	"Đèn băng tảo": {
		"name": "Đèn băng tảo",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Sức mạnh của cây Nấm Bè giữ Cây Băng tảo phát sáng bay một cáCh nhẹ nhàng trong không khí!",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khối Nấm Bè",
				"qty": 10
			}, {
				"name": "Cây Băng tảo",
				"qty": 3
			}]
		},
		"icon": "floaty_icelight.png"
	},
	"Chậu Hồ thảo": {
		"name": "Chậu Hồ thảo",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Giờ thì bạn có thể cắn nát những nhãn cầu của Cây Hồ thảo bất cứ lúc nào vào ban ngày! Và không phải là vào ban đêm, việc đó thật kì quặc.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Hồ thảo",
				"qty": 2
			}, {
				"name": "Sáp cây Cự cốt",
				"qty": 1
			}]
		},
		"icon": "potted_pyn.png"
	},
	"Chậu Song chi": {
		"name": "Chậu Song chi",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Những Cây Song Chi này sẽ tạo môi trường Cho bất kì phòng nào Chưa có Song Chi ở đó!",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Song Chi",
				"qty": 1
			}, {
				"name": "Đế Hoa quả tạ",
				"qty": 8
			}]
		},
		"icon": "potted_perp.png"
	},
	"Chậu Thố thảo": {
		"name": "Chậu Thố thảo",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Những Cây Thố thảo hấp dẫn này kêu la thảm thiết Cho tới khi bị ăn. KAWAIIIIII-DESU!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Thố thảo",
				"qty": 1
			}, {
				"name": "Đá Hợp Kim",
				"qty": 2
			}]
		},
		"icon": "potted_bunnion.png"
	},
	"Chậu Nấm phát quang": {
		"name": "Chậu Nấm phát quang",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Một khi được trồng, Nấm phát quang sẽ dừng phát sáng. Chắc Chắn phải có gì đó... khoa học ở đây...",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nấm phát quang",
				"qty": 1
			}, {
				"name": "Đế Hoa quả tạ",
				"qty": 9
			}]
		},
		"icon": "potted_boreole.png"
	},
	"Chậu Băng tảo": {
		"name": "Chậu Băng tảo",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Chậu Băng tảo không rực rỡ được như trong tự nhiên. Và nó vẫn luôn như vậy!",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Băng tảo",
				"qty": 3
			}, {
				"name": "Carbon",
				"qty": 7
			}]
		},
		"icon": "potted_icequill.png"
	},
	"Chậu Bọt đồng": {
		"name": "Chậu Bọt đồng",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Bọt biển vô hạn? BỌT BIỂN VÔ HẠN! BỌT BIỂN! BỌT BIỂN! BỌT BIỂN! BỌT BIỂN! Bọt biển.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Bọt đồng",
				"qty": 4
			}, {
				"name": "Carbon",
				"qty": 7
			}]
		},
		"icon": "potted_coppersponge.png"
	},
	"Chậu Kiên Thảo": {
		"name": "Chậu Kiên Thảo",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Có lẽ đây là cây cứng nhất từng được trồng.",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Kiên thảo",
				"qty": 5
			}, {
				"name": "Đế Hoa quả tạ",
				"qty": 9
			}]
		},
		"icon": "potted_hardcore.png"
	},
	"Chậu Đậu bắp": {
		"name": "Chậu Đậu bắp",
		"type": "Chậu cây",
		"rarity": "Bình Thường",
		"description": "Chậu Đậu bắp thể hiện khả năng tự sinh sôi!",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Đậu bắp",
				"qty": 2
			}, {
				"name": "Đế Hoa quả tạ",
				"qty": 9
			}]
		},
		"icon": "potted_parapod.png"
	},
	"Hạt Băng áp": {
		"name": "Hạt Băng áp",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Thứ này sẽ đào một lỗ trên Đất trồng cấp 3, và đào đi một Cây Băng tảo vĩnh viễn!",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Kiên thảo",
				"qty": 11
			}, {
				"name": "Kim cương",
				"qty": 3
			}, {
				"name": "Bướu điện Glaser",
				"qty": 2
			}]
		},
		"icon": "geysir_drill.png"
	},
	"Mối Chúa": {
		"name": "Mối Chúa",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Đường cong khiêu gợi của Mối Chúa thu hút tất cả mối đực!",
		"icon": "magmite_Queen.png"
	},
	"Hạt giống quả tạ": {
		"name": "Hạt giống quả tạ",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Khi được để trong môi trường phù hợp, nó sẽ sinh ra một Cây Hoa quả tạ cực đẹp!",
		"icon": "smash_seed.png"
	},
	"Hạt giống Tre gai": {
		"name": "Hạt giống Tre gai",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Bằng cáCh nào đó, thứ này Chuyển sang dạng ống. Tre gai. Một cây tre đầy Đất. Một cây tre.",
		"icon": "pipeseed.png"
	},
	"Chậu Actiso": {
		"name": "Chậu Actiso",
		"type": "Chậu cây",
		"rarity": "Chậu cây",
		"description": "Nó làm bạn cảm nhận được thế giới mà bạn tưởng tượng không kém gì cần.",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Cây Nắp ấm",
				"qty": 2
			}, {
				"name": "Actiso",
				"qty": 3
			}]
		},
		"icon": "potted_tusker.png"
	},
	"Bom tử đinh hương": {
		"name": "Bom tử đinh hương",
		"type": "Bom",
		"rarity": "Bình Thuờng",
		"description": "Gây 100% ST/giây thành ST Băng và khiến mục tiêu của bạn thèm khát một ly cacao nóng!",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc cây Bụt mọc",
				"qty": 3
			}, {
				"name": "MạCh Bawg",
				"qty": 3
			}, {
				"name": "Tuyến trùng Throak",
				"qty": 3
			}]
		},
		"icon": "nematobomb.png"
	},
	"Bom chùm Vomma con": {
		"name": "Bom chùm Vomma con",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Hãy khai thác sức công phá của những ĐỨA TRẺ! Er... lũ Vomma con. Hem phải lũ trẻ con. Gây 250% ST/giây thành STVL!",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vomma con",
				"qty": 3
			}, {
				"name": "Chất dính Nắp ấm",
				"qty": 3
			}, {
				"name": "Đậu mụn xanh",
				"qty": 3
			}]
		},
		"icon": "vompole_clusterbomb.png"
	},
	"Bom máu": {
		"name": "Bom máu",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Nếu nó Chảy máu, bạn có thể giết nó. Nếu nó đã đang Chảy máu, bạn Chắc không phải làm. Khiến kẻ địCh Chảy máu bằng 250% ST/giây!",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đỉa",
				"qty": 3
			}, {
				"name": "Rận hút máu",
				"qty": 3
			}, {
				"name": "Vỏ xương Satgat",
				"qty": 3
			}]
		},
		"icon": "bloodbomb.png"
	},
	"Bom 4 màu": {
		"name": "Bom 4 màu",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Tuyến muối này gây ra một phản ứng hoá học, và NỔ TUNG NGAY SAU ĐÓ! Gây 250% ST/giây thành STVL!",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tuyến muối Shirk",
				"qty": 3
			}, {
				"name": "Dạ dày Glaser",
				"qty": 3
			}, {
				"name": "Mỏ Shirk",
				"qty": 3
			}]
		},
		"icon": "shirknel_bomb.png"
	},
	"Bom hơi Cay": {
		"name": "Bom hơi Cay",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Tạo ra một đám mây cực độc, đầu độc HẦU HẾT MỌI VẬT trừ một số thứ! Gây 300% ST/giây thành ST Độc!",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xương sống Slurb",
				"qty": 3
			}, {
				"name": "Carbon",
				"qty": 3
			}, {
				"name": "Chất nhầy độc",
				"qty": 3
			}]
		},
		"icon": "the_slurricane.png"
	},
	"Bom kim": {
		"name": "Bom kim",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Đâm mọi thứ mạnh tới mức tử vong! Gây 200% ST/giây thành STVL!",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nấm Bè",
				"qty": 3
			}, {
				"name": "Chùy Gai",
				"qty": 3
			}]
		},
		"icon": "Pincushion_bomb.png"
	},
	"Đuốc Tím": {
		"name": "Đuốc Tím",
		"type": "Đuốc",
		"rarity": "Bình Thường",
		"description": "Cái gì? NÓ CÓ KHÔNG PHẢI MÀU HỒNG. NÓ LÀ HOA LỒNG ĐÈN.",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vụn xương",
				"qty": 25
			}, {
				"name": "Sợi trục Tĩnh điện",
				"qty": 9
			}, {
				"name": "Gai cột sống",
				"qty": 4
			}, {
				"name": "Dãi Throak",
				"qty": 15
			}]
		},
		"icon": "handy_purptorCh.png"
	},
	"Đuốc Lục bảo": {
		"name": "Đuốc Lục bảo",
		"type": "Đuốc",
		"rarity": "Siêu cấp",
		"description": "Thoát khỏi bóng tối đáng sợ với NGỌN ĐUỐC NGỌC LỤC BẢO TUYỆT VỜI này! Đặt ngay bây giờ Chúng tôi sẽ ném vào túi kem đánh răng.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nấm phát quang",
				"qty": 4
			}, {
				"name": "Kim cương",
				"qty": 8
			}, {
				"name": "Bọ Lục Bảo",
				"qty": 6
			}]
		},
		"icon": "emerald_hand_torCh.png"
	},
	"Biển Cây Nắp ấm": {
		"name": "Biển Cây Nắp ấm",
		"type": "Biển hiệu",
		"rarity": "Bình Thường",
		"description": "Theo dấu những thứ tuyệt vời mà bạn thấy, tuy hơi tởm!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thịt Nắp ấm",
				"qty": 1
			}, {
				"name": "Mỡ Vomma",
				"qty": 1
			}]
		},
		"icon": "jollysign.png"
	},
	"Biển Quả tạ": {
		"name": "Biển Quả tạ",
		"type": "Biển hiệu",
		"rarity": "Bình Thường",
		"description": "Magellan đã khai sáng Tundra bằng một bảng hiệu hợp thời!",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nhánh Lược mao",
				"qty": 1
			}, {
				"name": "Đế Hoa quả tạ",
				"qty": 1
			}]
		},
		"icon": "smashy_sign.png"
	},
	"Tinh Chất Wompit[Cứng cáp][Cứng cáp]": {
		"name": "Tinh Chất Wompit[Cứng cáp][Cứng cáp]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Giữ vật này trong tay khiến bạn thấy... nặng nề.",
		"icon": "sterling_wompit_essence.png"
	},
	"Tinh Chất Glutterfly [Già cỗi]": {
		"name": "Tinh Chất Glutterfly [Già cỗi]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Đứng gần tinh Chất này khiến bạn cảm thấy bay bổng và năng động!",
		"icon": "ancient_glutterfly_essence.png"
	},
	"Tinh Chất Wompit[Cứng cáp]Chúa tể": {
		"name": "Tinh Chất Wompit[Cứng cáp]Chúa tể",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Nhìn Chăm Chú vào thứ này bất Chấp nó là gì, bạn cảm thấy như phải cắt bỏ bớt 1 cân và nhảy xung quanh 1 cáCh điên loạn.",
		"icon": "womplord_essence.png"
	},
	"Tinh Chất Glutterfly Trướng phình": {
		"name": "Tinh Chất Glutterfly Trướng phình",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Nó rung bần bật và rít liên hồi với sức mạnh của lũ Glutterfly! Bạn có cảm giác liếm nó sẽ đi Chầu diêm vương.",
		"icon": "bloated_glutterfly_essence.png"
	},
	"Tinh Chất Glidopus [Lục]": {
		"name": "Tinh Chất Glidopus [Lục]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Bỏ tinh Chất này vào túi làm bạn Chú ý tới những Cây Chuông gió một cáCh kì lạ.",
		"icon": "verdant_glidopus_essence.png"
	},
	"Tinh Chất Glidopus Cao niên": {
		"name": "Tinh Chất Glidopus Cao niên",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Cầm vật này trong tay khiến bạn muốn biến tay mình thành xúc tu.",
		"icon": "elder_glidopus_essence.png"
	},
	"Tinh Chất Tartil [Nhớp nháp]": {
		"name": "Tinh Chất Tartil [Nhớp nháp]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Nó khiến bạn thấy nhớp nháp, nhưng vẫn ngon. Giống loại bánh nhớp nháp hay đồ ngọt nào đó.",
		"icon": "filthy_tartil_essence.png"
	},
	"Tinh Chất Tartil [Nhớp nháp]uyết sắc": {
		"name": "Tinh Chất Tartil [Nhớp nháp]uyết sắc",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Nó dính vào tất cả mọi thứ TRÊN VŨ TRỤ NÀY. Trừ tình yêu, cắm mặt vào Chơi game thì bao giờ mới có người yêu.",
		"icon": "blood_tartil_essence.png"
	},
	"Tinh Chất Wat [Siêu cường]": {
		"name": "Tinh Chất Wat [Siêu cường]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Quả cầu mang năng lượng Wat ... này sẽ lập tức Chạy đi khi bạn cố gắng tiếp cận nó! Đúng vậy không? Đương nhiên rồi.",
		"icon": "grandwat_essence.png"
	},
	"Tinh Chất Wat [Siêu cường]ổ linh": {
		"name": "Tinh Chất Wat [Siêu cường]ổ linh",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Đến gần tinh Chất này sẽ làm bạn muốn Chọc vào mọi thứ với những ngón tay rùng rợn dài ngoằng của bạn.",
		"icon": "ancient_shadowy_wat_essence.png"
	},
	"Tinh Chất Zug [Ngoại cỡ]": {
		"name": "Tinh Chất Zug [Ngoại cỡ]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Quả cầu năng lượng Zug này phát ra tiếng rít lẹt xẹt inh tai. Nó dịu đi một cáCh kì lạ!",
		"icon": "zug_lug_essence.png"
	},
	"Tinh Chất Zug Đại thủ hộ": {
		"name": "Tinh Chất Zug Đại thủ hộ",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Tinh Chất này luôn phát ra tiếng lẹt xẹt của điện!",
		"icon": "zuguardian_essence.png"
	},
	"Tinh Chất Vomma [Nóng nảy]": {
		"name": "Tinh Chất Vomma [Nóng nảy]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Ở gần tinh Chất này khiến bạn buồn nôn. Nhưng đó là mặt tốt.",
		"icon": "tempered_vomma_essence.png"
	},
	"Tinh Chất Vomma Khiếm thị": {
		"name": "Tinh Chất Vomma Khiếm thị",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Ở gần tinh Chất làm bạn RẤT buồn nôn. Nhưng đó là mặt RẤT TỐT của nó.",
		"icon": "sightless_vomma_essence.png"
	},
	"Tinh Chất Throak [Độc ác]": {
		"name": "Tinh Chất Throak [Độc ác]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Bạn có linh cảm nếu Chạm vào, bạn sẽ bị đốt. Chỉ có một cáCh để biết!",
		"icon": "malicious_throak_essence.png"
	},
	"Tinh Chất Throak Dị huyết": {
		"name": "Tinh Chất Throak Dị huyết",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Cầm thứ này trong tay khiến bạn cảm thấy bồng bềnh như DOVE vậy!",
		"icon": "bawgblood_throak_essence.png"
	},
	"Tinh Chất Snorble [Cháy nắng]": {
		"name": "Tinh Chất Snorble [Cháy nắng]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Tinh Chất này khiến bạn phê quên lối về!",
		"icon": "burnt_snorble_essence.png"
	},
	"Tinh Chất Snorble Hạ áp": {
		"name": "Tinh Chất Snorble Hạ áp",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Nó rất nhẹ, như thể Chứa đầy không khí vậy! Khoan. Đó Chỉ là khí gas.",
		"icon": "depressurized_snorble_essence.png"
	},
	"Tinh Chất Satgat [Nhạy cảm]": {
		"name": "Tinh Chất Satgat [Nhạy cảm]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Tinh Chất này thật là DỄ THƯƠNG!",
		"icon": "sensitive_satgat_essence.png"
	},
	"Tinh Chất Satgat Bất hoà": {
		"name": "Tinh Chất Satgat Bất hoà",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Ở gần tinh Chất này sẽ làm đầu bạn cảm thấy nhỏ bé.",
		"icon": "desaturated_satgat_essence.png"
	},
	"Tinh Chất Wojack [Bết dính]": {
		"name": "Tinh Chất Wojack [Bết dính]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Tinh Chất năng lượng Wojack khiến bạn muốn ĐÀO! ĐÀO! VÀ ĐÀO!",
		"icon": "sticky_wojack_essence.png"
	},
	"Tinh Chất Wojack [Bết dính]ạCh sắc": {
		"name": "Tinh Chất Wojack [Bết dính]ạCh sắc",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Nó ngứa khi bạn Chọc nó bằng ngón Chân. Hãy dừng Chọc nó bằng ngón Chân.",
		"icon": "bleaChed_wojack_essence.png"
	},
	"Tinh Chất Bamli [Xảo quyệt]": {
		"name": "Tinh Chất Bamli [Xảo quyệt]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Đứng gần thứ này khiến bạn muốn mọc ra một BỘ RIA VĨ ĐẠI.",
		"icon": "wily_bamli_essence.png"
	},
	"Tinh Chất Bamli Cuồng Chiến": {
		"name": "Tinh Chất Bamli Cuồng Chiến",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Giữ thứ này trên tay làm bạn cảm thấy cực kì thèm đường. Cũng vì thế, Chân tay bạn cảm thấy bủn rủn.",
		"icon": "raving_bamli_essence.png"
	},
	"Tinh Chất Shirk [Tinh quái]": {
		"name": "Tinh Chất Shirk [Tinh quái]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "GREEEEEEEEEEAAAGH AAAAAAAAAAAAK!",
		"icon": "berg_shirk_essence.png"
	},
	"Tinh Chất Shirk XíCh linh": {
		"name": "Tinh Chất Shirk XíCh linh",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Bạn có cảm giác miệng mình như biến thành mỏ ngay sau khi đứng gần tinh Chất này!",
		"icon": "redwing_shirk_essence.png"
	},
	"Tinh Chất Glaser [Quý tộc]": {
		"name": "Tinh Chất Glaser [Quý tộc]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Cầm tinh Chất này khiến bạn cảm thấy như có tia lazer bắn ra từ trán!",
		"icon": "royal_glaser_essence.png"
	},
	"Tinh Chất Glaser Râu bạc": {
		"name": "Tinh Chất Glaser Râu bạc",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Tinh Chất này khiến bạn thèm ăn cỏ. MMMMMM...ĐÚNG LÀ CỎ MỸ CÓ KHÁC!",
		"icon": "greybearded_glaser_essence.png"
	},
	"Tinh Chất Slurb [Phẫn nộ]": {
		"name": "Tinh Chất Slurb [Phẫn nộ]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "THẬT KINH TỞM!",
		"icon": "raging_slurb_essence.png"
	},
	"Tinh Chất Slurb Thiếu ngủ": {
		"name": "Tinh Chất Slurb Thiếu ngủ",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Nó khiến bạn cảm thấy tồi tệ.",
		"icon": "sleepless_slurb_essence.png"
	},
	"Tinh Chất Lyff [Dị sắc]": {
		"name": "Tinh Chất Lyff [Dị sắc]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Nó nảy và đàn hồi!",
		"icon": "lyff_broh_essence.png"
	},
	"Tinh Chất Lyff [Dị sắc]ực đại": {
		"name": "Tinh Chất Lyff [Dị sắc]ực đại",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Khi bạn liếm nó, bạn sẽ thíCh nó.",
		"icon": "max_lyff_essence.png"
	},
	"Tinh Chất Blastcrab [Tăng áp]": {
		"name": "Tinh Chất Blastcrab [Tăng áp]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "NÓ NÓNG MỘT CÁCh ChẾT TIỆT. OOH OOWEE! NÓNG NÓNG NÓNG! LÚC NÀY, NÓ CỰC KÌ NÓNG!",
		"icon": "pressurized_blastcrab_essence.png"
	},
	"Tinh Chất Blastcrab Sảnh dịCh": {
		"name": "Tinh Chất Blastcrab Sảnh dịCh",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Chạm vào tinh Chất này sẽ làm ngón tay bạn cảm giác bị thiêu đốt.",
		"icon": "liquid-cooled_blastcrab_essence.png"
	},
	"Tinh Chất Gallum [Vôi hoá]": {
		"name": "Tinh Chất Gallum [Vôi hoá]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Nó sẽ không ngừng rung. Bạn có thể nghĩ về một tác dụng hữu íCh Cho thứ này. Trông nó rất Quen :)))!",
		"icon": "calcified_gallum_essence.png"
	},
	"Tinh Chất Gallum Đơn sắc": {
		"name": "Tinh Chất Gallum Đơn sắc",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Bạn có thể cảm nhận sức mạnh Chảy qua nó! Ôi trời! Ôi Chúa ơi! Ôi thánh thần ơi!",
		"icon": "monoChromatic_gallum_essence.png"
	},
	"Tinh Chất Gulanti [Nhún nhảy]": {
		"name": "Tinh Chất Gulanti [Nhún nhảy]",
		"type": "Tinh Chất sinh vật",
		"rarity": "Siêu cấp",
		"description": "Tinh Chất này khiến bạn muốn HÁT TỚI TẬN TRỜI XANH VỚI SỰ VINH DỰ VÀO Tai Gulanti!",
		"icon": "jumpy_gulanti_essence.png"
	},
	"Tinh Chất Gulanti [Nhún nhảy]ung huyết": {
		"name": "Tinh Chất Gulanti [Nhún nhảy]ung huyết",
		"type": "Tinh Chất sinh vật",
		"rarity": "Tối thượng",
		"description": "Cổ bạn cảm giác như dãn ra khi cầm nó. Gần như là dãn ra thôi.",
		"icon": "hotblooded_gulanti_essence.png"
	},
	"Cổng dịCh Chuyển Tundra": {
		"name": "Cổng dịCh Chuyển Tundra",
		"type": "Bệ dịCh Chuyển",
		"rarity": "Tối thượng",
		"description": "DịCh Chuyển bạn tới Tundra một cáCh hoành tráng NHƯ MỘT CON ĐẠI BÀNG BAY VÚT LÊN!",
		"icon": "tundraporter.png"
	},
	"Gậy Pogo": {
		"name": "Gậy Pogo",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Dù Wompit không thể cưỡi thứ này do không có tay, người ta Chắc Chắn sẽ suy nghĩ về khả năng đó! Tiến hoá Wompit của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đèn Dầu Tartil",
				"qty": 8
			}, {
				"name": "Da Zug nhiễm điện",
				"qty": 8
			}, {
				"name": "Mảnh Pha lê",
				"qty": 29
			}, {
				"name": "Tinh Chất Wompit[Cứng cáp]Chúa tể",
				"qty": 4
			}]
		},
		"icon": "wompogo_stick.png"
	},
	"Đèn Pin Glutterfly": {
		"name": "Đèn Pin Glutterfly",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Trái với hiểu biết thông thường, Glutterfly có thị giác rất tệ trong đêm. NHƯNG THỨ NÀY THÌ KHÔNG! Tiến hóa Glutterfly của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vảy ngọc",
				"qty": 19
			}, {
				"name": "Thịt Nắp ấm",
				"qty": 70
			}, {
				"name": "Phân Wat",
				"qty": 8
			}, {
				"name": "Tinh Chất Glutterfly Trướng phình",
				"qty": 2
			}]
		},
		"icon": "hivelighter.png"
	},
	"Kính vạn hoa": {
		"name": "Kính vạn hoa",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Glidopus nghiện nó. Tiến hoá Glidopus của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lăng Kính Pha lê",
				"qty": 7
			}, {
				"name": "Đậu mụn xanh",
				"qty": 18
			}, {
				"name": "Khúc cây Bụt mọc",
				"qty": 8
			}, {
				"name": "Tinh Chất Glidopus Cao niên",
				"qty": 5
			}]
		},
		"icon": "kaglidoscope.png"
	},
	"Bom 10 tấn": {
		"name": "Bom 10 tấn",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Một khi quả bom này được hấp thụ vào cơ thể Tartil, MỌI CUỘC CÁ CƯỢC SẼ ChẤM DỨT! Tiến hoá Tartil của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Kén Cao su",
				"qty": 16
			}, {
				"name": "Lăng Kính Pha lê",
				"qty": 7
			}, {
				"name": "Hương liệu Wojack",
				"qty": 9
			}, {
				"name": "Tinh Chất Tartil [Nhớp nháp]uyết sắc",
				"qty": 4
			}]
		},
		"icon": "ten_tonne_bomb.png"
	},
	"Túi ngủ": {
		"name": "Túi ngủ",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Một con Wat đang lớn cần một cái Túi ngủ ấm áp! Tiến hoá Wat của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Polymer Snorble",
				"qty": 9
			}, {
				"name": "Thạch Throak",
				"qty": 9
			}, {
				"name": "Khúc cây Bụt mọc",
				"qty": 8
			}, {
				"name": "Tinh Chất Wat [Siêu cường]ổ linh",
				"qty": 3
			}]
		},
		"icon": "sleePing_bag.png"
	},
	"Động cơ vĩnh cửu": {
		"name": "Động cơ vĩnh cửu",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Chỉ có một cỗ máy vi phạm các định luật vật lý mới có thể giữ Cho Zug được sạc mọi lúc! Tiến hóa Zug của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa Satgat",
				"qty": 9
			}, {
				"name": "Đỉa",
				"qty": 11
			}, {
				"name": "Tơ Huyết khối",
				"qty": 45
			}, {
				"name": "Tinh Chất Zug Đại thủ hộ",
				"qty": 5
			}]
		},
		"icon": "perpetual_motion_maChine.png"
	},
	"Micro Vomma": {
		"name": "Micro Vomma",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Bạn Chưa bao giờ ói Cho đến khi nhìn thấy những sinh vật này. Tiến hoá Vomma của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hormone lạ",
				"qty": 10
			}, {
				"name": "Cục vàng",
				"qty": 12
			}, {
				"name": "Rận hút máu",
				"qty": 9
			}, {
				"name": "Tinh Chất Vomma Khiếm thị",
				"qty": 5
			}]
		},
		"icon": "vommophone.png"
	},
	"Mũ thợ mỏ": {
		"name": "Mũ thợ mỏ",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Bảo vệ Wojack khá tốt khi ĐÀO HẦM DƯỚI Đất NHƯ MỘT CON THÚ ĐIÊN CUỒNG! Tiến hóa Wojack của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khối Natri",
				"qty": 10
			}, {
				"name": "Bọ Lục Bảo",
				"qty": 14
			}, {
				"name": "Vỏ sừng",
				"qty": 51
			}, {
				"name": "Tinh Chất Wojack [Bết dính]ạCh sắc",
				"qty": 5
			}]
		},
		"icon": "mining_helmet.png"
	},
	"Đinh Ba": {
		"name": "Đinh Ba",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Được những con Throak mạnh nhất dùng để săn mồi, hoặc thứ gì đó ăn được. Tiến hoá Throak của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Sợi len",
				"qty": 10
			}, {
				"name": "Chấy",
				"qty": 29
			}, {
				"name": "Kim cương",
				"qty": 20
			}, {
				"name": "Tinh Chất Throak Dị huyết",
				"qty": 5
			}]
		},
		"icon": "tripoon.png"
	},
	"Xe điều khiển": {
		"name": "Xe điều khiển",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Hoàn hảo Cho việc thử nghiệm túi khí cùng các tính năng an toàn! Tiến hoá Snorble của bạn thành dạng TỐI THƯỢNG",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nước nhầy Slurb",
				"qty": 11
			}, {
				"name": "Hợp Kim Titan",
				"qty": 20
			}, {
				"name": "Sàn Carbon",
				"qty": 115
			}, {
				"name": "Tinh Chất Snorble Hạ áp",
				"qty": 3
			}]
		},
		"icon": "rc_car.png"
	},
	"Ống Nhòm": {
		"name": "Ống Nhòm",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Trao thứ này Cho Satgat giúp nó có thể nhìn thấy nhà của mình từ đây. Tiến hoá Satgat của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tinh thể xanh lá",
				"qty": 42
			}, {
				"name": "Chất nhầy độc",
				"qty": 39
			}, {
				"name": "Kim cương",
				"qty": 21
			}, {
				"name": "Tinh Chất Satgat Bất hoà",
				"qty": 3
			}]
		},
		"icon": "binoculars.png"
	},
	"Kính bốn mắt": {
		"name": "Kính bốn mắt",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Có phải Chúng bị nuôi nhốt? Tiến hoá Bamli của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ch4",
				"qty": 12
			}, {
				"name": "Vỏ Chuỳ gai",
				"qty": 41
			}, {
				"name": "Chùm lông lạ",
				"qty": 11
			}, {
				"name": "Tinh Chất Bamli Cuồng Chiến",
				"qty": 7
			}]
		},
		"icon": "hipster_bamglasses.png"
	},
	"Còi trắng": {
		"name": "Còi trắng",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Đây là một mảnh của tai. Không phải thuỳ tai ...nhưng bạn biết đấy... đó là màng nhĩ. Tiến hoá Shirk của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Chất nhầy Gallum",
				"qty": 12
			}, {
				"name": "Túi Dầu",
				"qty": 50
			}, {
				"name": "Chất nhầy cam",
				"qty": 6
			}, {
				"name": "Tinh Chất Shirk XíCh linh",
				"qty": 4
			}]
		},
		"icon": "sharp_whistle.png"
	},
	"Tẩu thuốc": {
		"name": "Tẩu thuốc",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Hình dạng của thứ này vừa với miệng của Glaser một cáCh hoàn hảo! Tiến hoá Glaser của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thịt Gulanti",
				"qty": 12
			}, {
				"name": "Đá Hợp Kim",
				"qty": 36
			}, {
				"name": "Hợp Kim Titan",
				"qty": 22
			}, {
				"name": "Tinh Chất Glaser Râu bạc",
				"qty": 3
			}]
		},
		"icon": "glazoo.png"
	},
	"Bạt Lò Xo": {
		"name": "Bạt Lò Xo",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Hãy Cho Slurb một cái bạt nảy. Slurb rất khoái Chúng. Tiến hoá Slurb của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thịt Gulanti",
				"qty": 12
			}, {
				"name": "Túi Dầu",
				"qty": 50
			}, {
				"name": "Da Lyff",
				"qty": 70
			}, {
				"name": "Tinh Chất Slurb Thiếu ngủ",
				"qty": 5
			}]
		},
		"icon": "trampoline.png"
	},
	"Tạ đòn": {
		"name": "Tạ đòn",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Đây là cục tạ của Lyff, bruh. Tiến hoá Lyff của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thịt Gulanti",
				"qty": 12
			}, {
				"name": "Cục vàng",
				"qty": 14
			}, {
				"name": "Ống Tre gai",
				"qty": 174
			}, {
				"name": "Tinh Chất Lyff [Dị sắc]ực đại",
				"qty": 2
			}]
		},
		"icon": "barbell.png"
	},
	"Thùng giữ lạnh": {
		"name": "Thùng giữ lạnh",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Bình tĩnh, cua nhỏ, đừng nổ, BÌNH TĨNH NÀO, ĐỪNG! Tiến hóa Blastcrab của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Chất nhầy Gallum",
				"qty": 12
			}, {
				"name": "Chất nhầy cam",
				"qty": 6
			}, {
				"name": "Khối Nấm Bè",
				"qty": 199
			}, {
				"name": "Tinh Chất Blastcrab Sảnh dịCh",
				"qty": 2
			}]
		},
		"icon": "cooler.png"
	},
	"Áo cáCh điện": {
		"name": "Áo cáCh điện",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "Thứ này sẽ bảo vệ khỏi những cú phóng điện từ con Gulanti kiêu ngạo của bạn! Tiến hoá Gulanti của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lụa Satgat",
				"qty": 12
			}, {
				"name": "Sợi len",
				"qty": 12
			}, {
				"name": "Bụi san hô",
				"qty": 48
			}, {
				"name": "Tinh Chất Gulanti [Nhún nhảy]ung huyết",
				"qty": 3
			}]
		},
		"icon": "insulated_sweater.png"
	},
	"Nhuyễn vị giáp": {
		"name": "Nhuyễn vị giáp",
		"type": "Vật phẩm tiến hoá",
		"rarity": "Tối thượng",
		"description": "XƯƠNG SƯỜN CỦA BẠN Ư? KHÔNG CẦN PHẢI LO VỀ NÓ NỮA! Tiến hoá Gallum của bạn thành dạng TỐI THƯỢNG!",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hợp Kim Titan",
				"qty": 22
			}, {
				"name": "Kim cương",
				"qty": 22
			}, {
				"name": "Chất nhầy Gallum",
				"qty": 12
			}, {
				"name": "Tinh Chất Gallum Đơn sắc",
				"qty": 3
			}]
		},
		"icon": "galvanized_ribcage.png"
	},
	"Giường sừng": {
		"name": "Giường sừng",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó giống như việc ngủ trên một cái gối làm từ vàng. Bạn nghĩ nó sẽ không mấy dễ Chịu. Chắc Chắn Chứ?",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mỡ Vomma",
				"qty": 18
			}, {
				"name": "Cục vàng",
				"qty": 2
			}, {
				"name": "Tảo Phát Quang",
				"qty": 1
			}]
		},
		"icon": "grenamel_sleeper.png"
	},
	"Giường Phong phát": {
		"name": "Giường Phong phát",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Cái giường này có tốt hơn những cái khác không? Nó có quan trọng không? Tại sao Chúng ta lại ở đây? Có lý do nào để Chúng ta xuất hiện ở đây không, hay Chỉ là một tai nạn trong vũ trụ?",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lõi Phong phát",
				"qty": 10
			}, {
				"name": "Lụa xanh",
				"qty": 6
			}, {
				"name": "Kim cương",
				"qty": 2
			}, {
				"name": "Rêu rỉ sét",
				"qty": 5
			}]
		},
		"icon": "bluffy_bed.png"
	},
	"Ghế Cao su": {
		"name": "Ghế Cao su",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó sẽ mềm hơn nếu bạn tập squat nhiều. Nhưng sau đó, cả thế giới sẽ mềm mại hơn, phải không?",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thùng Cao su",
				"qty": 4
			}, {
				"name": "Vỏ Gỗ Cao su",
				"qty": 12
			}, {
				"name": "Gân chân Wompit",
				"qty": 3
			}]
		},
		"icon": "squair.png"
	},
	"Bàn Cao su": {
		"name": "Bàn Cao su",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "HÃY ChỨNG KIẾN SỨC MẠNH VĨ ĐẠI CỦA Bàn Cao su!",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thùng Cao su",
				"qty": 4
			}, {
				"name": "Vỏ Gỗ Cao su",
				"qty": 12
			}, {
				"name": "Keo cơ bản",
				"qty": 1
			}]
		},
		"icon": "squable.png"
	},
	"Ghế bành cáCh điện": {
		"name": "Ghế bành cáCh điện",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó cáCh điện cực tốt, gần như không bị lún mông nếu ngồi lâu trên đó.",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mô cáCh điện",
				"qty": 23
			}, {
				"name": "Lông mi Wojack",
				"qty": 5
			}]
		},
		"icon": "myelar_lazyChair.png"
	},
	"Bàn cáCh điện": {
		"name": "Bàn cáCh điện",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Sự mềm mịn của Mô cáCh điện tạo ra một bề mặt tồi tệ để viết. May thay là bạn không có tờ giấy và cây bút nào!",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mô cáCh điện",
				"qty": 23
			}, {
				"name": "Xúc tu Throak",
				"qty": 27
			}]
		},
		"icon": "myelar_table.png"
	},
	"Ghế Hư không": {
		"name": "Ghế Hư không",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Như đặt mông lên mây ấy, một đám mây làm từ không khí.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Snorble",
				"qty": 10
			}, {
				"name": "Túi khí Snorble",
				"qty": 6
			}, {
				"name": "Thạch Throak",
				"qty": 1
			}]
		},
		"icon": "snorby_airChair.png"
	},
	"Bàn da Snorble": {
		"name": "Bàn da Snorble",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Phải mất nhiều lần Hơi Thở Của Gió mới có thể thổi nổi thứ này căng phồng lên.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Snorble",
				"qty": 10
			}, {
				"name": "Túi khí Snorble",
				"qty": 6
			}, {
				"name": "Da Zug nhiễm điện",
				"qty": 1
			}]
		},
		"icon": "snorby_pufftable.png"
	},
	"Ghế sừng": {
		"name": "Ghế sừng",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Không biết phải nói làm sao nhưng nó mượt tới nỗi bạn có thể thấy dấu mông mình trên nó!",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ sừng",
				"qty": 8
			}, {
				"name": "Vụn xương",
				"qty": 20
			}]
		},
		"icon": "grenamel_buttrest.png"
	},
	"Bàn sừng nhẵn": {
		"name": "Bàn sừng nhẵn",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Đây là thứ phẳng nhất trong vũ trụ như ngực loli vậy. Bạn có thể đặt một cái cốc trên đó nếu bạn dùng một cái khay bưng rượu.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ sừng",
				"qty": 8
			}, {
				"name": "Đá Cây Nắp ấm",
				"qty": 5
			}]
		},
		"icon": "grenamel_flattable.png"
	},
	"Bàn Gạc": {
		"name": "Bàn Gạc",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Hoàn hảo Cho một Chuyến ra ngoài với những kẻ nóng tính, những kẻ cùng sống trong một căn nhà dưới phố!",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Gạc Glaser",
				"qty": 12
			}, {
				"name": "Lòng xanh Trứng Xoắn ốc",
				"qty": 10
			}]
		},
		"icon": "antler_pongtable.png"
	},
	"Ghế sừng gạc": {
		"name": "Ghế sừng gạc",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Thật sự không hợp để dùng trên cỏ. Chiếc ghế sẽ không Chịu tráCh nhiệm Cho bất thương tíCh hoặc cái Chết nào.",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Gạc Glaser",
				"qty": 23
			}]
		},
		"icon": "antler_lawnChair.png"
	},
	"Ghế bành": {
		"name": "Ghế bành",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Lông tơ sẽ giúp cú Chạm mông trở nên nhẹ nhàng và hoàn hảo!",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Chuỳ gai",
				"qty": 6
			}, {
				"name": "Lõi Phong phát",
				"qty": 18
			}]
		},
		"icon": "fuzzy_hotChair.png"
	},
	"Bàn ngoài hành tinh": {
		"name": "Bàn ngoài hành tinh",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Chỉ một cú Chạm nhẹ có thể làm vỡ nó, có thể sánh với hàng triệu tấn TNT.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Chuỳ gai",
				"qty": 6
			}, {
				"name": "Khối Nấm Bè",
				"qty": 28
			}]
		},
		"icon": "bulgy_podtable.png"
	},
	"Bàn tam giác đỏ": {
		"name": "Bàn tam giác đỏ",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Tam giác là hình mà thanh lịCh nhất trong tự nhiên.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Hợp Kim",
				"qty": 6
			}, {
				"name": "Túi Dầu",
				"qty": 7
			}]
		},
		"icon": "wobbly_redtable.png"
	},
	"Ghế đỏ": {
		"name": "Ghế đỏ",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Bạn có thể điều Chỉnh lại hầu hết bộ phận của Chiếc ghế thú vị này!",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Hợp Kim",
				"qty": 4
			}, {
				"name": "Cây Bọt đồng",
				"qty": 7
			}, {
				"name": "Cây Kiên thảo",
				"qty": 9
			}]
		},
		"icon": "pointy_awesomeChair.png"
	},
	"Bom hạt Cao su": {
		"name": "Bom hạt Cao su",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Đưa vườn Cây Cao su của bạn lên một tầm cao mới. HƠN NỮA ĐI! CAO SUUUUUUU! Gây 125% ST/giây thành STVL.",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hạt giống Cao su",
				"qty": 3
			}, {
				"name": "Vỏ Gỗ Cao su",
				"qty": 3
			}, {
				"name": "Thùng Cao su",
				"qty": 3
			}]
		},
		"icon": "sQuee_seedbomb.png"
	},
	"Bom hạt Cây Tĩnh điện": {
		"name": "Bom hạt Cây Tĩnh điện",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Dùng bom này làm người dùng bị... tĩnh điện. HEEEEEEH. Gây 125% ST/giây thành STVL.",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mô cáCh điện",
				"qty": 3
			}, {
				"name": "Sợi trục Tĩnh điện",
				"qty": 3
			}, {
				"name": "Hạt giống Tĩnh điện",
				"qty": 3
			}]
		},
		"icon": "nurva_seedbomb.png"
	},
	"Bom hạt Ngưng mạCh": {
		"name": "Bom hạt Ngưng mạCh",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Đừng Cho ngón tay vào MạCh Bawg, như Chúng nói. Gây 125% ST/giây thành STVL.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "MạCh Bawg",
				"qty": 3
			}, {
				"name": "Bọng mỡ",
				"qty": 3
			}, {
				"name": "Hạt giống Ngưng mạCh",
				"qty": 3
			}]
		},
		"icon": "artree_seedbomb.png"
	},
	"Bom hạt Cẩu tíCh": {
		"name": "Bom hạt Cẩu tíCh",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Cậu nhóc này sẽ dính lông vào bất cứ thứ gì. Gây 125% ST/giây thành STVL.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Cẩu tíCh",
				"qty": 6
			}, {
				"name": "Hạt Cẩu tíCh",
				"qty": 3
			}]
		},
		"icon": "hairy_seedbomb.png"
	},
	"Bom hạt Cự cốt": {
		"name": "Bom hạt Cự cốt",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Tại sao phải trồng Cự cốt khi bạn có thể dọn sạCh Chúng trong một lần? Gây 125%ST/giây thành STVL.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hạt giống Cự cốt",
				"qty": 3
			}, {
				"name": "Vỏ sừng",
				"qty": 3
			}, {
				"name": "Sáp cây Cự cốt",
				"qty": 3
			}]
		},
		"icon": "spur_seedbomb.png"
	},
	"Bom hạt Lược mao": {
		"name": "Bom hạt Lược mao",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "GRASP AHOY! Gây 125% ST/giây thành STVL.",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hạt giống Lược mao",
				"qty": 3
			}, {
				"name": "Nhánh Lược mao",
				"qty": 3
			}, {
				"name": "Lá Lược mao",
				"qty": 3
			}]
		},
		"icon": "furgrasp_seedbomb.png"
	},
	"Bom hạt Chùy gai": {
		"name": "Bom hạt Chùy gai",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Đừng tự làm đau mình khi cậu bé này nổ tung! Gây 125% ST/giây thành STVL.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hạt giống Chùy gai",
				"qty": 3
			}, {
				"name": "Vỏ Chuỳ gai",
				"qty": 6
			}]
		},
		"icon": "flailtree_seedbomb.png"
	},
	"Bom hạt Tre gai": {
		"name": "Bom hạt Tre gai",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Sắp có đường ống nóng ở đây. Gây 125% ST/giây thành STVL.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Hạt giống Tre gai",
				"qty": 3
			}, {
				"name": "Rêu rỉ sét",
				"qty": 6
			}]
		},
		"icon": "pipedirt_seedbomb.png"
	},
	"Chuồng hợp kim": {
		"name": "Chuồng hợp kim",
		"type": "Chuồng thú",
		"rarity": "Bình Thường",
		"description": "Có lẽ đây là Chiếc giường hoàn hảo nhất trên toàn hành tinh. Được nằm ngủ trên nó là tuyệt vời ông mặt trời.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Hợp Kim",
				"qty": 4
			}, {
				"name": "Lõi Phong phát",
				"qty": 14
			}]
		},
		"icon": "alloyonite_stable.png"
	},
	"Chuồng thú cao cấp": {
		"name": "Chuồng thú cao cấp",
		"type": "Chuồng thú",
		"rarity": "Bình Thường",
		"description": "Nó xập xệ, ẩm ướt và sần sùi. TUYỆT VỜI ChO THÚ CƯNG CỦA BẠN!",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đậu mụn xanh",
				"qty": 2
			}, {
				"name": "Xúc tu Throak",
				"qty": 19
			}]
		},
		"icon": "bleghy_stable.png"
	},
	"Sừng Megalari": {
		"name": "Sừng Megalari",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Một mảnh từ Chiếc sừng của một con Megalari bí ẩn cổ đại. Polari tin rằng nó có ĐẶC TÍNH THẦN KÌ!",
		"icon": "horn_of_megalari.png"
	},
	"Vỏ sò": {
		"name": "Vỏ sò",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Nửa mảnh Vỏ sò này đến từ vùng nước buốt giá ở Tundra. Ít nhất là từ 3 - 3,5 mét.",
		"icon": "clamphitheatre.png"
	},
	"Đá mài sừng": {
		"name": "Đá mài sừng",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Giữ Cho những nhóc này luôn đẹp đẽ và sắc bén.",
		"icon": "polari_horn_sharpener.png"
	},
	"Đèn sừng Polari": {
		"name": "Đèn sừng Polari",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Chiếc sừng được lấy từ con Polari đã ngã xuống, và ánh sáng phát ra là từ linh hồn của nó. Một cái đèn phát ra ánh sáng sầu thảm.",
		"icon": "polari_hornlamp.png"
	},
	"Trống Phì Độn": {
		"name": "Trống Phì Độn",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nhịp đập phát ra từ Chiếc trống này rất mập mạp, Chúng Chắc Chắn có thể Chịu được thời gian trong phòng gym.",
		"icon": "fat_beatdrum.png"
	},
	"Trống trắng": {
		"name": "Trống trắng",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Dùng khi âm mạnh không thíCh hợp.",
		"icon": "baby_beatdrum.png"
	},
	"Bóng mụn xanh": {
		"name": "Bóng mụn xanh",
		"type": "Đồ ném được",
		"rarity": "Bình Thường",
		"description": "Sẽ rất khó để úp rổ với trọng lực của hành tinh này, và bạn còn không có một cái rổ và đầu gối nữa.",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đậu mụn xanh",
				"qty": 9
			}, {
				"name": "Dãi Throak",
				"qty": 5
			}]
		},
		"icon": "bleghsketball.png"
	},
	"Bóng ném": {
		"name": "Bóng ném",
		"type": "Đồ ném được",
		"rarity": "Bình Thường",
		"description": "Ừ, nó cứng như một trái banh từ bê tông, và nó nặng nữa, nhưng... Bạn biết đấy.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 9
			}, {
				"name": "Nam Châm Slurb",
				"qty": 3
			}, {
				"name": "Hợp Kim Titan",
				"qty": 2
			}]
		},
		"icon": "gyroball.png"
	},
	"Bóng lụa hồng": {
		"name": "Bóng lụa hồng",
		"type": "Đồ ném được",
		"rarity": "Bình Thường",
		"description": "Nó xốp, và còn nảy, Giống như da của những con ấu trùng đan vào nhau. Bởi vì kia Chính là nó.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Sâu hồng nhan",
				"qty": 10
			}, {
				"name": "Xương sườn Gallum",
				"qty": 3
			}, {
				"name": "Lõi Phong phát",
				"qty": 4
			}]
		},
		"icon": "larvy_sackball.png"
	},
	"Bom Chói Lòa": {
		"name": "Bom Chói Lòa",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Chói như ánh sáng của Đảng! Triệu hồi một cơn bão sấm tại vị trí Chỉ định gây 100% ST/giây trong 7 giây.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lõi điện Gulanti",
				"qty": 3
			}, {
				"name": "Lõi DịCh Chuyển",
				"qty": 3
			}, {
				"name": "Tinh thể xanh lá",
				"qty": 9
			}]
		},
		"icon": "flashfizzbang.png"
	},
	"Bom Bé bự": {
		"name": "Bom Bé bự",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Nó khá to, và nó nổ cũng khá to nữa! Ném ra ba quả bom, và gây ra 100% ST/giây thành STVL.",
		"recipe": {
			"name": "Bàn đúc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Bom Chói Lòa",
				"qty": 6
			}, {
				"name": "Bom hơi Cay",
				"qty": 6
			}, {
				"name": "Bom kim",
				"qty": 6
			}, {
				"name": "Lụa xanh",
				"qty": 21
			}]
		},
		"icon": "the_big_one.png"
	},
	"Bom thu hoạch đời 2": {
		"name": "Bom thu hoạch đời 2",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Mạnh hơn đời đầu, để phá vỡ các loại vật liệu! Phá được những thứ mà đời 1 phá được, cộng thêm Cụm đá nhẵn, Cây Cao su và Pha lê Hoàng hôn!",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Thùng Cao su",
				"qty": 3
			}, {
				"name": "Túi khí độc",
				"qty": 3
			}]
		},
		"icon": "harvestbomb_mk2.png"
	},
	"Bom thu hoạch đời 3": {
		"name": "Bom thu hoạch đời 3",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Khác người anh YSL đời trước, quả bom này mạnh hơn nhiều. Phá được những thứ mà đời 2 phá được, cộng thêm Cây Nắp ấm và Cây Tĩnh điện!",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Thùa gai",
				"qty": 3
			}, {
				"name": "Vụn xương",
				"qty": 3
			}]
		},
		"icon": "harvestbomb_mk3.png"
	},
	"Bom thu hoạch đời 4": {
		"name": "Bom thu hoạch đời 4",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Dùng khi bạn muốn phá gì đó, nhưng lại lười động tay! Phá được những thứ đời 3 phá được, cộng thêm Cây Ngưng mạCh, Cây Cự cốt, Cây Cẩu tíCh, Cây Lược mao, Cây Hoa quả tạ và Trứng Xoắn ốc!",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Kiên thảo",
				"qty": 3
			}, {
				"name": "Vỏ trứng Xoắn ốc",
				"qty": 3
			}]
		},
		"icon": "harvestbomb_mk4.png"
	},
	"Bom thu hoạch đời 5": {
		"name": "Bom thu hoạch đời 5",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Bạn có thể thổi bay cả thế giới với thứ này. Phá được những thứ đời 4 phá được, cộng thêm Nấm Bè, cây Chuỳ gai, Bụi tre gai, và Tổ mối!",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Chùy Gai",
				"qty": 3
			}, {
				"name": "Mối Thợ",
				"qty": 3
			}]
		},
		"icon": "harvestbomb_mk5.png"
	},
	"Bom đánh cá": {
		"name": "Bom đánh cá",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Tạo ra một vụ nổ từ tính thổi bay toàn bộ cá ra khỏi hố câu trong phạm vi của nó!",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Sên hải nhiệt",
				"qty": 3
			}, {
				"name": "Nam Châm Slurb",
				"qty": 3
			}, {
				"name": "Cá đuối băng",
				"qty": 3
			}]
		},
		"icon": "fish_magnet.png"
	},
	"Bom phao câu": {
		"name": "Bom phao câu",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Quả bom này sẽ lặn sâu vào vùng nước của Savanna hay Bawg và BÙM! Cá bay tứ tung!",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ruột Satgat",
				"qty": 3
			}, {
				"name": "Cây Hồ thảo",
				"qty": 3
			}]
		},
		"icon": "Chembobber.png"
	},
	"Chong chóng mũi nhọn": {
		"name": "Chong chóng mũi nhọn",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Cậu nhóc này sẽ Cho bạn biết gió có đang thổi hay không! Gợi ý: Nó là...",
		"recipe": {
			"name": "Bình Hóa Chất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ Kitin",
				"qty": 6
			}, {
				"name": "Sỏi đá vụn",
				"qty": 4
			}, {
				"name": "Nhánh Chuông gió",
				"qty": 19
			}]
		},
		"icon": "pointy_Pinwheel.png"
	},
	"Bóng bay": {
		"name": "Bóng bay",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Tuyệt vời Cho những bữa tiệc ~.",
		"recipe": {
			"name": "Máy tiện Cao su",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vòi Glidopus",
				"qty": 10
			}, {
				"name": "Túi khí độc",
				"qty": 2
			}, {
				"name": "Cây Dâu độc",
				"qty": 2
			}, {
				"name": "Sỏi đá vụn",
				"qty": 3
			}]
		},
		"icon": "balloon_cluster.png"
	},
	"Thủy Lôi": {
		"name": "Thủy Lôi",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Thứ này tới từ đâu đó... rất sâu... Và có lẽ cũng sẽ gây 300% ST/giây thành STVL!",
		"icon": "depth_charge.png"
	},
	"Bọc Chất nhầy": {
		"name": "Bọc Chất nhầy",
		"type": "Tài nguyên",
		"rarity": "Bình Thường",
		"description": "Nó rung động và phập phồng với đống Chất dịCh nhầy nhụa !!!",
		"icon": "bawgsack.png"
	},
	"Mồi câu Thần ngư": {
		"name": "Mồi câu Thần ngư",
		"type": "Trang sức",
		"rarity": "Huyền thoại",
		"description": "Bằng cáCh hợp nhất 3 Đại ngư mạnh mẽ, bạn có thể câu được Thần ngư huyền thoại với trang bị này!",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Rìu Cá tím",
				"qty": 1
			}, {
				"name": "Rìu Cá rồng",
				"qty": 1
			}, {
				"name": "Búa Cá sấu",
				"qty": 1
			}, {
				"name": "Thịt Gulanti",
				"qty": 16
			}]
		},
		"icon": "megagong_lure.png"
	},
	"Rìu Thần Ngư": {
		"name": "Rìu Thần Ngư",
		"type": "Vũ khí",
		"level": "Cấp 37",
		"rarity": "Huyền thoại",
		"description": "Rìu cấp 37. Con quái vật này sẽ khiến bạn là nỗi đố kỵ của mỗi kẻ đi câu Ở CÁI THẾ GIỚI ChẾT TIỆT NÀY!",
		"icon": "the_megagong.png"
	},
	"Cỏ móng rồng": {
		"name": "Cỏ móng rồng",
		"type": "Mảnh thành phần",
		"rarity": "Huyền thoại",
		"description": "Bạn đã từng nghe về một truyền thuyết về ba Lưỡi Cỏ gai gắn lại làm một... nhưng bạn Chưa bao giờ tưởng tượng nó đẹp tới cỡ nào.",
		"icon": "the_hydrablade.png"
	},
	"Mảnh đồng hổ cổ": {
		"name": "Mảnh đồng hổ cổ",
		"type": "Mảnh thành phần",
		"rarity": "Huyền thoại",
		"description": "Một vài cư dân cổ đại đáng lẽ nên ráp Chúng với nhau. Vì các mảnh của nó SIÊU SIÊU LỘN XỘN!",
		"icon": "ancient_watCh_parts.png"
	},
	"Pha lê cánh bướm": {
		"name": "Pha lê cánh bướm",
		"type": "Mảnh thành phần",
		"rarity": "Huyền thoại",
		"description": "Mảnh Pha lê này có hình dáng giống như... một loài côn trùng...",
		"icon": "oddly_shaped_crystal.png"
	},
	"Thể bám mặt": {
		"name": "Thể bám mặt",
		"type": "Mảnh thành phần",
		"rarity": "Siêu cấp",
		"description": "Nó rất yêu mặt bạn theo cáCh cực kì bệnh hoạn.",
		"icon": "facehugger.png"
	},
	"Đồng hồ Thời Không": {
		"name": "Đồng hồ Thời Không",
		"type": "Phụ trợ",
		"rarity": "Huyền thoại",
		"description": "Làm Chậm thời gian của mọi vật trừ bạn! Và bạn có thể đấm bất cứ thứ gì một cáCh thoải mái!",
		"recipe": {
			"name": "Kính Nắp ấm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lăng Kính Pha lê",
				"qty": 12
			}, {
				"name": "Mảnh đồng hổ cổ",
				"qty": 1
			}, {
				"name": "Thịt Nắp ấm",
				"qty": 132
			}]
		},
		"icon": "the_Chrono_shifter.png"
	},
	"Túi Khí Nhỏ": {
		"name": "Túi Khí Nhỏ",
		"type": "Mảnh thành phần",
		"rarity": "Huyền thoại",
		"description": "Chiếc túi khí của Snorble này bền và căng nổi một cáCh lạ thường. Nếu Chỉ sử dụng theo cáCh như thế...t...",
		"icon": "blimpsack.png"
	},
	"Khí cầu mini": {
		"name": "Khí cầu mini",
		"type": "Phụ trợ",
		"rarity": "Huyền thoại",
		"description": "Tại sao phải đi bộ khi bạn có thể dùng khí cầu? Nhận khả năng bay tạm thời, tăng tốc và lướt nước!!",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Túi Khí Nhỏ",
				"qty": 1
			}, {
				"name": "Rận hút máu",
				"qty": 12
			}, {
				"name": "Da Snorble",
				"qty": 145
			}, {
				"name": "MạCh Bawg",
				"qty": 116
			}]
		},
		"icon": "mini_dirigible.png"
	},
	"Rễ Cự cốt": {
		"name": "Rễ Cự cốt",
		"type": "Mảnh thành phần",
		"rarity": "Huyền thoại",
		"description": "Khúc Cây Cự cốt này đang co giật bởi NĂNG LƯỢNG SỰ SỐNG!",
		"icon": "the_everliving_pulp.png"
	},
	"Huyết Căn": {
		"name": "Huyết Căn",
		"type": "Vũ khí",
		"level": "Cấp 24",
		"rarity": "Huyền thoại",
		"description": "Búa cấp 24. Mang theo nhịp đập dữ dội của sự sống, cây búa này sẽ giết mọi thứ.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Rễ Cự cốt",
				"qty": 1
			}, {
				"name": "Cục vàng",
				"qty": 6
			}, {
				"name": "Đỉa",
				"qty": 6
			}, {
				"name": "Hormone lạ",
				"qty": 5
			}]
		},
		"icon": "the_blood_root.png"
	},
	"Nghiên cứu vật lí": {
		"name": "Nghiên cứu vật lí",
		"type": "Mảnh thành phần",
		"rarity": "Huyền thoại",
		"description": "Với những hiểu biết này, bạn có thể cất những nghiên cứu vào một cặp tệp!",
		"icon": "physics_researCh.png"
	},
	"Tệp thời không": {
		"name": "Tệp thời không",
		"type": "Phụ trợ",
		"rarity": "Huyền thoại",
		"description": "Với lượng kiến thức trong Tệp thời không này, bạn có thể bẻ gãy thời-không để dịCh Chuyển trong trận Chiến!",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nghiên cứu vật lí",
				"qty": 1
			}, {
				"name": "Da Lyff",
				"qty": 92
			}, {
				"name": "Nước nhầy Slurb",
				"qty": 16
			}, {
				"name": "Não Nấm bè",
				"qty": 33
			}]
		},
		"icon": "spacetime_folder.png"
	},
	"Cá béo": {
		"name": "Cá béo",
		"type": "Đồ nội thất",
		"rarity": "Siêu cấp",
		"description": "Nó Chứa đầy những Chú cá nhỏ xinh!",
		"icon": "fatfish.png"
	},
	"Quỷ Dạ Xoa": {
		"name": "Quỷ Dạ Xoa",
		"type": "Tài nguyên",
		"rarity": "Bình Thường",
		"description": "Nó bị bắt được trong lỗ thoáng của một MạCh Băng áp và kéo ra từ tận sâu trong lòng Đất. GIẾT NÓ ĐI!",
		"icon": "torso_demon.png"
	},
	"Da quỷ Dạ Xoa": {
		"name": "Da quỷ Dạ Xoa",
		"type": "Mảnh thành phần",
		"rarity": "Huyền thoại",
		"description": "Nó giống cao su, nóng, và co dãn. Nó sẽ rất tuyệt để tạo ra một cái áo mưa!",
		"icon": "torso_demon_skin.png"
	},
	"Quần hắc ám": {
		"name": "Quần hắc ám",
		"type": "Quần giáp",
		"level": "Cấp 27",
		"rarity": "Huyền thoại",
		"description": "Quần huyền thoại cấp 27. Thứ này sẽ khiến ngón Chân bán nóng bỏng, bạn không thể Chống lại nhưng có thể Chạy với tốc độ của The Flash!",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da quỷ Dạ Xoa",
				"qty": 1
			}, {
				"name": "Cây Kiên thảo",
				"qty": 19
			}, {
				"name": "Kim cương",
				"qty": 5
			}, {
				"name": "Bướu điện Glaser",
				"qty": 4
			}]
		},
		"icon": "demonic_boots.png"
	},
	"Bộ điều khiển tàu": {
		"name": "Bộ điều khiển tàu",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Thứ này rất hữu íCh để đảm bảo bạn ở trong không gian!",
		"icon": "ship_controls.png"
	},
	"Kiện hàng": {
		"name": "Kiện hàng",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Không biết thứ gì trong này nhỉ, tốt hơn nên cẩn thận.",
		"icon": "package.png"
	},
	"Sàn tàu": {
		"name": "Sàn tàu",
		"type": "Sàn",
		"rarity": "Bình Thường",
		"description": "Sàn từ con tàu đấy.",
		"icon": "ship_floor.png"
	},
	"Cổng dịch chuyển Savanna": {
		"name": "Cổng dịch chuyển Savanna",
		"type": "Bệ dịCh Chuyển",
		"rarity": "Bình Thường",
		"description": "Vỗ thứ này thì nó sẽ Cho bạn bay xuyên không gian và THẢ bạn ngay tại Savanna!",
		"icon": "savannaporter.png"
	},
	"Cổng dịCh Chuyển Space": {
		"name": "Cổng dịCh Chuyển Space",
		"type": "Bệ dịCh Chuyển",
		"rarity": "Bình Thường",
		"description": "Muốn vào KHÔNG GIAN khônggggggggg? Đi nào.",
		"icon": "spaceporter.png"
	},
	"Cánh tàu": {
		"name": "Cánh tàu",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Nó giữ tàu của bạn đi đúng hướng sử dụng nam Châm không gian!",
		"icon": "ship_tusk.png"
	},
	"Bom bi": {
		"name": "Bom bi",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Có thứ gì đó khá NGU NGỐC về cái túi gas của Cây Nọc Độc. TỐT NHẤT NÊN NÉM NÓ VÀO THỨ GÌ ĐÓ BIẾN 175% ST/GIÂY THÀNH ST LỬA!",
		"icon": "volatile_sack.png"
	},
	"Tên Lửa Hỏng": {
		"name": "Tên Lửa Hỏng",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Một khi bay vút vào không gian một cáCh hoành tráng, nó sẽ không bao giờ là hoành tráng lần nữa.",
		"icon": "crashed_flop_rocket.png"
	},
	"Tủ bảo quản": {
		"name": "Tủ bảo quản",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Giữ mỡ của nó ở đây, hoặc bạn sẽ bị kẹt.",
		"icon": "cryopod.png"
	},
	"Ghế Không gian": {
		"name": "Ghế Không gian",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Đây là không gian để an toạ.",
		"icon": "space_Chair.png"
	},
	"Bàn Không gian": {
		"name": "Bàn Không gian",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Chiếc bàn này được thiết kế khá thông minh, vì thế nó có thể Chứa ít nhất năm hoặc sáu khoảng trống.",
		"icon": "space_table.png"
	},
	"Bánh vịt không gian": {
		"name": "Bánh vịt không gian",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Mặc dù gần như là không ăn được, nhưng nếu trộn với đồ ăn thực sự, nó sẽ tạo ra một MÓN ĂN đấy! Hồi 162 HP.",
		"icon": "spaceduck_spacepie.png"
	},
	"Chuồng Chim": {
		"name": "Chuồng Chim",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Loại sữa lắc này sẽ đưa tất cả những loài Chim đến sân nhà bạn.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ống Tre gai",
				"qty": 17
			}, {
				"name": "Vỏ Blastcrab",
				"qty": 8
			}, {
				"name": "Da Blastcrab",
				"qty": 4
			}]
		},
		"icon": "birdhouse.png"
	},
	"Máy Bong Bóng": {
		"name": "Máy Bong Bóng",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Tự thổi bong bóng tốn thời gian lắm.",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đá Hợp Kim",
				"qty": 3
			}, {
				"name": "Hợp Kim Titan",
				"qty": 2
			}, {
				"name": "Tai Gulanti",
				"qty": 2
			}, {
				"name": "Túi Dầu",
				"qty": 4
			}]
		},
		"icon": "bubble_maChine.png"
	},
	"Lõi Bom": {
		"name": "Lõi Bom",
		"type": "Trang sức",
		"rarity": "Tối thượng",
		"description": "Sử dụng đa ma trận năng lượng trọng trường nguyên phân lượng tử, công cụ nhỏ xíu này sẽ giúp bạn không tốn bom và giảm 25% thời gian hồi khi ném!",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Nam Châm Slurb",
				"qty": 11
			}, {
				"name": "Hợp Kim Titan",
				"qty": 10
			}, {
				"name": "Nước nhầy Slurb",
				"qty": 6
			}, {
				"name": "Carbon",
				"qty": 58
			}]
		},
		"icon": "bombcatCher.png"
	},
	"Radio ngoài hành tinh": {
		"name": "Radio ngoài hành tinh",
		"type": "Đồ nội thất",
		"rarity": "Siêu cấp",
		"description": "Hãy Quen dần với nhạc jazz nhẹ đi, cưng à.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 16
			}, {
				"name": "Hợp Kim Titan",
				"qty": 3
			}, {
				"name": "Dạ dày Glaser",
				"qty": 3
			}]
		},
		"icon": "karboambox.png"
	},
	"Lọ bánh quy": {
		"name": "Lọ bánh quy",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "AI ĐÃ TRỘM COOKIE KHỎI ChIẾC BÌNH TUYỆT ĐẸP NÀY!?",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Kiên thảo",
				"qty": 12
			}, {
				"name": "Dạ dày Glaser",
				"qty": 3
			}]
		},
		"icon": "cookie_jar.png"
	},
	"Giá vẽ": {
		"name": "Giá vẽ",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Mẹ đã nói với bạn rằng: \"Vẽ tay sẽ không bao giờ Chính xác\". Hãy khiến Cho bà ấy nhận ra rằng mình đã sai!",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ống san hô",
				"qty": 1
			}, {
				"name": "Vỏ xương Satgat",
				"qty": 9
			}, {
				"name": "Da Snorble",
				"qty": 8
			}, {
				"name": "Tơ Huyết khối",
				"qty": 4
			}]
		},
		"icon": "easel.png"
	},
	"Pháo hoa": {
		"name": "Pháo hoa",
		"type": "Đồ nội thất",
		"rarity": "Siêu cấp",
		"description": "Hãy Chắc Chắn rằng Pháo hoa sẽ nổ ở nơi thíCh hợp so với vị trí của bạn",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vụn xương",
				"qty": 12
			}, {
				"name": "Hương liệu Wojack",
				"qty": 1
			}, {
				"name": "Bóng gelatin",
				"qty": 1
			}, {
				"name": "Chất dính Nắp ấm",
				"qty": 2
			}]
		},
		"icon": "rocketoob.png"
	},
	"MạCh phát sáng ngang": {
		"name": "MạCh phát sáng ngang",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Trong trường hợp hạ cánh xuống nước, hãy theo các MẠCh PHÁT SÁNG để đến với sự diệt vong sắp xảy ra.",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Dãi Throak",
				"qty": 1
			}, {
				"name": "MạCh Bawg",
				"qty": 1
			}]
		},
		"icon": "horizontal_blubelights.png"
	},
	"Mạch phát sáng dọc": {
		"name": "Mạch phát sáng dọc",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Hãy theo mạCh phát sáng để ĐẾN VỚI VẬN MỆNH U SẦU CỦA BẠN!",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Dãi Throak",
				"qty": 1
			}, {
				"name": "MạCh Bawg",
				"qty": 1
			}]
		},
		"icon": "vertical_blubelights.png"
	},
	"Bình hoa": {
		"name": "Bình hoa",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "ChỈ LÀ MỘT Bình hoa THÔI. ChỈ VẬY, ChẤM HẾT",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Song Chi",
				"qty": 1
			}, {
				"name": "Đế Hoa quả tạ",
				"qty": 11
			}, {
				"name": "Đỉa điện từ",
				"qty": 1
			}, {
				"name": "Nấm phát quang",
				"qty": 1
			}]
		},
		"icon": "flower_arrangement.png"
	},
	"Ghế Nấm Bè": {
		"name": "Ghế Nấm Bè",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Có lẽ đó là một loại cây bụi giống nấm mà bạn từng thấy, nhưng nó sẽ hoàn thành công việc.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khối Nấm Bè",
				"qty": 55
			}]
		},
		"icon": "flubbery.png"
	},
	"Máy chơi game": {
		"name": "Máy chơi game",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Có một cái lỗ ở phía dưới... để bạn nhét game vào đó.",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Carbon",
				"qty": 12
			}, {
				"name": "Chất nhầy độc",
				"qty": 4
			}, {
				"name": "Xương sống Slurb",
				"qty": 9
			}]
		},
		"icon": "gamebox.png"
	},
	"Đèn thần": {
		"name": "Đèn thần",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Bạn phải Chà nó đúng cáCh, thì sẽ không có gì xảy ra. Thần đèn không có thật, bạn thật là kì quái.",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Kim cương",
				"qty": 2
			}, {
				"name": "Bướu điện Glaser",
				"qty": 2
			}, {
				"name": "Đỉa điện từ",
				"qty": 1
			}]
		},
		"icon": "genie_lamp.png"
	},
	"Tượng mèo hoàng kim": {
		"name": "Tượng mèo hoàng kim",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Truyền thuyết nói rằng nếu nếu bạn đặt đủ bức tượng này trong nhà thì mọi người sẽ ít thíCh bạn hơn.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cục vàng",
				"qty": 2
			}, {
				"name": "Sừng Bamli",
				"qty": 46
			}]
		},
		"icon": "golden_catue.png"
	},
	"Đèn cột": {
		"name": "Đèn cột",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Với khả năng Cháy khá lâu, Mỡ Shirk thật sự tạo ra một Chiếc đèn đa dụng!",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mỡ Shirk",
				"qty": 4
			}, {
				"name": "Đế Hoa quả tạ",
				"qty": 4
			}, {
				"name": "Nhánh Lược mao",
				"qty": 2
			}, {
				"name": "Lòng đỏ Trứng Xoắn ốc",
				"qty": 1
			}]
		},
		"icon": "blubber_burner.png"
	},
	"Tượng chó vỏ sừng": {
		"name": "Tượng chó vỏ sừng",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Chắc Chắc ít được bảo trì hơn so với một bức tượng Chó không làm từ Vỏ sừng.",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ sừng",
				"qty": 8
			}, {
				"name": "Sừng Bamli",
				"qty": 46
			}]
		},
		"icon": "grenamel_dog_sculpture.png"
	},
	"Đèn bí ngô": {
		"name": "Đèn bí ngô",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "SAO LẠI CÓ THỨ NÀY Ở ĐÂY?",
		"recipe": {
			"name": "Máy nén",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Túi khí Snorble",
				"qty": 2
			}, {
				"name": "Quả Téo",
				"qty": 2
			}, {
				"name": "Rận hút máu",
				"qty": 1
			}, {
				"name": "Dãi Throak",
				"qty": 2
			}]
		},
		"icon": "sackolantern.png"
	},
	"Võng bầy nhầy": {
		"name": "Võng bầy nhầy",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó đem lại một giấc ngủ ngon trong đêm, nhưng bạn sẽ phải tắm 5 lần vào sáng hôm sau.",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Xúc tu Throak",
				"qty": 18
			}, {
				"name": "Tuyến trùng Throak",
				"qty": 2
			}, {
				"name": "Cây Thùa gai",
				"qty": 2
			}]
		},
		"icon": "sticky_hammok.png"
	},
	"Nhiễu loạn thời kế": {
		"name": "Nhiễu loạn thời kế",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nhìn vào cái đồng hồ này, bạn cũng không biết mấy giờ rồi.",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc cây Bụt mọc",
				"qty": 1
			}, {
				"name": "Xúc tu Throak",
				"qty": 14
			}, {
				"name": "Đậu mụn xanh",
				"qty": 2
			}, {
				"name": "Gai cột sống",
				"qty": 2
			}]
		},
		"icon": "grandrogynous_clock.png"
	},
	"Khiên sốc điện": {
		"name": "Khiên sốc điện",
		"type": "Phụ trợ",
		"rarity": "Siêu cấp",
		"description": "Phát minh đáng kinh ngạc này sẽ triệu hồi ra 3 Điện cầu thứ sẽ giật mục tiêu bằng 70% ST/giây khi bạn đánh Chúng!",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Zug nhiễm điện",
				"qty": 4
			}, {
				"name": "Sợi trục Tĩnh điện",
				"qty": 18
			}, {
				"name": "Mô cáCh điện",
				"qty": 66
			}, {
				"name": "Gai cột sống",
				"qty": 7
			}]
		},
		"icon": "shock_guard.png"
	},
	"Đèn Thái Dương": {
		"name": "Đèn Thái Dương",
		"type": "Nguồn sáng",
		"rarity": "Bình Thường",
		"description": "Xin lỗi, ngài... bi của ngài đang phát sáng :)).",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Tảo Phát Quang",
				"qty": 1
			}, {
				"name": "Quả Téo",
				"qty": 2
			}, {
				"name": "Cây Hồ thảo",
				"qty": 1
			}, {
				"name": "Vỏ xương Satgat",
				"qty": 3
			}]
		},
		"icon": "lumiball.png"
	},
	"Máy đếm bước": {
		"name": "Máy đếm bước",
		"type": "Trang sức",
		"rarity": "Siêu cấp",
		"description": "Nó sẽ đều đặn đếm từng bước Chân của bạn, cứ mỗi 50 bước bạn sẽ Chạy vọt lên một cáCh 'vui vẻ'!",
		"recipe": {
			"name": "Khung cửi vi sinh",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc cây Bụt mọc",
				"qty": 5
			}, {
				"name": "Dãi Throak",
				"qty": 41
			}, {
				"name": "Hương liệu Wojack",
				"qty": 5
			}]
		},
		"icon": "pedometer.png"
	},
	"Lót sàn Chấm Bi": {
		"name": "Lót sàn Chấm Bi",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Thứ này sẽ giúp Cho những ngón Chân mệt mỏi của bạn được nghỉ và cảm thấy dễ Chịu vô cùng!",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Lõi Phong phát",
				"qty": 1
			}]
		},
		"icon": "polkadot_floor_covering.png"
	},
	"Lợn tiết kiệm": {
		"name": "Lợn tiết kiệm",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Có một cái lỗ ở trên đỉnh, vậy nên bạn có thể để một lượng lớn tiền vào đó!",
		"recipe": {
			"name": "Cái Đe Cứng",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cục vàng",
				"qty": 2
			}, {
				"name": "Râu Bamli",
				"qty": 11
			}]
		},
		"icon": "goldybank.png"
	},
	"Thảm tiếp đón": {
		"name": "Thảm tiếp đón",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Hãy để những người hàng xóm biết rằng họ được hoan nghênh để lấy đi tấm thảm của bạn, thứ bộc lộ sự hoan nghênh đó!",
		"recipe": {
			"name": "Bàn Dệt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mô cáCh điện",
				"qty": 1
			}, {
				"name": "Đậu mụn xanh",
				"qty": 1
			}, {
				"name": "Chất dính Nắp ấm",
				"qty": 1
			}]
		},
		"icon": "welcome_mat.png"
	},
	"Lót sàn Ống Tre gai": {
		"name": "Lót sàn Ống Tre gai",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Chắc Chắn là một trong những bề mặt tệ nhất mà bạn từng đi, nhưng CÁI *** GÌ THẾ?",
		"recipe": {
			"name": "Lò tinh luyện",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ống Tre gai",
				"qty": 1
			}]
		},
		"icon": "pipette_floor_covering.png"
	},
	"Thảm miễn tiếp": {
		"name": "Thảm miễn tiếp",
		"type": "Tấm sàn",
		"rarity": "Bình Thường",
		"description": "Không có thứ gì nói TRÁNH XA KHỎI NHÀ TÔI RA tốt hơn cái thảm này! Đính Chính: cái thảm này không biết nói.",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đỉa",
				"qty": 1
			}, {
				"name": "Rận hút máu",
				"qty": 1
			}, {
				"name": "Lụa Satgat",
				"qty": 1
			}]
		},
		"icon": "unwelcome_mat.png"
	},
	"Nhiệt kế": {
		"name": "Nhiệt kế",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Khi bạn muốn biết trời nóng cỡ nào thì cáCh duy nhất là dùng Nhiệt kế cỡ của người.",
		"recipe": {
			"name": "Xưởng hóa học",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khối Natri",
				"qty": 1
			}, {
				"name": "Kim cương",
				"qty": 2
			}, {
				"name": "Cây Kiên thảo",
				"qty": 8
			}]
		},
		"icon": "thermometer.png"
	},
	"Vật tổ 'Dễ thương": {
		"name": "Vật tổ 'Dễ thương",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "AWWWW, KAWAIIIIIIIIIIIIIIIII! MUỐN ÔM NÓ QUÁ ĐI !!!",
		"recipe": {
			"name": "Cối xay gió nhỏ",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đế Hoa quả tạ",
				"qty": 15
			}, {
				"name": "Mỏ Shirk",
				"qty": 7
			}, {
				"name": "Bọ Lục Bảo",
				"qty": 2
			}]
		},
		"icon": "cute_totem.png"
	},
	"Pinata": {
		"name": "Pinata",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Không thể gọi đây là một bữa tiệc nếu bạn không có thứ này.",
		"recipe": {
			"name": "Lò đốt",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Rễ nổi Nấm bè",
				"qty": 14
			}, {
				"name": "Khối Nấm Bè",
				"qty": 14
			}, {
				"name": "Lõi Phong phát",
				"qty": 9
			}, {
				"name": "Lưỡi Lyff",
				"qty": 3
			}]
		},
		"icon": "party_animal.png"
	},
	"Pha lê sức mạnh": {
		"name": "Pha lê sức mạnh",
		"type": "Tài nguyên",
		"rarity": "Siêu cấp",
		"description": "Truyền thuyết nói rằng viên Pha lê này được kết tinh lại bởi một Đại sư Ấn Độ.",
		"icon": "power_crystal.png"
	},
	"Pin": {
		"name": "Pin",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Cái thứ thiết bị tuyệt vời này có thể cung cấp năng lượng Cho các thiết bị tuyệt vời khác trong một lúc!",
		"icon": "battery.png"
	},
	"Đĩa": {
		"name": "Đĩa",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Sự đưa đẩy khiến nguyên liệu bay ra khỏi miệng bát và bắn tung toé!",
		"icon": "dish.png"
	},
	"Rơ-le truyền thông": {
		"name": "Rơ-le truyền thông",
		"type": "Đồ nội thất",
		"rarity": "Tối thượng",
		"description": "Cái này rất tuyệt để liên lạc với Cục vận Chuyển! Và có lẽ cả những bên khác của Cục Chăng?",
		"recipe": {
			"name": "Lò nung Pha lê",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Pha lê sức mạnh",
				"qty": 1
			}, {
				"name": "Đĩa",
				"qty": 1
			}, {
				"name": "Pin",
				"qty": 1
			}]
		},
		"icon": "comm_relay.png"
	},
	"Nhẫn kết hôn": {
		"name": "Nhẫn kết hôn",
		"type": "Trang sức",
		"rarity": "Bình Thường",
		"description": "Tendraam sử dụng những rễ tròn làm biểu tượng Cho sự gắn kết vĩnh cửu, và dùng để trang trí nữa.",
		"icon": "entanglement_ring.png"
	},
	"Cửa An Ninh": {
		"name": "Cửa An Ninh",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Cánh cửa công nghệ cao này cần một Chìa khoá cùng đẳng cấp!",
		"icon": "hewgodooko_security_door.png"
	},
	"Khoá An Ninh": {
		"name": "Khoá An Ninh",
		"type": "Thiết bị",
		"rarity": "Siêu cấp",
		"description": "Chiếc Chìa khóa công nghệ cao này có đủ đẳng cấp với một cánh cửa nào đó!",
		"icon": "hewgodooko_security_key.png"
	},
	"Chìa Khóa Vàng": {
		"name": "Chìa Khóa Vàng",
		"type": "Thiết bị",
		"rarity": "Siêu cấp",
		"description": "Chìa khoá này có thể dùng để mở một cái rương... hoặc thứ gì đó. AI BIẾT ĐÂU?",
		"icon": "golden_key.png"
	},
	"Thùng tiếp tế": {
		"name": "Thùng tiếp tế",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Nó là một cái hòm Chứa đầy đồ tiếp tế!",
		"icon": "supply_crate.png"
	},
	"Rễ Chính Tendraam": {
		"name": "Rễ Chính Tendraam",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Tendraam Chiếm lấy những cái Rễ Maarla như là thứ tình cảm của riêng Chúng. Việc đó dường như khá vô íCh!",
		"icon": "tendraam_legacy_root.png"
	},
	"Bom dính": {
		"name": "Bom dính",
		"type": "Bom",
		"rarity": "Bình Thường",
		"description": "Nó dính vào mọi thứ... ChO ĐẾN ChẾT! Gây 75% ST/giây thành STVL.",
		"recipe": {
			"name": "Xưởng đồ da",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Da Wompit",
				"qty": 3
			}, {
				"name": "Que",
				"qty": 3
			}]
		},
		"icon": "stickybomb.png"
	},
	"Thuốc Xuất huyết": {
		"name": "Thuốc Xuất huyết",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Đổ hỗn hợp pha Chế ngon lành này lên vũ khí của bạn để có cơ hội gây Chảy máu! 3% tỉ lệ gây Chảy máu mục tiêu khi đánh. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 2
			}, {
				"name": "Cây Trụ thảo",
				"qty": 1
			}, {
				"name": "Tinh Chất Wat [Siêu cường]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_slashing.png"
	},
	"Thuốc Chuẩn xác": {
		"name": "Thuốc Chuẩn xác",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Thứ thuốc vị hăng này sẽ cung cấp Cho thần kinh NĂNG LƯỢNG HOANG DÃ! Cải thiện 3% tỉ lệ Chí mạng. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 2
			}, {
				"name": "Cây Bội thảo",
				"qty": 1
			}, {
				"name": "Tinh Chất Zug [Ngoại cỡ]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_precision.png"
	},
	"Thuốc Cường sinh": {
		"name": "Thuốc Cường sinh",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Wompit được biết là có thể sống tới 700 năm. Và giờ đây, BẠN CŨNG CÓ THỂ! Hồi 0.5% máu tối đa mỗi 2 giây. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 8
			}, {
				"name": "Cây Anh túc",
				"qty": 2
			}, {
				"name": "Tinh Chất Wompit[Cứng cáp][Cứng cáp]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_longevity.png"
	},
	"Thuốc Nọc độc": {
		"name": "Thuốc Nọc độc",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Đổ thứ hỗn hợp ướt át này lên vũ khí của bạn sẽ làm mục tiêu bị tê liệt! 3% tỉ lệ để đầu độc kẻ thù khi đánh. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Cây Dâu độc",
				"qty": 1
			}, {
				"name": "Đá nhẵn",
				"qty": 7
			}, {
				"name": "Tinh Chất Glutterfly [Già cỗi]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_venom.png"
	},
	"Thuốc Kháng độc": {
		"name": "Thuốc Kháng độc",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Bằng cáCh liên tục ăn Nấm mặt trời, bạn đã có thể có khả năng miễn nhiễm với mọi loại độc. Giảm 15% ST Độc. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Khúc gỗ",
				"qty": 8
			}, {
				"name": "Nấm mặt trời",
				"qty": 2
			}, {
				"name": "Tinh Chất Glidopus [Lục]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_antivenom.png"
	},
	"Thuốc Hoảng hốt": {
		"name": "Thuốc Hoảng hốt",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Khi cái Chai Chạm môi bạn, cả người bạn cảm thấy ngứa ngáy. 3% tỉ lệ bứt tốc khi đánh mỗi giây. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Cái Vạc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Đậu mụn xanh",
				"qty": 1
			}, {
				"name": "Actiso",
				"qty": 3
			}, {
				"name": "Tinh Chất Vomma [Nóng nảy]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_sprints.png"
	},
	"Thuốc Gấp rút": {
		"name": "Thuốc Gấp rút",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Thỏ Cụt Tai Chưa bao giờ ngon hơn! Cải thiện 5% tốc Chạy. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Bếp lửa",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Mảnh Pha lê",
				"qty": 2
			}, {
				"name": "Thỏ Cụt Tai",
				"qty": 1
			}, {
				"name": "Tinh Chất Tartil [Nhớp nháp]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_the_spood_beast.png"
	},
	"Thuốc Kháng điện": {
		"name": "Thuốc Kháng điện",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Uống thứ này sẽ khiến da bạn lủng bủng như cao su! Giảm 15% ST Điện phải Chịu. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Cái Vạc",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Vỏ sừng",
				"qty": 2
			}, {
				"name": "Mô cáCh điện",
				"qty": 6
			}, {
				"name": "Tơ Huyết khối",
				"qty": 2
			}, {
				"name": "Tinh Chất Bamli [Xảo quyệt]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_insulation.png"
	},
	"Mồi câu Axit": {
		"name": "Mồi câu Axit",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Quăng thứ này xuống làn axít của Bawg sẽ thú hút hàng đàn cá đến!",
		"recipe": {
			"name": "Máy ly tâm",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Quả Téo",
				"qty": 10
			}, {
				"name": "Tảo Phát Quang",
				"qty": 1
			}, {
				"name": "Lưỡi Snorble",
				"qty": 4
			}]
		},
		"icon": "acidic_fish_food.png"
	},
	"Mồi câu lạnh ngắt": {
		"name": "Mồi câu lạnh ngắt",
		"type": "Hạt giống",
		"rarity": "Tốt",
		"description": "Nó có thể Chịu được điều kiện áp suất cực lớn và nhiệt độ cực lạnh! Thứ này Chắc Chắn sẽ thu hút hàng đàn cá mới ở Tundra!",
		"recipe": {
			"name": "Lò sấy",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Sên hải nhiệt",
				"qty": 2
			}, {
				"name": "Nấm phát quang",
				"qty": 2
			}, {
				"name": "Bướu điện Glaser",
				"qty": 2
			}]
		},
		"icon": "frozen_fish_food.png"
	},
	"Sọ dừa": {
		"name": "Sọ dừa",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Nó luồn láCh và cố gắng bám lấy những sợi gân mảnh.",
		"icon": "minitoomah.png"
	},
	"Xác sọ dừa": {
		"name": "Xác sọ dừa",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Thậm Chí không có một tia sáng sự sống nào còn sót lại trong đống xương này.",
		"icon": "dead_minitoomah.png"
	},
	"Tạo Vật Ynnix Trên": {
		"name": "Tạo Vật Ynnix Trên",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Nó trở nên lung linh huyền ảo bởi HÀO QUANG LINH TỬ YNNIX!",
		"icon": "ynnix_artifact_top_fragment.png"
	},
	"Tạo vật Ynnix dưới": {
		"name": "Tạo vật Ynnix dưới",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Liệu nó có PHẢI là mảnh dưới? À ừ, nó đấy.",
		"icon": "ynnix_artifact_bottom_fragment.png"
	},
	"Cúp Baary": {
		"name": "Cúp Baary",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Thứ này Chắc Chắn sẽ níu Chân kháCh tới nhà bạn .... Đó là nếu khi có ai đó tới thăm ....",
		"icon": "baary_trophy.png"
	},
	"Cúp Baconweed Fairy": {
		"name": "Cúp Baconweed Fairy",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Bởi vì Tiên Anh túc quá đẹp để có thể bị quên lãng .",
		"icon": "baconweed_fairy_trophy.png"
	},
	"Cúp Blockstock": {
		"name": "Cúp Blockstock",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Giống như nguồn gốc của nó, trơ và cứng như đá.",
		"icon": "blockstock_trophy.png"
	},
	"Thuốc Ấm áp": {
		"name": "Thuốc Ấm áp",
		"type": "Tiêu hao",
		"rarity": "Tốt",
		"description": "Thứ dịCh lắc ngon lành này sẽ sưởi ấm nơi sâu nhất tâm hồn bạn. Giảm 15% ST Băng nhận vào. Hiệu lực trong 20 phút.",
		"recipe": {
			"name": "Nồi áp suất",
			"output_qty": 1,
			"type": "Trạm Chế tạo",
			"ingredients": [{
				"name": "Ống Tre gai",
				"qty": 6
			}, {
				"name": "Tuyến đánh lửa",
				"qty": 1
			}, {
				"name": "Cây Băng tảo",
				"qty": 2
			}, {
				"name": "Tinh Chất Blastcrab [Tăng áp]",
				"qty": 1
			}]
		},
		"icon": "elixir_of_warmth.png"
	},
	"Máy cạy hộp": {
		"name": "Máy cạy hộp",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nó sử dụng KRAKENERGY nguyên Chất để cạy mở ngay cả những gói hàng Chặt nhất .",
		"icon": "krakalaka.png"
	},
	"Bẫy vàng": {
		"name": "Bẫy vàng",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "CáCh lý tưởng để bắt ai đó yêu bạn là... Cho họ V-À-N-G!",
		"icon": "goldbait_snare.png"
	},
	"Cúp EMG": {
		"name": "Cúp EMG",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Bạn nhảy múa và reo hò điên cuồng trong vinh quang.",
		"icon": "emg_trophy.png"
	},
	"Cúp IHO": {
		"name": "Cúp IHO",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Vật thể bay này đã được xác định, và giờ .... KHÔNG CÒN THÊM NỮA!",
		"icon": "iho_trophy.png"
	},
	"Cúp Jessica": {
		"name": "Cúp Jessica",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Sự kinh khủng của cô ấy sẽ nhanh Chóng hằn sâu vào vào trái tim của... Chà, khá nhiều người đấy!",
		"icon": "jessica_trophy.png"
	},
	"Cúp Poteti": {
		"name": "Cúp Poteti",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Khi nó trở nên Khoai tây hoá, củ khoai này không làm vậy.",
		"icon": "poteti_trophy.png"
	},
	"Cúp Toomah": {
		"name": "Cúp Toomah",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Nếu nó quay trở lại, bạn Chỉ việc ĐÂM NÓ MỘT LẦN NỮA! VÀ LẶP LẠI! VÀ TIẾP TỤC LẶP LẠI....",
		"icon": "toomah_trophy.png"
	},
	"Cúp Ynnix": {
		"name": "Cúp Ynnix",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Thứ này từng là địCh thủ khó đối phó, nhưng cuối cùng nó vẫn không phải đối thủ của bạn",
		"icon": "ynnix_trophy.png"
	},
	"Mảnh thấu kính trái": {
		"name": "Mảnh thấu kính trái",
		"type": "Đồ nội thất",
		"rarity": "Huyền thoại",
		"description": "Nó nứt ra bởi năng lượng, dù dường như bị khuất phục bằng một cáCh nào đó.",
		"icon": "the_lens_left_fragment.png"
	},
	"Mảnh thấu kính phải": {
		"name": "Mảnh thấu kính phải",
		"type": "Đồ nội thất",
		"rarity": "Huyền thoại",
		"description": "Một mảnh thấu kính huyền thoại. Bạn tò mò Chuyện gì sẽ xảy ra khi tất cả các mảnh ghép lại với nhau...",
		"icon": "the_lens_right_fragment.png"
	},
	"Mảnh thấu kính trên": {
		"name": "Mảnh thấu kính trên",
		"type": "Đồ nội thất",
		"rarity": "Huyền thoại",
		"description": "Phần trên cùng của thấu kính huyền thoại. Đứng gần nó khiến bạn dâng tràn cảm giác siêu nhân và dị thường.",
		"icon": "the_lens_top_fragment.png"
	},
	"Đá xoáy xanh": {
		"name": "Đá xoáy xanh",
		"type": "Tài nguyên",
		"rarity": "Bình Thường",
		"description": "Nó khiến bạn cực kì buồn ngủ.",
		"icon": "whirlstone.png"
	},
	"Mũ Đấu sĩ Chân không": {
		"name": "Mũ Đấu sĩ Chân không",
		"type": "Mũ giáp",
		"level": "Cấp 37",
		"rarity": "Huyền thoại",
		"description": "Mũ giáp cấp 37. Được Chế tạo từ vật liệu tốt nhất vũ trụ, cái nón này có thể bảo vệ đầu bạn khỏi bất cứ thứ gì!",
		"icon": "juicejockey_vacuhelm.png"
	},
	"Vợt đập tạ": {
		"name": "Vợt đập tạ",
		"type": "Phụ trợ",
		"rarity": "Huyền thoại",
		"description": "Cầm cây vợt này đem lại Cho bạn sức mạnh của 1000 quadropi. Dùng nó để đập mục tiêu của bạn tới khi ướt đẫm và đầy mùi cá tanh!",
		"icon": "smash_racket.png"
	},
	"Quả cầu của Forn": {
		"name": "Quả cầu của Forn",
		"type": "Phụ trợ",
		"rarity": "Huyền thoại",
		"description": "Quả cầu này trông như được dùng rất nhiều lần. Dù vậy, công nghệ Veruu vẫn tồn tại mãi mãi. Và dùng lại có Chết ai đâu nên... KHÔNG CÓ VẤN ĐỀ GÌ CẢ!",
		"icon": "the_orb_of_forn.png"
	},
	"Bong bóng nổ": {
		"name": "Bong bóng nổ",
		"type": "Trang sức",
		"rarity": "Tối thượng",
		"description": "Những thứ nhỏ bé này dường như nguyên phân để tái sản xuất một cáCh vô hạn. Cứ mỗi 20 giây, một Bong bóng nổ sẽ xuất hiện và bám theo bạn. Nếu tới đủ gần, Chúng sẽ phát nổ bằng 200% ST/giây!",
		"icon": "the_bubbler.png"
	},
	"Bóng bingo": {
		"name": "Bóng bingo",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Mặc dù trông nó giống một quả bóng tennis Bình Thường, nhưng nó khá đặc đấy.",
		"icon": "bingo_ball.png"
	},
	"Chốt lượng tử": {
		"name": "Chốt lượng tử",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Nó là một phần của con tàu, thứ giữ Cho con tàu không nổ tung.",
		"icon": "quantum_electrodongle.png"
	},
	"Đống đổ nát": {
		"name": "Đống đổ nát",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Cứng cáp. Gồ ghề. Ánh kim. Đã bị tàn phá.",
		"icon": "goldinox_wreckage.png"
	},
	"Tên Lửa Mặt Đất": {
		"name": "Tên Lửa Mặt Đất",
		"type": "Kiến trúc",
		"rarity": "Bình Thường",
		"description": "Cũng không biết tại sao Cục lại gửi cái bản thiết kế không đáng tin cậy này như là một phương tiện cứu hộ, nhưng... bạn phải làm.",
		"icon": "landed_flop_rocket.png"
	},
	"Mảnh vỡ tàu": {
		"name": "Mảnh vỡ tàu",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Những mảnh vỡ từ con tàu đấy!",
		"icon": "space_debris.png"
	},
	"Cá Tiên Tri": {
		"name": "Cá Tiên Tri",
		"type": "Mảnh thành phần",
		"rarity": "Tốt",
		"description": "Hãy nhìn vào mắt nó. Và bạn sẽ thấy được... thứ bạn cần ở Chú cá này.",
		"icon": "seerfish.png"
	},
	"Cúp Hewgodooko": {
		"name": "Cúp Hewgodooko",
		"type": "Đồ nội thất",
		"rarity": "Bình Thường",
		"description": "Đây là một phi vụ lớn đấy.",
		"icon": "hewgodooko_trophy.png"
	},
		"Quẹt Zippo": {
			"name": "Quẹt Zippo",
			"type": "Trang sức",
			"rarity": "Tốt",
			"description": "Khi bạn đóng nắp lại, lửa bùng lên. Đó là một đột phá công nghệ tiên tiến! Cường hoá 20% ST Lửa.",
			"recipe": {
				"name": "Máy nướng cá",
				"output_qty": 1,
				"type": "Trạm Chế tạo",
				"ingredients": [{
					"name": "Bình Nitơ",
					"qty": 2
				}, {
					"name": "Đèn Dầu Tartil",
					"qty": 3
				}, {
					"name": "Cá đuôi quỷ",
					"qty": 6
				}, {
					"name": "Hóa ThạCh Đại Cốt",
					"qty": 10
				}]
			},
			"icon": "sp_burny_lidflipper_0.png"
		}
};
$master.api.creature = {
	"Glutterfly": {
		"name": ["Glutterfly Thợ", "Glutterfly Trinh sát", "Glutterfly Chúa", "[Già cỗi] Glutterfly Trinh sát", "[Già cỗi] Glutterfly Chúa", "Glutterfly Trướng phình"],
		"type": "Glutterfly",
		"stone0": "Vợt Glutterfly",
		"stone1": "Đèn Pin Glutterfly",
		"description": "Những con côn trùng khổng lồ, phát sáng này Chỉ ra ngoài vào ban đêm. Vỏ giáp của Chúng cực kì cứng, và nói Chung là Chúng dường như nổi quạo với mọi thứ.",
		"produce": "Phấn cánh Glutterfly",
		"symbiosis": "Bậc thầy độc dược",
		"toughness": 0,
		"poison_r": 90,
		"electric_r": 0,
		"fire_r": -20,
		"ice_r": 0,
		"drop": ["Dịch phát quang", "Vỏ Kitin"],
		"icon": ["glutterfly_worker.png", "glutterfly_drone.png", "glutterfly_Queen.png", "ancient_glutterfly_drone.png", "ancient_glutterfly_Queen.png", "bloated_glutterfly.png"]
	},
	"Glidopus": {
		"name": ["Glidopus Mới nở", "Glidopus", "Glidopus Đại mẫu", "[Lục] Glidopus", "[Lục] Glidopus Đại mẫu", "Glidopus Cao niên"],
		"type": "Glidopus",
		"stone0": "Bong bóng Glidopus",
		"stone1": "Kính vạn hoa",
		"description": "Lơ lửng và lấy bùn làm nới trú ẩn là một loài sinh vật Chân đầu với ba xúc tu. Lũ Glidopus dường như có một cái mỏ sâu bên trong cơ thể Chúng để nghiền thức ăn.",
		"produce": "Ấu trùng Glidopus",
		"symbiosis": "Hưng phấn với nước",
		"toughness": 0,
		"poison_r": 20,
		"electric_r": -30,
		"fire_r": 80,
		"ice_r": 0,
		"drop": ["Vòi Glidopus", "Mực Glidopus", "Mỏ Glidopus"],
		"icon": ["glidopus_hatChling.png", "glidopus.png", "glidopus_matriarCh.png", "verdant_glidopus.png", "verdant_glidopus_matriarCh.png", "elder_glidopus.png"]
	},
	"Wompit": {
		"name": ["Wompit", "Wompit Cái", "Wompit Đực", "[Cứng cáp] Wompit Cái", "[Cứng cáp] Wompit Đực", "Wompit Chúa tể"],
		"type": "Wompit",
		"stone0": "Đai Chân Wompit",
		"stone1": "Gậy Pogo",
		"description": "Một loài sinh vật ưa nhảy nhót có thể được tìm thấy trên khắp Savanna. Chúng thường được thấy là đang nhai Cỏ gai với bộ hàm thô kệCh, Chễm Chệ của Chúng.",
		"produce": "Sữa Wompit",
		"symbiosis": "Hung hăng",
		"toughness": 0,
		"poison_r": 50,
		"electric_r": 10,
		"fire_r": 50,
		"ice_r": 0,
		"drop": ["Da Wompit", "Xương Wompit", "Gân chân Wompit", "Móng Chân Wompit", "Trái tim Wompit nguyên vẹn"],
		"icon": ["wompit.png", "wompit_heifer.png", "wompit_bull.png", "sterling_wompit_heifer.png", "sterling_wompit_bull.png", "womplord.png"]
	},
	"Tartil": {
		"name": ["Tartil Ấu trùng", "Tartil", "Tartil Nhão nát", "[Nhớp nháp] Tartil", "[Nhớp nháp] Tartil Nhão nát", "Tartil Huyết sắc"],
		"type": "Tartil",
		"stone0": "Thùng phóng xạ",
		"stone1": "Bom 10 tấn",
		"description": "Không rõ những sinh vật này hoàn toàn cấu tạo nên từ hắc ín hay Chỉ đơn giản là bị phủ hắc ín. Nhưng dù là gì đi nữa, Chúng cũng cực kỳ dính, và dường như Chúng cũng có vẻ không vui lắm về điều đó",
		"produce": "Đèn Dầu Tartil",
		"symbiosis": "Nội tạng nóng rực",
		"toughness": 25,
		"poison_r": 0,
		"electric_r": 50,
		"fire_r": -25,
		"ice_r": 0,
		"drop": ["Nhựa nhầy Tartil", "Hổ PháCh", "Lưỡi Tartil"],
		"icon": ["tartil_larvy.png", "tartil.png", "tartil_pappy.png", "filthy_tartil.png", "filthy_tartil_pappy.png", "blood_tartil.png"]
	},
	"Wat": {
		"name": ["Wat", "[Dòng phụ] Wat", "[Dòng mẫu] Wat", "[Dòng phụ] [Siêu cường] Wat", "[Dòng mẫu] [Siêu cường] Wat", "Wat Cổ linh"],
		"type": "Wat",
		"stone0": "Búa cánh dơi",
		"stone1": "Túi ngủ",
		"description": "Những sinh vật nhỏ giống dơi này tụ lại thành từng bầy và bao vây kín bất kì thứ gì tới gần. Những Chúng siêu khó tính khi bạn biết về Chúng.",
		"produce": "Phân Wat",
		"symbiosis": "Tốc độ Chết người",
		"toughness": 0,
		"poison_r": 0,
		"electric_r": 35,
		"fire_r": -20,
		"ice_r": 0,
		"drop": ["Cánh Wat", "Búi lông Wat", "Móng Wat"],
		"icon": ["wat.png", "pap_wat.png", "mam_wat.png", "pap_grandwat.png", "mam_grandwat.png", "ancient_shadowy_wat.png"]
	},
	"Zug": {
		"name": ["Zug", "Zug Cái", "Zug Đực", "Zug Cái Ngoại cỡ", "Zug Đực Ngoại cỡ", "Zug Đại thủ hộ"],
		"type": "Zug",
		"stone0": "Đèn plasma",
		"stone1": "Động cơ vĩnh cửu",
		"description": "Lũ Zug khá là lười khi Chúng cố gắng tránh di Chuyển nhiều nhất có thể. Vì lẽ đó, cơ thể Chúng Chứa một nguồn cung cấp điện vô hạn, phần còn lại tới từ quá trình trao đổi Chất Bình Thường của Chúng.",
		"produce": "Da Zug nhiễm điện",
		"symbiosis": "Sạc tĩnh điện",
		"toughness": 10,
		"poison_r": -30,
		"electric_r": 35,
		"fire_r": -30,
		"ice_r": 0,
		"drop": ["Mai Zug", "Xương bánh Chè Zug", "Bugi phóng điện"],
		"icon": ["zug.png", "zug_dug.png", "zug_mug.png", "zug_dug_lug.png", "zug_mug_lug.png", "zuguardian.png"]
	},
	"Vomma": {
		"name": ["Vomma", "Vomma Tổ mẫu", "Vomma Tổ phụ", "[Nóng nảy] Vomma Tổ mẫu", "[Nóng nảy] Vomma Tổ phụ", "Vomma Khiếm thị"],
		"type": "Vomma",
		"stone0": "Túi trứng Vomma giả",
		"stone1": "Micro Vomma",
		"description": "Lũ Vomma có một bản năng tự vệ cực mạnh mẽ khi Chúng sẵn lòng hi sinh ấu trùng của mình để cứu bản thân. Điều đó khá ổn, mặc dù... Chúng có thể tạo rất nhiều ấu trùng mới Chỉ trong vài giây.",
		"produce": "Bóng gelatin",
		"symbiosis": "Vomma oanh tạc",
		"toughness": 25,
		"poison_r": -20,
		"electric_r": -20,
		"fire_r": 75,
		"ice_r": 0,
		"drop": ["Mỡ Vomma", "Vomma con", "Ch*m Vomma"],
		"icon": ["vomma.png", "vomma_momma.png", "vomma_gramp.png", "tempered_vomma_momma.png", "tempered_vomma_gramp.png", "sightless_vomma.png"]
	},
	"Throak": {
		"name": ["Throak", "[Già dặn] Throak", "[To lớn] Throak", "[Già dặn] [Độc ác] Throak", "[To lớn] [Độc ác] Throak", "Throak Dị huyết"],
		"type": "Throak",
		"stone0": "Cụm cáp xúc tu",
		"stone1": "Đinh Ba",
		"description": "Những sợi gân dài, mảnh của lũ Throak có thể luồn láCh một cáCh thành thạo vào hệ thống mạCh của Bawg và làm sạCh các mảnh cặn cùng kí sinh trùng bên trong.",
		"produce": "Thạch Throak",
		"symbiosis": "Tàn dư băng giá",
		"toughness": 0,
		"poison_r": 20,
		"electric_r": -20,
		"fire_r": 0,
		"ice_r": 100,
		"drop": ["Throak Polyp", "Dãi Throak", "Xúc tu Throak", "Tuyến trùng Throak"],
		"icon": ["throak.png", "elder_throak.png", "giant_throak.png", "elder_malicious_throak.png", "giant_malicious_throak.png", "bawgblood_throak.png"]
	},
	"Snorble": {
		"name": ["Snorble", "[Cồng kềnh S norble", "[Nghẹn họng] Snorble", "[Cồng kềnh] [Cháy nắng] Snorble", "[Nghẹn họng] [Cháy nắng] Snorble", "Snorble Hạ áp"],
		"type": "Snorble",
		"stone0": "Đai Snorble",
		"stone1": "Xe điều khiển",
		"description": "Lũ Snorble là những sinh vật cực kì ồn ào khi bị khiêu khíCh, nhưng Chúng Chỉ thật sự thíCh ngồi một Chỗ và đọc những cuốn sáCh hay.",
		"produce": "Polymer Snorble",
		"symbiosis": "Thổi phồng điên cuồng",
		"toughness": 0,
		"poison_r": 0,
		"electric_r": 0,
		"fire_r": 0,
		"ice_r": 0,
		"drop": ["Da Snorble", "Túi khí Snorble", "Lưỡi Snorble"],
		"icon": ["snorble.png", "bloated_snorble.png", "engorged_snorble.png", "bloated_burnt_snorble.png", "engorged_burnt_snorble.png", "depressurized_snorble.png"]
	},
	"Satgat": {
		"name": ["[Bập bẹ] Satgat", "Satgat", "[Vụng về] Satgat", "[Nhạy cảm] Satgat", "[Vụng về] [Nhạy cảm] Satgat", "Satgat Bất hoà"],
		"type": "Satgat",
		"stone0": "Mặt nạ quyến rũ",
		"stone1": "Ống Nhòm",
		"description": "Được biết tới là một trong những loài vụng về nhất, lũ Satgat luôn ẩn mặt trong tấm mũ nhọn để Chắc Chắn rằng không ai có thể thấy biểu cảm bối rối của Chúng.",
		"produce": "Lụa Satgat",
		"symbiosis": "Sự giận dữ đáng yêu",
		"toughness": 20,
		"poison_r": 10,
		"electric_r": -25,
		"fire_r": 50,
		"ice_r": 0,
		"drop": ["Vỏ xương Satgat", "Thịt Satgat", "Ruột Satgat"],
		"icon": ["widdle_satgat.png", "satgat.png", "awkward_satgat.png", "sensitive_satgat.png", "awkward_sensitive_satgat.png", "desaturated_satgat.png"]
	},
	"Wojack": {
		"name": ["Wojack Đào mạnh", "Wojack", "Wojack Cảnh vệ", "[Bết dính] Wojack ", "[Bết dính] Wojack Cảnh vệ", "Wojack BạCh sắc"],
		"type": "Wojack",
		"stone0": "Xà phòng Wojack",
		"stone1": "Mũ thợ mỏ",
		"description": "Chúng có phải là giun không? Chúng là sứa à? Hay Chúng là một bông hoa? Tất cả đều đúng. Nó giống như việc dành phần lớn thời gian ở trong lòng Đất, và ăn các nang rễ của một loại cây đầy lông (!?)",
		"produce": "Hương liệu Wojack",
		"symbiosis": "Cuộc đột kíCh ngầm",
		"toughness": 0,
		"poison_r": 25,
		"electric_r": 0,
		"fire_r": 0,
		"ice_r": 0,
		"drop": ["Cánh hoa Wojack", "Vòi Wojack", "Giác mạc Wojack", "Lông mi Wojack"],
		"icon": ["wojack_digling.png", "wojack.png", "wojack_larvaguard.png", "sticky_wojack.png", "sticky_wojack_larvaguard.png", "bleaChed_wojack.png"]
	},
	"Bamli": {
		"name": ["Bamli", "Bamli Râu rậm", "Bamli Hiếu Chiến", "[Xảo quyệt] Bamli Râu rậm", "[Xảo quyệt] Bamli Hiếu Chiến", "Bamli Cuồng Chiến"],
		"type": "Bamli",
		"stone0": "Xô Bamli",
		"stone1": "Kính bốn mắt",
		"description": "Mặc dù có Chế độ ăn rất kinh khủng, lũ Bamli dường như có một thân hình hoàn hảo, có thể do khả năng cắm đầu vào Bawg và hút lấy năng lượng vào cơ thể của Chúng. Chúng cũng có những điều thú vị có thể làm với bộ râu của mình.",
		"produce": "Hormone lạ",
		"symbiosis": "Sức mạnh bộ râu",
		"toughness": 0,
		"poison_r": 0,
		"electric_r": 40,
		"fire_r": 60,
		"ice_r": 20,
		"drop": ["Râu Bamli", "Sừng Bamli", "Bóng khí Bamli"],
		"icon": ["bamli.png", "bamli_stashster.png", "bamli_charger.png", "wily_bamli_stashster.png", "wily_bamli_charger.png", "raving_bamli.png"]
	},
	"Shirk": {
		"name": ["Shirk", "[Khệnh khạng] Shirk", "[Năng nề] Shirk", "[Khệnh khạng] [Tinh quái] Shirk", "[Năng nề] [Tinh quái] Shirk", "Shirk XíCh linh"],
		"type": "Shirk",
		"stone0": "Trứng Shirk vá sơ sài",
		"stone1": "Còi trắng",
		"description": "Loài cá Chim lượng cư này có khả năng bay và bơi với một tốc độ đáng kinh ngạc! Mỏ của Chúng có thể ngoạm một cú mạnh tới nỗi tạo ra sóng âm điện từ. Mặc dù vậy, điều đó khiến Chúng trở thành những vị kháCh tồi tệ trong một bữa tiệc.",
		"produce": "Khối Natri",
		"symbiosis": "Cái mỏ xấu xí",
		"toughness": 0,
		"poison_r": 60,
		"electric_r": 0,
		"fire_r": -30,
		"ice_r": 0,
		"drop": ["Mỡ Shirk", "Mỏ Shirk", "Lông Shirk", "Tuyến muối Shirk"],
		"icon": ["shirk.png", "gert_shirk.png", "mersive_shirk.png", "gert_berg_shirk.png", "mersive_berg_shirk.png", "redwing_shirk.png"]
	},
	"Glaser": {
		"name": ["Glaser Hươu non", "Glaser Hươu cái", "Glaser Hươu đực", "[Quý tộc] Glaser Hươu cái", "[Quý tộc] Glaser Hươu đực", "Glaser Râu bạc"],
		"type": "Glaser",
		"stone0": "Bẫy Glaser",
		"stone1": "Tẩu thuốc",
		"description": "Bằng cáCh khai thác trường điện từ của hành tình, lũ Glaser có thể đánh các nguyên tử vào nhau để tạo ra một luồng laser cực mạnh. Chúng cũng có thể Chà những cái Que để lấy lửa, nhưng cáCh đó trông Chẳng ấn tượng lắm.",
		"produce": "Sợi len",
		"symbiosis": "Cơn lạnh lướt qua",
		"toughness": 0,
		"poison_r": -20,
		"electric_r": 50,
		"fire_r": -25,
		"ice_r": 80,
		"drop": ["Mảnh Gạc Glaser", "Guốc Glaser", "Dạ dày Glaser", "Bướu điện Glaser"],
		"icon": ["glaser_fawn.png", "glaser_doe.png", "glaser_buck.png", "royal_glaser_doe.png", "royal_glaser_buck.png", "greybearded_glaser.png"]
	},
	"Slurb": {
		"name": ["Slurb", "[Kinh khủng] Slurb", "[Kì quái] Slurb", "[Kinh khủng] [Phẫn nộ] Slurb", "[Kì quái] [Phẫn nộ] Slurb", "Slurb Thiếu ngủ"],
		"type": "Slurb",
		"stone0": "Vòng Tay Từ Tính",
		"stone1": "Bạt Lò Xo",
		"description": "Loài sinh vật giống ốc sên hay tự ái này có thể di Chuyển nhanh tới mức Chỉ thấy được Chúng như những vệt mờ. Mặc dù Chúng thật sự không thíCh vậy, Cho tới khi vệt mờ không phải là đặc điểm hấp dẫn nhất.",
		"produce": "Nước nhầy Slurb",
		"symbiosis": "Não Slurb",
		"toughness": 20,
		"poison_r": 70,
		"electric_r": -10,
		"fire_r": 0,
		"ice_r": 0,
		"drop": ["Vỏ Slurb", "Xương sống Slurb", "Nam Châm Slurb"],
		"icon": ["slurb.png", "horrible_slurb.png", "monstrous_slurb.png", "horrible_raging_slurb.png", "monstrous_raging_slurb.png", "sleepless_slurb.png"]
	},
	"Lyff": {
		"name": ["Lyff", "[Điêu luyện] Lyff", "[Thành thạo] Lyff", "[Điêu luyện] Lyff Dị sắc", "[Thành thạo] Lyff Dị sắc", "Lyff Cực đại"],
		"type": "Lyff",
		"stone0": "Đồ Chơi Lyff",
		"stone1": "Tạ đòn",
		"description": "Lũ Lyff Chưa bao giờ tiến hoá để có hộp sọ, vì thế Chúng đã tiến hoá bù đắp lại bằng khả năng phát triển một khối băng bao xung quanh não. Đó hẳn phải là một quá trình phúc tạp, những tự nhiên không hoàn hảo.",
		"produce": "Tinh thể Lyff",
		"symbiosis": "Pha lê trị liệu",
		"toughness": 0,
		"poison_r": 0,
		"electric_r": 0,
		"fire_r": 60,
		"ice_r": 50,
		"drop": ["Da Lyff", "Lưỡi Lyff", "Bong bóng khí Lyff", "Gân Lyff"],
		"icon": ["lyff.png", "dueven_lyff.png", "skwot_lyff.png", "dueven_lyff_broh.png", "skwot_lyff_broh.png", "max_lyff.png"]
	},
	"Blastcrab": {
		"name": ["Blastcrab  Nén", "Blastcrab", "Blastcrab Trùm đàn", "[Tăng áp] Blastcrab", "[Tăng áp] Blastcrab Trùm đàn", "Blastcrab Sảnh dịCh"],
		"type": "Blastcrab",
		"stone0": "Thùng Dầu",
		"stone1": "Thùng giữ lạnh",
		"description": "Chúng sở hữu một lớp vỏ siêu đàn hồi thứ có thể Chịu được nhiệt độ và áp suất cực kì lớn liên tục sinh ra bên trong cơ thể Chúng. Chúng cũng thíCh tennis.",
		"produce": "Ch4",
		"symbiosis": "Nhiệt giáp",
		"toughness": 0,
		"poison_r": 0,
		"electric_r": 0,
		"fire_r": 100,
		"ice_r": 0,
		"drop": ["Vỏ Blastcrab", "Da Blastcrab", "Tuyến đánh lửa"],
		"icon": ["blastcrabling.png", "blastcrab.png", "blastcrab_lord.png", "pressurized_blastcrab.png", "pressurized_blastcrab_lord.png", "liquid-cooled_blastcrab.png"]
	},
	"Gallum": {
		"name": ["Gallum", "[Kềnh càng] Gallum", "[Khổng lồ] Gallum", "[Kềnh càng] [Vôi hoá] Gallum", "[Khổng lồ] [Vôi hoá] Gallum", "Gallum Đơn sắc"],
		"type": "Gallum",
		"stone0": "Khối Rubik",
		"stone1": "Nhuyễn vị giáp",
		"description": "Một sự dung hòa giữa những Mảnh Pha lê Tundra và những mảnh xác sinh vật, con quái vật này có một hào quang thần bì bao quanh Chúng. Chúng dường như tự ý thức được về xương sườn của Chúng.",
		"produce": "Chất nhầy Gallum",
		"symbiosis": "Nhận thức về điện",
		"toughness": 25,
		"poison_r": 100,
		"electric_r": -50,
		"fire_r": 0,
		"ice_r": 50,
		"drop": ["Giáp Gallum", "Thịt Gallum", "Xương sườn Gallum", "Lõi DịCh Chuyển"],
		"icon": ["gallum.png", "lumbering_gallum.png", "gargantuan_gallum.png", "lumbering_calcified_gallum.png", "gargantuan_calcified_gallum.png", "monoChromatic_gallum.png"]
	},
	"Gulanti": {
		"name": ["Gulanti", "[Nghiến hàm] Gulanti", "[Phổng phao] Gulanti", "[Nghiến hàm] [Nhún nhảy] Gulanti", "[Phổng phao] [Nhún nhảy] Gulanti", "Gulanti Hung huyết"],
		"type": "Gulanti",
		"stone0": "Bánh đuông dừa",
		"stone1": "Áo cáCh điện",
		"description": "Những con vật thân thiện này sẽ trở nên cực kì phẫn nộ khi đối đầu với bất cứ thứ gì. Rất khó để Chúng nguôi đi.",
		"produce": "Thịt Gulanti",
		"symbiosis": "Ham muốn sốc điện",
		"toughness": 0,
		"poison_r": -50,
		"electric_r": 80,
		"fire_r": -70,
		"ice_r": 80,
		"drop": ["Da Gulanti", "Xương hàm Gulanti", "Tai Gulanti", "Lõi điện Gulanti"],
		"icon": ["gulanti.png", "engorged_gulanti.png", "swollen_gulanti.png", "engorged_jumpy_gulanti.png", "swollen_jumpy_gulanti.png", "hotblooded_gulanti.png"]
	},
};
