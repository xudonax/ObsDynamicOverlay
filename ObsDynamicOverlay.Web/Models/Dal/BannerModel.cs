using ObsDynamicOverlay.Web.Business;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ObsDynamicOverlay.Web.Models.Dal
{
    public class BannerModel
    {
        /// <summary>
        /// GUID for this entity
        /// </summary>
        [Required]
        public Guid Id { get; set; }

        /// <summary>
        /// Title for this entity
        /// </summary>
        [Required]
        [StringLength(100, MinimumLength = 10)]
        public string Title { get; set; }

        /// <summary>
        /// Subtitle for this entity
        /// </summary>
        [Required]
        [StringLength(150)]
        public string Subtitle { get; set; }

        /// <summary>
        /// Date and time this entity was added to the database
        /// </summary>
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime DateAdded { get; set; }

        /// <summary>
        /// Image to be shown for this entity, maximum size is <see cref="Constants.MegaByte" />
        /// </summary>
        [Required]
        [MaxLength(Constants.MegaByte)]
        public byte[] Image { get; set; }
    }
}
