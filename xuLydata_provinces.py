import json

# Đọc từ file JSON gốc (ví dụ: "vietnam_locations_raw.json")
with open('provinces.json', 'r', encoding='utf-8') as f:
    raw_data = json.load(f)

# Khởi tạo kết quả
converted = {}

for province in raw_data:
    province_name = province['name']
    districts = province.get('districts', [])
    
    converted[province_name] = {}
    for district in districts:
        district_name = district['name']
        wards = district.get('wards', [])
        ward_names = [ward['name'] for ward in wards]
        
        converted[province_name][district_name] = ward_names

# Ghi ra file JSON đã chuyển đổi
with open('locations.json', 'w', encoding='utf-8') as f:
    json.dump(converted, f, ensure_ascii=False, indent=2)

print("Chuyển đổi hoàn tất!")
