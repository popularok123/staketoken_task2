import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MetaNode = buildModule("MetaNode", (m) => {
    const MetaNodeToken = m.contract("MetaNodeToken");
    return { MetaNodeToken };
});

export default MetaNode;