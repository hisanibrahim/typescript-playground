enum AssetType {
  MACHINE = "MACHINE",
  FACILITY = "FACILITY",
  OTHERS = "OTHERS",
}

type Asset = {
  name: string;
  location: string;
  type: string;
};

type Facility = Partial<Asset>;

type Machine = Pick<Asset, "name" | "location">;

type OtherAsset = Omit<Asset, "type">;

type SubAsset = Required<Asset>;

type AssetReturnType = ReturnType<() => number>;

type DropdownListItem = Record<string, number>;

type DropdownList = DropdownListItem[];

const dropdownList: DropdownList = [
  {
    MACHINE: 1,
    FACILITY: 1,
    OTHERS: 1,
  },
];

function getAsset(a: number, b: number): AssetReturnType {
  return 1;
}

getAsset(1, 2);

export {};
