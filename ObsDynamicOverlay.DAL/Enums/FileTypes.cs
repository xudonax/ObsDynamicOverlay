using System.ComponentModel;

namespace ObsDynamicOverlay.DAL.Enums
{
    public enum FileTypes
    {
        [Description("application/octet-stream")]
        Unknown = 0,
        [Description("image/bmp")]
        BMP = 1,
        [Description("image/gif")]
        GIF = 2,
        [Description("image/x-icon")]
        ICO = 3,
        [Description("image/jpeg")]
        JPEG = 4,
        [Description("image/png")]
        PNG = 5,
        [Description("image/svg+xml")]
        SVG = 6,
        [Description("image/tiff")]
        TIFF = 7,
        [Description("image/webp")]
        WebP = 8
    }
}
