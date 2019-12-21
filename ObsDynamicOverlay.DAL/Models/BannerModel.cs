using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ObsDynamicOverlay.DAL.Models
{
    public class BannerModel
    {
        /// <summary>
        /// ID for this entity
        /// </summary>
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        [Key]
        public int Id { get; set; }

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
        [MaxLength(Constants.MegaByte)]
        public byte[] Image { get; set; }
    }
}
