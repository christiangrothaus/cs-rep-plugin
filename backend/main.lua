local logger = require("logger")
local millennium = require("millennium")

local function on_load()
    print("CSRep Plugin loaded")
    millennium.ready()
end

local function on_unload()
    logger:info("CSRep Plugin unloaded")
end

-- Called when the Steam UI has fully loaded.
local function on_frontend_loaded()
    logger:info("Frontend loaded")
end

return {
    on_frontend_loaded = on_frontend_loaded,
    on_load = on_load,
    on_unload = on_unload
}
